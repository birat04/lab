document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("register-form").addEventListener("submit", function (e) {
        e.preventDefault();

        let username = document.getElementById("regUsserName").value.trim();
        let email = document.getElementById("regEmail").value.trim();
        let password = document.getElementById("regPassword").value.trim();
        let confirmPassword = document.getElementById("regConfirmPassword").value.trim();

        clearErrors("register-form");

        if (username === "") {
            showError("regUsserName", "Please enter your username");
            return;
        }

        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailPattern.test(email)) {
            showError("regEmail", "Please enter a valid email");
            return;
        }

        if (password.length < 5) {
            showError("regPassword", "Password must be at least 5 characters long");
            return;
        }

        if (password !== confirmPassword) {
            showError("regConfirmPassword", "Passwords do not match");
            return;
        }

        let user = {
            username: username,
            email: email,
            password: password,
        };
        localStorage.setItem("user", JSON.stringify(user));

        showSuccess("register-form", "Registration successful!");
    });

    document.getElementById("loginform").addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("loginEmail").value.trim();
        let password = document.getElementById("loginPassword").value.trim();

        clearErrors("loginform");

        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailPattern.test(email)) {
            showError("loginEmail", "Please enter a valid email");
            return;
        }

        if (password.length < 5) {
            showError("loginPassword", "Password must be at least 5 characters long");
            return;
        }

        let storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
            showError("loginform", "Invalid email or password");
            return;
        }

        showSuccess("loginform", "Login successful!");
    });

    function showError(inputId, message) {
        let inputField = document.getElementById(inputId);
        let errorDiv = document.createElement("div");
        errorDiv.className = "error-message";
        errorDiv.textContent = message;
        inputField.parentNode.appendChild(errorDiv);
    }

    function clearErrors(formId) {
        let form = document.getElementById(formId);
        let errorMessages = form.querySelectorAll(".error-message");
        errorMessages.forEach(function (error) {
            error.remove();
        });
    }

    function showSuccess(formId, message) {
        let form = document.getElementById(formId);
        let successDiv = document.createElement("div");
        successDiv.className = "success-message";
        successDiv.textContent = message;
        form.appendChild(successDiv);

        setTimeout(function () {
            successDiv.remove();
        }, 3000);
    }
});