// Define a function named randomColor using arrow function syntax
const randomColor = () => {
    // Define a string containing hexadecimal characters
    const hex = "0123456789ABCDEF";
    // Initialize a string variable to store the generated color, starting with "#" symbol
    let colors = "#";
    // Iterate 6 times to generate a 6-character hexadecimal color code
    for (let i = 0; i < 6; i++) {
        // Generate a random index to select a character from the hex string
        const randomIndex = Math.floor(Math.random() * 16);
        // Append a randomly selected character from hex string to the colors variable
        colors += hex[randomIndex];
    }
    // Return the generated color code
    return colors;
};





let intervalId;
// document.getElementById("start").addEventListener("click", function () {
//   intervalId = setInterval(function () {
//     document.body.style.backgroundColor = randomColor();
//   }, 1000);
// });
// document.getElementById("stop").addEventListener("click", function () {
//   clearInterval(intervalId);
// });


// upr wale code se overload ho rha h



  // Event listener for the start button
  document.getElementById("start").addEventListener("click", function () {
    // Check if intervalId is not already set to avoid multiple intervals
    if (!intervalId) {
        // Set intervalId to execute the function every second
        intervalId = setInterval(function () {
            // Change the background color of the body to a random color
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
});

// Event listener for the stop button
document.getElementById("stop").addEventListener("click", function () {
    // Clear the interval
    clearInterval(intervalId);
    // Reset intervalId to null to indicate that the interval is stopped
    intervalId = null;
});

