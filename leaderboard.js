// Dummy data for demonstration purposes
const leaderboardData = [
    { name: 'Player 1', position: 1 },
    { name: 'Player 2', position: 2 },
    // Add more entries as needed
];

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
}

// Initial setup
showLeaderboard();
