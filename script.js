// Handle login button click
document.getElementById('loginBtn').addEventListener('click', function() {
    // Get email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you can add validation or API call to check the login credentials

    // For now, let's just log the values (you can remove this later)
    console.log("Email: ", email);
    console.log("Password: ", password);

    // Redirect to the dashboard if login is successful
    // You might want to add validation logic here
    if (email && password) { // Simple check
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        alert("Please fill in both fields."); // Alert if fields are empty
    }
});
