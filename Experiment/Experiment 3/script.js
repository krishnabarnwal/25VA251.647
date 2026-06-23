// Global variable to store the number of subjects
let totalSubjectsCount = 0;

// Function to create the input boxes dynamically
function generateSubjectInputs() {
    totalSubjectsCount = parseInt(document.getElementById("numSubjects").value);

    // Input validation
    if (isNaN(totalSubjectsCount) || totalSubjectsCount <= 0) {
        alert("Please enter a valid positive number for subjects.");
        return;
    }

    const inputsDiv = document.getElementById("subjectInputs");
    inputsDiv.innerHTML = ""; // Clear out any old inputs if the user clicks "Next" again

    // Uses a loop to generate HTML input boxes for each subject
    for (let i = 1; i <= totalSubjectsCount; i++) {
        inputsDiv.innerHTML += `
            <div class="input-group">
                <label for="mark${i}">Marks for Subject ${i} (out of 100):</label>
                <input type="number" id="mark${i}" min="0" max="100" required>
            </div>
        `;
    }

    // Hide Step 1 and show Step 2
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
}

// Function to calculate final grades
function calculateResults() {
    let totalMarks = 0;

    // Uses a loop to read the marks from the dynamically generated input boxes
    for (let i = 1; i <= totalSubjectsCount; i++) {
        let marks = parseFloat(document.getElementById(`mark${i}`).value);
        
        // Validate if the entered marks are numbers and within valid range
        if (isNaN(marks) || marks < 0 || marks > 100) {
            alert(`Invalid marks entered for Subject ${i}. Please enter a number between 0 and 100.`);
            return; // Stop the calculation if there is an error
        }
        
        totalMarks += marks; // Add to total
    }

    // Calculates Average Marks
    let averageMarks = totalMarks / totalSubjectsCount;

    // Uses if-else conditions to determine Grade and Pass/Fail Result
    let grade = "";
    let resultStatus = "";
    let resultClass = "";

    if (averageMarks >= 90) {
        grade = "A+";
        resultStatus = "Pass";
    } else if (averageMarks >= 80) {
        grade = "A";
        resultStatus = "Pass";
    } else if (averageMarks >= 70) {
        grade = "B";
        resultStatus = "Pass";
    } else if (averageMarks >= 60) {
        grade = "C";
        resultStatus = "Pass";
    } else if (averageMarks >= 50) {
        grade = "D";
        resultStatus = "Pass";
    } else {
        grade = "F";
        resultStatus = "Fail";
    }

    // Set CSS class based on Pass/Fail for styling
    if (resultStatus === "Pass") {
        resultClass = "pass";
    } else {
        resultClass = "fail";
    }

    // Displays the result dynamically on the webpage
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <p><strong>Total Subjects:</strong> ${totalSubjectsCount}</p>
        <p><strong>Total Marks:</strong> ${totalMarks}</p>
        <p><strong>Average Marks:</strong> ${averageMarks.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Result:</strong> <span class="${resultClass}">${resultStatus}</span></p>
    `;
    
    // Hide the inputs and show the final result box
    document.getElementById("step2").style.display = "none";
    outputDiv.style.display = "block";
}