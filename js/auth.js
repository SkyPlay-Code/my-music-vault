// --- js/auth.js ---
// Refactored to work with the new UI and animations.

document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration ---
    const CORRECT_PASSWORD = 'skymusic#25';
    // --- End Configuration ---

    // Updated Element References for the new design
    const loginScreen = document.getElementById('login-screen');
    const appContainer = document.getElementById('app-container');
    const passwordInput = document.getElementById('password-input');
    const submitButton = document.getElementById('submit-password');
    const errorMessage = document.getElementById('error-message');

    console.warn("Project Sanctuary Security Notice: Using client-side password protection. Audio file URLs are potentially discoverable.");

    function unlockApp() {
        // Use classList to trigger CSS animations
        loginScreen.classList.add('hidden');
        appContainer.classList.add('visible');

        errorMessage.textContent = ''; // Clear any previous error

        try {
            sessionStorage.setItem('sanctuary_access_granted', 'true');
        } catch (e) {
            console.warn("Session storage is unavailable. Password will be required on refresh.");
        }
    }

    function checkPassword() {
        if (passwordInput.value === CORRECT_PASSWORD) {
            unlockApp();
        } else {
            errorMessage.textContent = 'Incorrect Access Code.';
            passwordInput.value = '';
            passwordInput.focus();
            // Clear the error message after 2 seconds
            setTimeout(() => { errorMessage.textContent = ''; }, 2000);
        }
    }

    // Check if access was already granted in this session
    try {
        if (sessionStorage.getItem('sanctuary_access_granted') === 'true') {
            unlockApp();
        } else {
            passwordInput.focus(); // Focus input on page load if gate is shown
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