// Dummy data for demonstration purposes
const leaderboardData = [
    { name: 'Player 1', position: 1 },
    { name: 'Player 2', position: 2 },
    // Add more entries as needed
];

function showLeaderboard() {
    const tableBody = document.querySelector('#leaderboard-table tbody');

    leaderboardData.forEach((entry) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${entry.name}</td><td>${entry.position}</td>`;
        tableBody.appendChild(row);
    });
}

function returnToGame() {
    // Assuming your game page is named index.html
    window.location.href = 'index.html';
}

// Initial setup
showLeaderboard();
