// --- js/player.js ---
// Refactored to control the new, beautiful player UI.

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');
    if (!appContainer) return;

    // --- Player Element References (for the new design) ---
    const audioElement = document.getElementById('audio-element');
    const songListElement = document.getElementById('song-list');
    
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

    // --- Helper Function ---
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // --- Load Song List ---
    function populateSongList() {
        songListElement.innerHTML = '';
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
            
            listItem.querySelector('.download-button').addEventListener('click', (e) => {
                e.stopPropagation();
            });

            listItem.addEventListener('click', () => {
                loadTrack(index);
                playTrack();
            });

            songListElement.appendChild(listItem);
        });
    }

    // --- Track Management ---
    function loadTrack(index) {
        if (index < 0 || index >= songDatabase.length) return;

        const activeListItem = songListElement.querySelector('li.active-song');
        if (activeListItem) {
            activeListItem.classList.remove('active-song');
        }
        const newActiveListItem = songListElement.querySelector(`li[data-index="${index}"]`);
        if (newActiveListItem) {
            newActiveListItem.classList.add('active-song');
        }

        currentTrackIndex = index;
        const track = songDatabase[currentTrackIndex];

        audioElement.src = track.file;
        trackTitleDisplay.textContent = track.title;
        trackArtistDisplay.textContent = track.artist;
        albumArt.src = track.cover;
        albumArtShadow.style.backgroundImage = `url('${track.cover}')`;
        
        progressBar.value = 0;
        currentTimeDisplay.textContent = '0:00';
    }

    function playTrack() {
        if (currentTrackIndex === -1 && songDatabase.length > 0) {
            loadTrack(0); // Load first song if none is loaded
        }
        audioElement.play().catch(error => console.error("Playback failed:", error));
    }

    function pauseTrack() {
        audioElement.pause();
    }
    
    function togglePlayPause() {
        if (audioElement.paused || audioElement.ended) {
            playTrack();
        } else {
            pauseTrack();
        }
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

    // --- UI Updates based on Audio State ---
    function updateProgress() {
        if (isNaN(audioElement.duration)) return;
        progressBar.value = (audioElement.currentTime / audioElement.duration) * 100;
        currentTimeDisplay.textContent = formatTime(audioElement.currentTime);
    }

    function updateDuration() {
        durationDisplay.textContent = isNaN(audioElement.duration) ? '0:00' : formatTime(audioElement.duration);
    }

    // --- Event Listeners for Audio Element ---
    audioElement.addEventListener('loadedmetadata', updateDuration);
    audioElement.addEventListener('timeupdate', updateProgress);
    audioElement.addEventListener('ended', nextTrack);

    audioElement.addEventListener('play', () => {
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
    });

    audioElement.addEventListener('pause', () => {
        playPauseIcon.classList.add('fa-play');
        playPauseIcon.classList.remove('fa-pause');
    });


    // --- Event Listeners for Controls ---
    playPauseButton.addEventListener('click', togglePlayPause);
    prevButton.addEventListener('click', prevTrack);
    nextButton.addEventListener('click', nextTrack);

    progressBar.addEventListener('input', () => {
        if (!isNaN(audioElement.duration)) {
            audioElement.currentTime = (progressBar.value / 100) * audioElement.duration;
        }
    });

    volumeControl.addEventListener('input', (e) => {
        audioElement.volume = e.target.value;
    });

    // --- Main Initialization Logic (THE FIX IS HERE) ---
    
    /**
     * This function contains all the logic to set up the player UI.
     * It's called once the app container is known to be visible.
     */
    function initializePlayer() {
        console.log("App container visible, initializing player...");
        populateSongList();
        audioElement.volume = volumeControl.value; // Set initial volume
        
        if (songDatabase.length > 0) {
            loadTrack(0);
            audioElement.load(); // Load metadata for the first track
        } else {
            trackTitleDisplay.textContent = "No tracks in library.";
        }
    }

    // Check if the app is already visible on page load (e.g., from a refresh with session storage).
    if (appContainer.classList.contains('visible')) {
        initializePlayer();
    } else {
        // If not visible, set up the observer to wait for the password unlock to make it visible.
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.attributeName === 'class' && appContainer.classList.contains('visible')) {
                    initializePlayer();
                    observer.disconnect(); // We only need to do this once.
                    return;
                }
            }
        });
        observer.observe(appContainer, { attributes: true });
    }

}); // End DOMContentLoaded