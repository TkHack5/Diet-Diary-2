document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Save the credentials to localStorage (for simplicity)
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('Signup successful! You can now log in.');

    // Redirect to the login page
    window.location.href = 'index.html';
});
