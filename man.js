document.getElementById("calcBtn").addEventListener("click", function() {
    const c1 = parseFloat(document.getElementById("course1").value);
    const c2 = parseFloat(document.getElementById("course2").value);
    const c3 = parseFloat(document.getElementById("course3").value);
    const resultElement = document.getElementById("result");

    if (isNaN(c1) || isNaN(c2) || isNaN(c3) || c1 > 100 || c2 > 100 || c3 > 100) {
        resultElement.textContent = "Enter valid marks (0-100)!";
        resultElement.style.color = "orange";
        return;
    }

    const gpa = (c1 + c2 + c3) / 3 / 20;
    let classification = "";

    if (gpa >= 4.4) classification = "First Class";
    else if (gpa >= 3.6) classification = "Upper Second";
    else if (gpa >= 2.8) classification = "Lower Second";
    else classification = "Pass";

    resultElement.textContent = `Your GPA is ${gpa.toFixed(2)} (${classification})`;
    resultElement.style.color = gpa >= 2.8 ? "#28a745" : "#dc3545";
});

document.getElementById('year').textContent = new Date().getFullYear();