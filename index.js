// Initialize an empty array to store user data
let users = [];

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

    // Create a user object and add it to the users array
    const user = {
        username: username,
        email: email
    };
    users.push(user);

    // Clear the form
    document.getElementById('registrationForm').reset();

    // Display success message and update the user list
    displayMessage('Registration successful!', 'success');
    updateUserList();
});

function displayMessage(message, type) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = type === 'error' ? 'red' : 'green';
}

function updateUserList() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear the existing list

    // Append each user to the list
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `Username: ${user.username}, Email: ${user.email}`;
        userList.appendChild(li);
    });
}
