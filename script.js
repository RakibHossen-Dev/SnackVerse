const mainMenu = document.getElementById("nav_menu");
const bersIcon = document.getElementById("ham-bers");

bersIcon.addEventListener("click", function () {
  mainMenu.classList.toggle("hidden");
});

const tabs = document.querySelectorAll(".tabs_wraps ul li");
const all = document.querySelectorAll(".item_wrap");
const food = document.querySelectorAll(".food");
const bvarage = document.querySelectorAll(".bvarage");
const pizza = document.querySelectorAll(".pizza");
const snack = document.querySelectorAll(".snack");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    const tabval = tab.getAttribute("data-tabs");

    all.forEach((item) => {
      item.style.display = "none";
    });

    if (tabval == "food") {
      food.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "bvarage") {
      bvarage.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "snack") {
      snack.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "pizza") {
      pizza.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "all") {
      all.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});
