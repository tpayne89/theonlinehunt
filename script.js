const questions = ["Question 1?", "Question 2?", "Question 3?"];
const answers = ["Answer1", "Answer2", "Answer3"];

let currentQuestionIndex = 0;

function showQuestion() {
    document.getElementById('question').textContent = questions[currentQuestionIndex];
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = answers[currentQuestionIndex].toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById('result').textContent = 'Correct! Moving to the next question.';
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            document.getElementById('question-container').innerHTML = '<h2>Congratulations! You completed the treasure hunt.</h2>';
        }
    } else {
        document.getElementById('result').textContent = 'Incorrect. Try again.';
    }
}

// Initial setup
showQuestion();
