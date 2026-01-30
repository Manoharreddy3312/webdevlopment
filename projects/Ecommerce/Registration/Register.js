document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const messageElement = document.getElementById("message");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Basic validation
        if (!username || !email || !password) {
            messageElement.textContent = "All fields are required.";
            messageElement.style.color = "red";
            return;
        }

        // Check if username already exists
        if (localStorage.getItem(username)) {
            messageElement.textContent = "Username already exists. Please choose another.";
            messageElement.style.color = "red";
            return;
        }

        // Create user object
        const user = {
            username: username,
            email: email,
            password: password
        };

        // Save to localStorage
        // We use the username as the key for simplicity in this example
        localStorage.setItem(username, JSON.stringify(user));

        messageElement.textContent = "Registration Successful! Redirecting to login...";
        messageElement.style.color = "green";

        setTimeout(() => {
            window.location.href = "../Login/Login.html";
        }, 1500);
    });
});