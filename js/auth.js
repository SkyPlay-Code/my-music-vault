// --- js/auth.js ---

document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration ---
    // IMPORTANT: Replace 'YOUR_SECRET_PASSWORD' with your actual strong password.
    // This password lives *in the code* and is visible if someone inspects the source.
    const CORRECT_PASSWORD = 'skymusic#25';
    // --- End Configuration ---

    const passwordGate = document.getElementById('password-gate');
    const mainContent = document.getElementById('main-content');
    const passwordInput = document.getElementById('password-input');
    const submitButton = document.getElementById('submit-password');
    const errorMessage = document.getElementById('error-message');

    // --- Security Limitation Explanation ---
    // This is CLIENT-SIDE protection. It hides the content in the browser.
    // It DOES NOT secure the files on the server (GitHub Pages).
    // Someone who knows the direct URL to your audio files could still access them.
    // This method acts as a deterrent, not foolproof security.
    // For true privacy, server-side authentication is required, which isn't possible on standard GitHub Pages.
    console.warn("Project Sanctuary Security Notice: Using client-side password protection. Audio file URLs are potentially discoverable.");

    // Function to check the password
    function checkPassword() {
        const enteredPassword = passwordInput.value;

        if (enteredPassword === CORRECT_PASSWORD) {
            // Correct password: Hide gate, show content
            passwordGate.style.display = 'none';
            mainContent.style.display = 'flex'; // Use flex as defined in CSS
            document.body.style.justifyContent = 'flex-start'; // Reset body centering
            document.body.style.alignItems = 'flex-start';
            errorMessage.textContent = ''; // Clear any previous error

            // Optional: Remember access for this session using sessionStorage
            // sessionStorage means it's forgotten when the browser tab is closed.
            // localStorage would remember across sessions (less secure if device is shared).
            try {
                sessionStorage.setItem('sanctuary_access_granted', 'true');
            } catch (e) {
                console.warn("Session storage is unavailable. Password required on refresh.");
            }

        } else {
            // Incorrect password
            errorMessage.textContent = 'Incorrect Access Code.';
            passwordInput.value = ''; // Clear the input field
            passwordInput.focus(); // Set focus back to input
        }
    }

    // Check if access was already granted in this session
    try {
        if (sessionStorage.getItem('sanctuary_access_granted') === 'true') {
            // If already granted, bypass the gate immediately
            passwordGate.style.display = 'none';
            mainContent.style.display = 'flex';
             document.body.style.justifyContent = 'flex-start';
             document.body.style.alignItems = 'flex-start';
        } else {
             // Ensure gate is visible if not already granted
             passwordGate.style.display = 'block'; // Or 'flex' depending on your CSS centering
             mainContent.style.display = 'none';
             passwordInput.focus(); // Focus input on load if gate is shown
        }
    } catch (e) {
         console.warn("Session storage check failed. Showing password gate.");
         passwordGate.style.display = 'block'; // Fallback if sessionStorage fails
         mainContent.style.display = 'none';
         passwordInput.focus();
    }


    // --- Event Listeners ---
    // Handle button click
    submitButton.addEventListener('click', checkPassword);

    // Handle pressing Enter key in the password field
    passwordInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent potential form submission default behavior
            checkPassword();
        }
    });
});