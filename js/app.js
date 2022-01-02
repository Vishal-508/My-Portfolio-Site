const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const barClose1 = document.getElementById("close-sidebar1");
const barClose2 = document.getElementById("close-sidebar2");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
barClose1.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
barClose2.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// closeBtn.addEventListener("click", function () {
//   sidebar.classList.remove("show-sidebar");
// });

// set year
date.innerHTML = new Date().getFullYear();
