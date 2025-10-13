// --- js/auth.js ---
// Refactored to handle multiple passwords and playlists.

document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration ---
    // Map your passwords to the playlist keys from songs.js
    const accessCodes = {
        'skymusic#25': 'skymusic',           // This password unlocks the 'skymusic' playlist
        'galaxy*7': 'lemon',     // This NEW password unlocks the 'celestial_gems' playlist
        // 'anotherPassword': 'another_playlist' // Add more here
    };
    // --- End Configuration ---

    // Element References
    const loginScreen = document.getElementById('login-screen');
    const appContainer = document.getElementById('app-container');
    const passwordInput = document.getElementById('password-input');
    const submitButton = document.getElementById('submit-password');
    const errorMessage = document.getElementById('error-message');

    console.warn("Project Sanctuary Security Notice: Using client-side password protection. Audio file URLs are potentially discoverable.");

    function unlockApp(playlistId) {
        // Hide login screen and show the main app
        loginScreen.classList.add('hidden');
        appContainer.classList.add('visible');
        errorMessage.textContent = ''; // Clear any previous error

        // IMPORTANT: Store which playlist was unlocked in the session
        try {
            sessionStorage.setItem('sanctuary_unlocked_playlist', playlistId);
        } catch (e) {
            console.warn("Session storage is unavailable. Password will be required on refresh.");
        }
    }

    function checkPassword() {
        const enteredPassword = passwordInput.value;
        const playlistId = accessCodes[enteredPassword]; // Look up the password

        if (playlistId) {
            // If the password exists in our accessCodes object, unlock with the corresponding playlist ID
            unlockApp(playlistId);
        } else {
            // If it doesn't exist, show an error
            errorMessage.textContent = 'Incorrect Access Code.';
            passwordInput.value = '';
            passwordInput.focus();
            setTimeout(() => { errorMessage.textContent = ''; }, 2000);
        }
    }

    // Check if a playlist was already unlocked in this session
    try {
        const unlockedPlaylist = sessionStorage.getItem('sanctuary_unlocked_playlist');
        if (unlockedPlaylist) {
            unlockApp(unlockedPlaylist);
        } else {
            passwordInput.focus();
        }
    } catch (e) {
        console.warn("Session storage check failed. Showing password gate.");
        passwordInput.focus();
    }

    // --- Event Listeners ---
    submitButton.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkPassword();
        }
    });
});