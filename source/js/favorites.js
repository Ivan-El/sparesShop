"use strict"

let favBtns = document.querySelectorAll(".product-card__attribute-button--favorites");

if (favBtns.length) {
  favBtns.forEach(function (favBtn) {
    favBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      evt.target.classList.toggle("product-card__attribute-button--favorites-active");
    });
  });
}
