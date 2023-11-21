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
            document.getElementById('answer').focus(); // Focus on the input after typing
        }
    }, speed);
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    const outputElement = document.getElementById('output');
    outputElement.textContent = ''; // Clear previous content
    typeText(`$ ${question}\n`, outputElement);
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = answers[currentQuestionIndex].toLowerCase();

    const resultElement = document.getElementById('result');
    resultElement.textContent = ''; // Clear previous result

    if (userAnswer === correctAnswer) {
        resultElement.textContent = 'Correct! Moving to the next question.';
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            document.getElementById('input-container').style.display = 'none'; // Hide input container
            resultElement.textContent = 'Congratulations! You completed the treasure hunt.';
        }
    } else {
        resultElement.textContent = 'Incorrect. Try again.';
    }
}

// Initial setup
showQuestion();
