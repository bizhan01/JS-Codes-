const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Who wrote Romeo and Juliet?", answer: "William Shakespeare" }
];
let currentQuestionIndex = 0;

document.getElementById("submitAnswerBtn").addEventListener("click", function() {
    const userAnswer = document.getElementById("answerInput").value;
    if (userAnswer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
        alert("Correct answer!");
    } else {
        alert("Incorrect answer. Try again!");
    }
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
});


// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
