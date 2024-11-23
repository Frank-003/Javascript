// Find the button and the message placeholder elements
const button = document.getElementById("welcomeButton"); // Get the button by its ID
const message = document.getElementById("welcomeMessage"); // Get the placeholder for the message by its ID

// Add a click event listener to the button
button.addEventListener("click", function() {
    // Update the content of the message placeholder
    message.textContent = "Frankie Chan"; // Set the text to "Welcome!"
});