// leaderboard.js

// You can manually update the leaderboardData array with your data
const leaderboardData = [
  { name: "", position: 1 },
  { name: "", position: 2 },
  { name: "", position: 3 },
  { name: "", position: 4 },
  { name: "", position: 5 },
  { name: "", position: 6 },
  { name: "", position: 7 },
  { name: "", position: 8 },
  { name: "", position: 9 },
  { name: "", position: 10 },

  // Add more entries as needed
];

function populateLeaderboard() {
  const tableBody = document.querySelector("#leaderboard-table tbody");

  leaderboardData.forEach((entry) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${entry.name}</td><td>${entry.position}</td>`;
    tableBody.appendChild(row);
  });
}

// Populate the leaderboard when the page loads
populateLeaderboard();
