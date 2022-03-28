"use strict"

let filterToggle = document.querySelector(".tire-selection__arrange-button--filter");
let backFilters = document.querySelector(".tire-selection__filter-close");
let body = document.body;

filterToggle.addEventListener("click", function () {
  if (body.classList.contains("filter-opened")) {
    body.classList.remove("filter-opened");
  } else {
    body.classList.add("filter-opened");
  }
});

backFilters.addEventListener("click", function () {
  if (body.classList.contains("filter-opened")) {
    body.classList.remove("filter-opened");
  }
});
