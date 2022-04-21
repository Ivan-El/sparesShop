"use strict";

let rating = document.querySelector(".rating");

rating.addEventListener("click", function (evt) {
  let target = evt.target;
  if (target.classList.contains("rating__rating-star")) {
    let active = rating.querySelector(".rating__rating-star--active");
    active.classList.remove("rating__rating-star--active");
    target.classList.add("rating__rating-star--active");
  }
});
