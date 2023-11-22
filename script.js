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
    typeText(`${question}\n`, outputElement); // Removed the "$" sign
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
            showCongratulations();
        }
    } else {
        resultElement.textContent = 'Incorrect. Try again.';
    }

    // Clear the answer input
    document.getElementById('answer').value = '';
}

function showCongratulations() {
    document.getElementById('input-container').style.display = 'none';
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'Congratulations! You completed the treasure hunt. Redirecting to the leaderboard...';

    // Redirect to the leaderboard page after a delay
    setTimeout(() => {
        window.location.href = 'leaderboard.html';
    }, 3000); // Redirect after 3 seconds (adjust as needed)
}

function showLeaderboard() {
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = '<h2>Leaderboard</h2>';

    const leaderboardTable = document.createElement('table');
    leaderboardTable.id = 'leaderboard-table';

    const tableHead = document.createElement('thead');
    tableHead.innerHTML = '<tr><th>Player Name</th><th>Position</th></tr>';
    leaderboardTable.appendChild(tableHead);

    const tableBody = document.createElement('tbody');
    leaderboardData.forEach((entry) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${entry.name}</td><td>${entry.position}</td>`;
        tableBody.appendChild(row);
    });
    leaderboardTable.appendChild(tableBody);

    outputElement.appendChild(leaderboardTable);

    // Create a "Home" button
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', () => {
        window.location.href = 'https://tpayne89.github.io/theonlinehunt'; // Change the URL to your main page
    });

    // Append the "Home" button to the output element
    outputElement.appendChild(homeButton);
}

// Initial setup
showQuestion();
