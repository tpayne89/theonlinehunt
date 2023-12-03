// game.js

const questions = [
  "What is the capital of France?",
  "Who wrote Romeo and Juliet?",
  "What is the square root of 144?",
  "Which planet is known as the Red Planet?",
  "What is the largest mammal in the world?",
  "Who painted the Mona Lisa?",
  "How many continents are there?",
  "What is the capital of Japan?",
];

const answers = [
  "Paris",
  "William Shakespeare",
  "12",
  "Mars",
  "Blue Whale",
  "Leonardo da Vinci",
  "7",
  "Tokyo",
];

let currentQuestionIndex = 0;
let questionHistory = [];

document.getElementById("answer").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

document
  .getElementById("leaderboardBtn")
  .addEventListener("click", function () {
    saveState(); // Save the current state before going to the leaderboard
    showLeaderboard();
  });

function showQuestion() {
  const question = questions[currentQuestionIndex];
  const outputElement = document.getElementById("output");
  outputElement.innerHTML += `<div>$ ${question}</div>`;
}

function checkAnswer() {
  const userAnswer = document
    .getElementById("answer")
    .value.trim()
    .toLowerCase();
  const correctAnswer = answers[currentQuestionIndex].toLowerCase();

  const outputElement = document.getElementById("output");

  if (userAnswer === correctAnswer) {
    outputElement.innerHTML += `<div>Your answer: ${userAnswer} = correct</div>`;
  } else {
    outputElement.innerHTML += `<div class="incorrect-answer">Your answer: ${userAnswer} = incorrect</div>`;
    // You may display additional feedback here if needed
  }

  // Save the question and answer to history
  questionHistory.push({
    question: questions[currentQuestionIndex],
    answer: userAnswer,
    correct: userAnswer === correctAnswer,
  });

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showCongratulations();
  }

  // Scroll to the bottom
  outputElement.scrollTop = outputElement.scrollHeight;

  // Clear the answer input
  document.getElementById("answer").value = "";
}

function showCongratulations() {
  // Hide the main question output
  document.getElementById("game-container").style.display = "none";

  // Show the pop-up container
  const popupContainer = document.getElementById("congratulations-popup");
  popupContainer.style.display = "block";

  // Display the congratulations message
  const resultElement = document.getElementById("congratulations-message");
  resultElement.textContent =
    "Congratulations! You completed the treasure hunt.";

  // Save the question history to sessionStorage
  sessionStorage.setItem("questionHistory", JSON.stringify(questionHistory));
}

function showLeaderboard() {
  console.log("Button clicked");
  window.location.href = "leaderboard.html";
}

function saveState() {
  // Save the current question index and question history to sessionStorage
  sessionStorage.setItem("currentQuestionIndex", currentQuestionIndex);
  sessionStorage.setItem("questionHistory", JSON.stringify(questionHistory));
}

function resumeGame() {
  // Check if there's a saved state in sessionStorage
  const savedIndex = sessionStorage.getItem("currentQuestionIndex");
  const savedHistory = sessionStorage.getItem("questionHistory");

  if (savedIndex !== null && savedHistory !== null) {
    currentQuestionIndex = parseInt(savedIndex);
    questionHistory = JSON.parse(savedHistory);

    // Show the saved question
    showQuestion();
  } else {
    // Start from the beginning
    showQuestion();
  }
}

// Initial setup
resumeGame();
