function validateEmail(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const email = document.getElementById("email").value;
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");
    
    // Regular expression for email validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    errorMessage.style.display = "none";
    successMessage.style.display = "none";

    if (email.match(emailRegex)) {
        // Valid email address
        successMessage.textContent = "Success! Email address is valid.";
        successMessage.style.display = "block";
    } else {
        // Invalid email address
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = "block";
    }
}

const emailForm = document.getElementById("emailForm");
emailForm.addEventListener("submit", validateEmail);
