// Hamburger toggle
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Footer dynamic year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Last modified
document.getElementById("lastModified").textContent = 
  "Last Modified: " + document.lastModified;
