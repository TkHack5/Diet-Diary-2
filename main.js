document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username && password) {
                alert('Login successful!');
                window.location.href = 'dashboard.html'; // Redirect to dashboard
            } else {
                alert('Please fill out both fields.');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;
            const email = document.getElementById('email').value;

            if (newUsername && newPassword && email) {
                alert('Sign up successful! You can now log in.');
                window.location.href = 'login.html'; // Redirect to login
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});
