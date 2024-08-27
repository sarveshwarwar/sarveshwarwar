document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate form inputs
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        displayMessage('All fields are required.', 'error');
        return;
    }

    if (password !== confirmPassword) {
        displayMessage('Passwords do not match.', 'error');
        return;
    }

    // If validation is successful
    displayMessage('Registration successful!', 'success');
});

function displayMessage(message, type) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = type === 'error' ? 'red' : 'green';
}

