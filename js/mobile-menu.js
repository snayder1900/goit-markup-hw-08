const navToggle = document.querySelector('.toggle');
const navMenu = document.querySelector('.nav-mobile');
const navLogo = document.querySelector('.logo');


navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("toggle--visible");
  navLogo.classList.toggle("toggle--hidden");
})
