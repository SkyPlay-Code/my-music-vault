// --- js/player.js ---

// Wait until the basic HTML structure is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Only run player logic if the main content is potentially visible
    // (This check might be redundant if auth.js handles display correctly, but safe)
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return; // Exit if main content area doesn't exist

    // --- Player Element References ---
    const audioElement = document.getElementById('audio-element');
    const songListElement = document.getElementById('song-list');
    const playPauseButton = document.getElementById('play-pause-button');
    const progressBar = document.getElementById('progress-bar');
    const volumeControl = document.getElementById('volume-control');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    const currentTrackTitleDisplay = document.getElementById('current-track-title');

    let currentTrackIndex = -1; // Index of the currently loaded/playing track, -1 means none
    let isPlaying = false;

    // --- Helper Functions ---
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // --- Load Song List ---
    function populateSongList() {
        songListElement.innerHTML = ''; // Clear existing list items
        songDatabase.forEach((song, index) => {
            const listItem = document.createElement('li');
            listItem.dataset.index = index; // Store the index on the element

            const titleSpan = document.createElement('span');
            titleSpan.className = 'song-title';
            titleSpan.textContent = `${song.title} - ${song.artist}`;

            const downloadLink = document.createElement('a');
            downloadLink.href = song.file;
            downloadLink.textContent = 'Download';
            downloadLink.className = 'download-button';
            downloadLink.setAttribute('download', ''); // HTML5 attribute to trigger download
            // Prevent click on download link from triggering song play
            downloadLink.addEventListener('click', (e) => {
                e.stopPropagation();
            });


            listItem.appendChild(titleSpan);
            listItem.appendChild(downloadLink);


            listItem.addEventListener('click', () => {
                loadTrack(index);
                playTrack();
            });

            songListElement.appendChild(listItem);
        });
    }

    // --- Track Management ---
    function loadTrack(index) {
        if (index < 0 || index >= songDatabase.length) return; // Index out of bounds

        // Remove 'active' class from previously active item
        const activeListItem = songListElement.querySelector('li.active');
        if (activeListItem) {
            activeListItem.classList.remove('active');
        }

        currentTrackIndex = index;
        const track = songDatabase[currentTrackIndex];
        audioElement.src = track.file;
        currentTrackTitleDisplay.textContent = `${track.title} - ${track.artist}`;

        // Add 'active' class to the new list item
         const newActiveListItem = songListElement.querySelector(`li[data-index="${index}"]`);
        if (newActiveListItem) {
             newActiveListItem.classList.add('active');
        }


        // Reset displays until metadata loads
        currentTimeDisplay.textContent = '0:00';
        durationDisplay.textContent = '0:00';
        progressBar.value = 0;
        // Don't auto-play here, let playTrack handle it
    }

    function playTrack() {
        if (currentTrackIndex === -1) { // No track loaded
            if (songDatabase.length > 0) {
                loadTrack(0); // Load the first track if none selected
            } else {
                console.warn("No songs in the database to play.");
                return; // No songs to play
            }
        }
        audioElement.play()
            .then(() => {
                isPlaying = true;
                playPauseButton.textContent = '⏸️'; // Pause symbol
            })
            .catch(error => {
                console.error("Playback failed:", error);
                // Handle potential errors (e.g., browser restrictions on autoplay)
                isPlaying = false;
                 playPauseButton.textContent = '▶️'; // Play symbol
            });
    }

    function pauseTrack() {
        audioElement.pause();
        isPlaying = false;
        playPauseButton.textContent = '▶️'; // Play symbol
    }

    function togglePlayPause() {
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack();
        }
    }

    // --- Update UI based on Audio State ---
    function updateProgress() {
        if (!isNaN(audioElement.duration)) {
            const progress = (audioElement.currentTime / audioElement.duration) * 100;
            progressBar.value = progress;
            currentTimeDisplay.textContent = formatTime(audioElement.currentTime);
        }
    }

    function updateDuration() {
         if (!isNaN(audioElement.duration)) {
            durationDisplay.textContent = formatTime(audioElement.duration);
         } else {
             // Duration might not be available immediately
             durationDisplay.textContent = '--:--';
         }
    }

    // --- Event Listeners for Audio Element ---
    audioElement.addEventListener('loadedmetadata', updateDuration); // When duration is known
    audioElement.addEventListener('timeupdate', updateProgress); // As playback time changes
    audioElement.addEventListener('play', () => {
        isPlaying = true;
        playPauseButton.textContent = '⏸️';
    });
    audioElement.addEventListener('pause', () => {
        isPlaying = false;
        playPauseButton.textContent = '▶️';
    });
     audioElement.addEventListener('ended', () => {
         // Optional: Implement play next track automatically
         // let nextIndex = (currentTrackIndex + 1) % songDatabase.length;
         // loadTrack(nextIndex);
         // playTrack();
         isPlaying = false;
         playPauseButton.textContent = '▶️';
         progressBar.value = 0; // Reset progress bar
         currentTimeDisplay.textContent = '0:00';
     });


    // --- Event Listeners for Controls ---
    playPauseButton.addEventListener('click', togglePlayPause);

    progressBar.addEventListener('input', () => {
        if (!isNaN(audioElement.duration)) {
            const seekTime = (progressBar.value / 100) * audioElement.duration;
            audioElement.currentTime = seekTime;
        }
    });

    volumeControl.addEventListener('input', () => {
        audioElement.volume = volumeControl.value;
    });

    // --- Initial Setup ---
    // Only populate list and setup player *after* successful authentication.
    // We need to observe when the main content becomes visible.
    const observer = new MutationObserver((mutationsList, obs) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                if (mainContent.style.display !== 'none') {
                    console.log("Main content visible, initializing player...");
                    populateSongList();
                    // Set initial volume based on slider default value
                    audioElement.volume = volumeControl.value;
                    // Load the first track info but don't play automatically
                    if(songDatabase.length > 0) {
                         loadTrack(0);
                         // Ensure duration is updated once metadata is loaded for the first track
                         audioElement.load(); // Important to trigger metadata loading without playing
                    } else {
                         currentTrackTitleDisplay.textContent = "No tracks in library.";
                    }

                    obs.disconnect(); // Stop observing once initialized
                    return;
                }
            }
        }
    });

    // Start observing the main content for style changes (specifically display)
    observer.observe(mainContent, { attributes: true });

}); // End DOMContentLoaded