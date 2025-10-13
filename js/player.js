// --- js/player.js ---
// Refactored to load the specific playlist unlocked by auth.js.

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');
    if (!appContainer) return;

    // --- Player Element References ---
    const audioElement = document.getElementById('audio-element');
    const songListElement = document.getElementById('song-list');
    const lyricsDisplay = document.getElementById('lyrics-display');
    
    // ... (the rest of your element references are unchanged)
    const playPauseButton = document.getElementById('play-pause-button');
    const playPauseIcon = playPauseButton.querySelector('i');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const albumArt = document.getElementById('album-art');
    const albumArtShadow = document.querySelector('.album-art-shadow');
    const trackTitleDisplay = document.getElementById('current-track-title');
    const trackArtistDisplay = document.getElementById('current-track-artist');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    const volumeControl = document.getElementById('volume-control');

    let currentTrackIndex = -1;
    let songDatabase = []; // We will fill this with the correct playlist later

    // --- Helper Function ---
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // --- Load Song List (this function is now perfect, no changes needed) ---
    function populateSongList() {
        songListElement.innerHTML = '';
        if (!songDatabase || songDatabase.length === 0) return;

        songDatabase.forEach((song, index) => {
            const listItem = document.createElement('li');
            listItem.dataset.index = index;
            listItem.innerHTML = `
                <div>
                    <div class="song-title">${song.title}</div>
                    <div class="song-artist">${song.artist}</div>
                </div>
                <a href="${song.file}" class="download-button" download>
                    <i class="fas fa-download"></i>
                </a>
            `;
            
            listItem.querySelector('.download-button').addEventListener('click', (e) => e.stopPropagation());
            listItem.addEventListener('click', () => { loadTrack(index); playTrack(); });
            songListElement.appendChild(listItem);
        });
    }

    // --- Track Management & UI updates... (all the functions below are unchanged) ---
    function loadTrack(index) {
        if (index < 0 || index >= songDatabase.length) return;
        const activeListItem = songListElement.querySelector('li.active-song');
        if (activeListItem) { activeListItem.classList.remove('active-song'); }
        const newActiveListItem = songListElement.querySelector(`li[data-index="${index}"]`);
        if (newActiveListItem) { newActiveListItem.classList.add('active-song'); }
        currentTrackIndex = index;
        const track = songDatabase[currentTrackIndex];
        audioElement.src = track.file;
        trackTitleDisplay.textContent = track.title;
        trackArtistDisplay.textContent = track.artist;
        albumArt.src = track.cover;
        albumArtShadow.style.backgroundImage = `url('${track.cover}')`;
        // ===== ADD THIS LOGIC TO UPDATE LYRICS =====
        if (track.lyrics && track.lyrics.trim() !== '') {
            lyricsDisplay.textContent = track.lyrics;
            lyricsDisplay.parentElement.style.opacity = '1'; // Make container visible
        } else {
            lyricsDisplay.textContent = 'No lyrics available for this track.';
            lyricsDisplay.parentElement.style.opacity = '0.7'; // Fade out if no lyrics
        }
        // ===== END OF LYRICS LOGIC =====
        progressBar.value = 0;
        currentTimeDisplay.textContent = '0:00';
    }
    function playTrack() {
        if (currentTrackIndex === -1 && songDatabase.length > 0) { loadTrack(0); }
        audioElement.play().catch(error => console.error("Playback failed:", error));
    }
    function pauseTrack() { audioElement.pause(); }
    function togglePlayPause() {
        if (audioElement.paused || audioElement.ended) { playTrack(); } else { pauseTrack(); }
    }
    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + songDatabase.length) % songDatabase.length;
        loadTrack(currentTrackIndex);
        playTrack();
    }
    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % songDatabase.length;
        loadTrack(currentTrackIndex);
        playTrack();
    }
    function updateProgress() {
        if (isNaN(audioElement.duration)) return;
        progressBar.value = (audioElement.currentTime / audioElement.duration) * 100;
        currentTimeDisplay.textContent = formatTime(audioElement.currentTime);
    }
    function updateDuration() {
        durationDisplay.textContent = isNaN(audioElement.duration) ? '0:00' : formatTime(audioElement.duration);
    }
    audioElement.addEventListener('loadedmetadata', updateDuration);
    audioElement.addEventListener('timeupdate', updateProgress);
    audioElement.addEventListener('ended', nextTrack);
    audioElement.addEventListener('play', () => { playPauseIcon.classList.remove('fa-play'); playPauseIcon.classList.add('fa-pause'); });
    audioElement.addEventListener('pause', () => { playPauseIcon.classList.add('fa-play'); playPauseIcon.classList.remove('fa-pause'); });
    playPauseButton.addEventListener('click', togglePlayPause);
    prevButton.addEventListener('click', prevTrack);
    nextButton.addEventListener('click', nextTrack);
    progressBar.addEventListener('input', () => {
        if (!isNaN(audioElement.duration)) { audioElement.currentTime = (progressBar.value / 100) * audioElement.duration; }
    });
    volumeControl.addEventListener('input', (e) => { audioElement.volume = e.target.value; });

    
    // --- Main Initialization Logic (THE FIX IS HERE) ---
    
    function initializePlayer() {
        console.log("App container visible, initializing player...");

        // === START OF THE FIX ===
        // 1. Read the unlocked playlist ID from session storage.
        const unlockedPlaylistId = sessionStorage.getItem('sanctuary_unlocked_playlist');

        // 2. Check if the ID is valid and if a playlist with that name exists.
        if (unlockedPlaylistId && playlists[unlockedPlaylistId]) {
            // 3. Load the correct song array into our local songDatabase variable.
            songDatabase = playlists[unlockedPlaylistId];
            console.log(`Successfully loaded playlist: ${unlockedPlaylistId}`);
        } else {
            console.error(`Could not find a valid playlist for ID: ${unlockedPlaylistId}`);
            // songDatabase will remain empty if no valid playlist is found.
        }
        // === END OF THE FIX ===

        // Now, the rest of the function will work correctly because songDatabase has been filled.
        populateSongList();
        audioElement.volume = volumeControl.value; // Set initial volume
        
        if (songDatabase.length > 0) {
            loadTrack(0);
            audioElement.load(); // Load metadata for the first track
        } else {
            trackTitleDisplay.textContent = "Error: Library not found.";
            trackArtistDisplay.textContent = "Please try logging in again.";
        }
    }

    // This part is unchanged and correct
    if (appContainer.classList.contains('visible')) {
        initializePlayer();
    } else {
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.attributeName === 'class' && appContainer.classList.contains('visible')) {
                    initializePlayer();
                    observer.disconnect();
                    return;
                }
            }
        });
        observer.observe(appContainer, { attributes: true });
    }

});