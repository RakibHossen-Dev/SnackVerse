const mainMenu = document.getElementById("nav_menu");
const bersIcon = document.getElementById("ham-bers");

bersIcon.addEventListener("click", function () {
  mainMenu.classList.toggle("hidden");
});
