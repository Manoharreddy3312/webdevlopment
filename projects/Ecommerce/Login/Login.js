document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const messageElement = document.getElementById("message");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Retrieve user from localStorage
        const storedUserJSON = localStorage.getItem(username);
        if (storedUserJSON) {
            const storedUser = JSON.parse(storedUserJSON);
            if (storedUser.password === password) {
                // Store logged-in user's username
                localStorage.setItem("loggedInUser", username);

                // Display success message and redirect to home page
                messageElement.textContent = "Login successful! Redirecting to home page...";
                messageElement.className = "success";

                setTimeout(() => {
                    window.location.href = "../Home/Home.html";
                }, 1500);
            } else {
                messageElement.textContent = "Invalid username or password.";
                messageElement.className = "error";
            }
        } else {
            // Display error message
            messageElement.textContent = "Invalid username or password.";
            messageElement.className = "error";
        }
    });
});