const questions = ["What is the capital of France?", "Who wrote Romeo and Juliet?", "What is the square root of 144?"];
const answers = ["Paris", "William Shakespeare", "12"];

let currentQuestionIndex = 0;

function typeText(text, element, speed = 50) {
    let index = 0;
    const interval = setInterval(() => {
        element.textContent += text[index];
        index++;
        if (index === text.length) {
            clearInterval(interval);
            document.getElementById('answer').focus();
        }
    }, speed);
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    const outputElement = document.getElementById('output');
    outputElement.textContent = '';
    typeText(`${question}\n`, outputElement); // Remove the '$' character
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = answers[currentQuestionIndex].toLowerCase();

    const resultElement = document.getElementById('result');
    resultElement.textContent = '';

    if (userAnswer === correctAnswer) {
        resultElement.textContent = 'Correct! Moving to the next question.';
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            document.getElementById('input-container').style.display = 'none';
            resultElement.textContent = 'Congratulations! You completed the treasure hunt.';
        }
    } else {
        resultElement.textContent = 'Incorrect. Try again.';
    }

    // Clear the answer input
    document.getElementById('answer').value = '';
}

// Initial setup
showQuestion();
