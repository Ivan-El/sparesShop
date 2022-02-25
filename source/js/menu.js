"use strict"

let menuButton = document.querySelector(".hamburger");

document.body.classList.remove("no-js")

if (menuButton) {
  menuButton.addEventListener('click', function() {
    document.body.classList.toggle("menu-opened");
    menuButton.classList.toggle("hamburger--opened");
  });
}
