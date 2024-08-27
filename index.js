document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Clear previous errors
        clearErrors();

        // Get form values
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();

        var valid = true;

        // Validate Name
        if (name === '') {
            document.getElementById('name').classList.add('error');
            document.getElementById('nameError').textContent = 'Name is required.';
            valid = false;
        }

        // Validate Email
        if (email === '') {
            document.getElementById('email').classList.add('error');
            document.getElementById('emailError').textContent = 'Email is required.';
            valid = false;
        } else if (!validateEmail(email)) {
            document.getElementById('email').classList.add('error');
            document.getElementById('emailError').textContent = 'Invalid email format.';
            valid = false;
        }

        // Validate Password
        if (password === '') {
            document.getElementById('password').classList.add('error');
            document.getElementById('passwordError').textContent = 'Password is required.';
            valid = false;
        }

        // If form is valid, you can submit the form or process data
        if (valid) {
            // For now, just show an alert
            alert('Form submitted successfully!');
            // You can add code here to submit the form or process data
            // Example: document.getElementById('registrationForm').submit();
        }
    });

    function validateEmail(email) {
        // Simple email validation regex
        var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function clearErrors() {
        var errorElements = document.querySelectorAll('.error-message');
        var inputElements = document.querySelectorAll('input');

        errorElements.forEach(function(el) {
            el.textContent = '';
        });

        inputElements.forEach(function(el) {
            el.classList.remove('error');
        });
    }
});
