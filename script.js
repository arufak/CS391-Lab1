function checkAge() {
    let ageInput = document.getElementById("input").value;
    let mainOutput = document.getElementById("main-output");
    let altOutput = document.getElementById("alt-output");

    // Clear previous outputs
    altOutput.innerHTML = "";
    altOutput.style.display = "none";
    mainOutput.style.display = "none";

    // Check if input is a number and not a decimal
    let age = parseFloat(ageInput);

    if (ageInput === "" || isNaN(age)) {
        // User did not enter a number
        altOutput.innerHTML = `<p>Please enter a valid number.</p>`;
        altOutput.style.display = "block";
    } else if (age < 0) {
        // Negative number
        altOutput.innerHTML = `<p>Negative number is not acceptable.</p>`;
        altOutput.style.display = "block";
    } else if (!Number.isInteger(age)) {
        // Decimal number
        altOutput.innerHTML = `<p>Please enter a whole number, decimals are not valid.</p>`;
        altOutput.style.display = "block";
    } else if (age >= 18 && age <= 120) {
        // Show content if age is appropriate
        mainOutput.style.display = "block";
    } else {
        // Age outside valid range
        altOutput.innerHTML = `<p>You may not see the content.</p>`;
        altOutput.style.display = "block";
    }
}
