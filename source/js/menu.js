"use strict"

let menuButton = document.querySelector(".hamburger");

document.body.classList.remove("no-js")

if (menuButton) {
  menuButton.addEventListener("click", function() {
    document.body.classList.toggle("menu-opened");
    menuButton.classList.toggle("hamburger--opened");
  });
}

let navList = document.querySelector(".navigation__list");

if (navList) {
  navList.addEventListener("click", function (evt) {
    let curTarget = evt.currentTarget;
    let target = evt.target;
    if (target.classList.contains("navigation__link")) {
      curTarget.querySelector(".navigation__link--current").classList.remove("navigation__link--current");
      target.classList.add("navigation__link--current");
    }
  });
}
