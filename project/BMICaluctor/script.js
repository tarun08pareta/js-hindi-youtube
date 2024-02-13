// Select the form element from the document
const form = document.querySelector('form')

// Add an event listener for the 'submit' event on the form
form.addEventListener('submit', function(e){
    // Prevent the default form submission behavior
    e.preventDefault()                                // value hold krne ke liye
    
    // Get the height and weight values from their respective input fields
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    
    // Select the element where the results will be displayed
    const results = (document.querySelector('#results'))
    
    // Check if height input is empty, negative, or not a number
    if(height === '' || height < 0 || isNaN(height)) {
        // Display an error message for invalid height input
        results.innerHTML = `please give a valid height ${height}`;
    }
    // Check if weight input is empty, negative, or not a number
    else if(weight === '' || weight < 0 || isNaN(weight)) {
        // Display an error message for invalid weight input
        results.innerHTML = `please give a valid weight ${weight}`;
    }
    // If both height and weight inputs are valid
    else {
        // Calculate BMI using the formula: weight / (height^2) * 10000
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        
        // Display the calculated BMI result
        results.innerHTML = `<span> ${bmi}</span>`;
    }
});
