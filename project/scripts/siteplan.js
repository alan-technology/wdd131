// Dynamic footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Example: Save favorite player to localStorage
function savePlayer() {
  const player = document.getElementById("playerInput").value;
  localStorage.setItem("favoritePlayer", player);
  alert(`Saved: ${player}`);
}
