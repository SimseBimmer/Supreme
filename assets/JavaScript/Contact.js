function validateForm() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var orderNumber = document.getElementById("orderNumber");
    var message = document.getElementById("message");
    var messageHeading = document.querySelector(".sectionTwo h4");

    var isValid = true;

    // Regular expressions for validation
    var lettersOnlyRegex = /^[a-zA-Z]+$/;
    var numbersOnlyRegex = /^[0-9]+$/;

    // Validate first name
    if (!lettersOnlyRegex.test(firstName.value)) {
        firstName.style.borderColor = "red";
        isValid = false;
    } else {
        firstName.style.borderColor = "#ccc";
    }

    // Validate last name
    if (!lettersOnlyRegex.test(lastName.value)) {
        lastName.style.borderColor = "red";
        isValid = false;
    } else {
        lastName.style.borderColor = "#ccc";
    }

    // Validate email
    if (email.value === "" || !isValidEmail(email.value)) {
        email.style.borderColor = "red";
        isValid = false;
    } else {
        email.style.borderColor = "#ccc";
    }

    // Validate order number
    if (!numbersOnlyRegex.test(orderNumber.value) || orderNumber.value.length < 8) {
        orderNumber.style.borderColor = "red";
        isValid = false;
    } else {
        orderNumber.style.borderColor = "#ccc";
    }

    // Validate message
    if (message.value === "") {
        message.style.borderColor = "red";
        isValid = false;
        messageHeading.style.color = "red"; // Change the color of the h4 element
    } else {
        message.style.borderColor = "#ccc";
        messageHeading.style.color = "#000"; // Default color
    }

    // Check overall form validity
    return isValid;
}

function isValidEmail(email) {
    // Simple email validation
    return /\S+@\S+\.\S+/.test(email);
}
