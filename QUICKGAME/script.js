// quiz data
const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin"],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Venus"],
        correct: "Mars"
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElements = document.querySelectorAll(".choice");
const scoreElement = document.getElementById("score");
const backButton = document.getElementById("backButton");
const previousButton = document.getElementById("previousButton");

function loadQuestion() {
    backButton.style.display = currentQuestionIndex > 0 ? "block" : "none"; // Show the "Back" button if not on the first question.

    previousButton.style.display = currentQuestionIndex > 0 ? "block" : "none";

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    choicesElements.forEach((choice, index) => {
        choice.textContent = currentQuestion.choices[index];
    });
}


function checkAnswer(selectedChoice) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedChoice.textContent === currentQuestion.correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        // Display final score
        questionElement.textContent = "Quiz completed!";
        choicesElements.forEach((choice) => {
            choice.style.display = "none";
        });
    }

    scoreElement.textContent = score;
}
function goBack() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}
loadQuestion();
