document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        
    } else {
        window.location.href='login.html';
        // Here you can add your code to handle registration, e.g., sending data to your server
    }
});
