const form = document.getElementById("registrationForm");

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const phone = document.getElementById("phone");
const course = document.getElementById("course");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    // Full Name Validation
    if (fullname.value.trim() === "") {
        showError(fullname, "Full name is required");
        isValid = false;
    } else {
        showSuccess(fullname);
    }

    // Email Validation
    if (email.value.trim() === "") {
        showError(email, "Email is required");
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, "Enter a valid email");
        isValid = false;
    } else {
        showSuccess(email);
    }

    // Password Validation
    if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters");
        isValid = false;
    } else {
        showSuccess(password);
    }

    // Confirm Password Validation
    if (confirmPassword.value !== password.value || confirmPassword.value === "") {
        showError(confirmPassword, "Passwords do not match");
        isValid = false;
    } else {
        showSuccess(confirmPassword);
    }

    // Phone Validation
    if (!/^03\d{9}$/.test(phone.value)) {
        showError(phone, "Enter valid phone number");
        isValid = false;
    } else {
        showSuccess(phone);
    }

    // Gender Validation
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!gender) {
        showRadioError("Please select gender");
        isValid = false;
    } else {
        clearRadioError();
    }

    // Course Validation
    if (course.value === "") {
        showError(course, "Please select course");
        isValid = false;
    } else {
        showSuccess(course);
    }

    // Hobbies Validation
    const hobbies = document.querySelectorAll('input[name="hobby"]:checked');

    if (hobbies.length === 0) {
        showCheckboxError("Select at least one hobby");
        isValid = false;
    } else {
        clearCheckboxError();
    }

    // Message Validation
    if (message.value.trim() === "") {
        showError(message, "Message is required");
        isValid = false;
    } else {
        showSuccess(message);
    }

    // Success Message
    if (isValid) {
        alert("Registration Successful!");
        form.reset();
    }
});

// Show Error Function
function showError(input, message) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector(".error");

    error.innerText = message;
    input.classList.add("invalid");
    input.classList.remove("success");
}

// Show Success Function
function showSuccess(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector(".error");

    error.innerText = "";
    input.classList.add("success");
    input.classList.remove("invalid");
}

// Email Validation Function
function validateEmail(email) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return pattern.test(email);
}

// Radio Error
function showRadioError(message) {
    const genderGroup = document.querySelector('.radio-group').nextElementSibling;
    genderGroup.innerText = message;
}

function clearRadioError() {
    const genderGroup = document.querySelector('.radio-group').nextElementSibling;
    genderGroup.innerText = "";
}

// Checkbox Error
function showCheckboxError(message) {
    const hobbyGroup = document.querySelector('.checkbox-group').nextElementSibling;
    hobbyGroup.innerText = message;
}

function clearCheckboxError() {
    const hobbyGroup = document.querySelector('.checkbox-group').nextElementSibling;
    hobbyGroup.innerText = "";
}