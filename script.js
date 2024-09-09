function convertToFeet() {
    const cm = document.getElementById("cm").value;
    const feet = (cm !== "" && !isNaN(parseFloat(cm))) ? (cm / 30.48).toFixed(2) : "Invalid input";
    document.getElementById("feet").value = feet;
}

function clearFields() {
    document.getElementById("cm").value = "";
    document.getElementById("feet").value = "";
}