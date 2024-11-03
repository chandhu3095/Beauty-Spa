document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
        return; // Exit the function if fields are empty
    }

    // Simulate a successful login (this is where you would normally check credentials)
    alert('Login successful!');

    // Redirect to the main page after a successful login
    window.location.href = 'index.html'; // Change to your main page
});
