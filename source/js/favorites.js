"use strict"

let favBtns = document.querySelectorAll(".button__favorite");

favBtns.forEach(function (favBtn) {
  favBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    evt.target.classList.toggle("button__favorite--active");
  });
});
