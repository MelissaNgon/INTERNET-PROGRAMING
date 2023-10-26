const presetPassword = "123123";

function validatePassword(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    successMessage.style.display = "none";
    errorMessage.style.display = "none";

    if (password === presetPassword) {
        successMessage.textContent = "Success! Password matches.";
        successMessage.style.display = "block";
    } else {
        errorMessage.textContent = "Re-enter Password. Password does not match.";
        errorMessage.style.display = "block";
    }
}

const passwordForm = document.getElementById("passwordForm");
passwordForm.addEventListener("submit", validatePassword);
