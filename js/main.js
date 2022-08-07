const navToggleButton = document.querySelector(".nav-toggle-btn");
const navMenu = document.querySelector(".nav-menu");

navToggleButton.addEventListener("click", () => {
  navToggleButton.toggleAttribute("data-nav-open");
  navMenu.toggleAttribute("data-nav-open");
});
