function computeQuizzes() {
    // 1. Assign the variables q1, q2, q3 to store the values entered by the user for quizzes
    const q1 = parseInt(document.getElementById("txtQuiz1").value) || 0;
    const q2 = parseInt(document.getElementById("txtQuiz2").value) || 0;
    const q3 = parseInt(document.getElementById("txtQuiz3").value) || 0;

    // Get the maximum range values for the quizzes
    const rangeQ1 = parseInt(document.getElementById("qRange1").value) || 1;
    const rangeQ2 = parseInt(document.getElementById("qRange2").value) || 1;
    const rangeQ3 = parseInt(document.getElementById("qRange3").value) || 1;

    // 4. Calculate the totalQuizzes grade (average percentage of three quizzes)
    const totalQuizzes = (((q1 / rangeQ1) * 100) + ((q2 / rangeQ2) * 100) + ((q3 / rangeQ3) * 100)) / 3;

    // Display the total quizzes in the input field
    document.getElementById("totalQuizzes").value = totalQuizzes.toFixed(2);
}

function computationPTask() {
    // 6. Assign the variables pt1, pt2, pt3 to store the values entered by the user for performance tasks
    const pt1 = parseInt(document.getElementById("txtPt1").value) || 0;
    const pt2 = parseInt(document.getElementById("txtPt2").value) || 0;
    const pt3 = parseInt(document.getElementById("txtPt3").value) || 0;

    // Get the maximum range values for the performance tasks
    const rangePt1 = parseInt(document.getElementById("ptRange1").value) || 1;
    const rangePt2 = parseInt(document.getElementById("ptRange2").value) || 1;
    const rangePt3 = parseInt(document.getElementById("ptRange3").value) || 1;

    // 9. Calculate the total performance task grade (average percentage)
    const totalPTask = (((pt1 / rangePt1) * 100) + ((pt2 / rangePt2) * 100) + ((pt3 / rangePt3) * 100)) / 3;

    // Display the total performance task in the input field
    document.getElementById("totalPTask").value = totalPTask.toFixed(2);
}

function computeExam() {
    // 11. Assign the variable named exam to store the value of the text with the id txtPExam
    const exam = parseInt(document.getElementById("txtPExam").value) || 0;

    // 12. Assign the variable named item to store the value of the input type number with the id pRExam
    const item = parseInt(document.getElementById("pRExam").value) || 1;

    // Calculate the exam score equivalent
    const examTotal = (exam / item) * 100;

    // Display the exam score equivalent in the input field
    document.getElementById("eEqv").value = examTotal.toFixed(2);
}

function computeGrade() {
    // Get total quizzes, performance tasks, and exam percentage (assuming the checkboxes are checked)
    const chkQuiz = document.getElementById("chkQuiz").checked;
    const chkPTask = document.getElementById("chkPTask").checked;

    const totalQuizzes = parseFloat(document.getElementById("totalQuizzes").value) || 0;
    const totalPTask = parseFloat(document.getElementById("totalPTask").value) || 0;
    const examPercentage = parseFloat(document.getElementById("eEqv").value) || 0;

    // Calculate final grade based on weight of 20% quizzes, 60% performance tasks, and 20% exam
    const finalQuiz = chkQuiz ? totalQuizzes * 0.20 : 0;
    const finalPTask = chkPTask ? totalPTask * 0.60 : 0;
    const finalExam = examPercentage * 0.20;

    const grade = finalQuiz + finalPTask + finalExam;

    // Display the final grade in the input field
    document.getElementById("txtGrade").value = grade.toFixed(2);
}







