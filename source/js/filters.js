"use strict"

let filterToggle = document.querySelector(".filter-top__sorting-button--filter");
let backFilters = document.querySelector(".filter-modal__close");
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



let minPrice = document.getElementById("min-price-mask");
let maxPrice = document.getElementById("max-price-mask");
let previousMinPriceValue;
let previousMaxPriceValue;

function parsePrice(inputValue) {
  return parseInt(inputValue.replace(/ /g, ""), 10);
}

minPrice.addEventListener("focus", function (evt) {
  previousMinPriceValue = evt.target.value;
});

minPrice.addEventListener("blur", function (evt) {
  let newMinPrice = parsePrice(evt.target.value);
  if (newMinPrice < parsePrice(maxPrice.value)) {
    let newX = newMinPrice / (maxPriceValue - minPriceValue) * scale.clientWidth;
    updateMin(newX);
  } else {
    evt.target.value = previousMinPriceValue;
  }
});



maxPrice.addEventListener("focus", function (evt) {
  previousMaxPriceValue = evt.target.value;
});
maxPrice.addEventListener("blur", function (evt) {
  let newMaxPrice = parsePrice(evt.target.value);
  if (newMaxPrice > parsePrice(minPrice.value)) {
    let newX = newMaxPrice / (maxPriceValue - minPriceValue) * scale.clientWidth;
    updateMax(newX);
  } else {
    evt.target.value = previousMaxPriceValue;
  }
});


let sliderContainer = document.querySelector(".price-range__fieldset");
let sliderMin = document.querySelector(".price-range__range-toggle--min");
let sliderMax = document.querySelector(".price-range__range-toggle--max");
let scale = document.querySelector(".price-range__scale");
let sliderBar = document.querySelector(".price-range__bar");
let minPriceValue = 0;
let maxPriceValue = 30000;
let minMoving = false;
let maxMoving = false;


sliderMin.addEventListener("mousedown", function () {
  minMoving = true;
});

sliderMax.addEventListener("mousedown", function () {
  maxMoving = true;
});


document.addEventListener("mousemove", function (evt) {
  if (minMoving || maxMoving) {
    let newX = evt.clientX - sliderContainer.offsetLeft;
    let newPrice = Math.floor((maxPriceValue - minPriceValue) * newX / scale.clientWidth);
    if (minMoving && newX >= 0 && newX < sliderMax.offsetLeft) {
      updateMin(newX);
      minPrice.value = newPrice;
    }
    if (maxMoving && newX >= sliderMin.offsetLeft && newX <= scale.clientWidth) {
      updateMax(newX);
      maxPrice.value = newPrice;
    }
  }
});

function updateMin(newX) {
  sliderMin.style.left = newX + "px";
  sliderBar.style.marginLeft = sliderMin.style.left;
  sliderBar.style.width = (sliderMax.offsetLeft - newX) + "px";
}

function updateMax(newX) {
  sliderMax.style.left = newX + "px";
  sliderBar.style.width = (newX - sliderMin.offsetLeft) + "px";
}

document.addEventListener("mouseup", function (evt) {
  minMoving = false;
  maxMoving = false;
  if (!evt.target.closest(".custom-select")) {
    closeAllSelects();
  }
});



let accordeonCloseButtons = document.querySelectorAll(".filter-selection__accordion-close");

accordeonCloseButtons.forEach(function (closeButton) {
  closeButton.addEventListener("click", function (evt) {
    let siblings = evt.target.parentNode.childNodes;
    siblings.forEach(function (sibling) {
      if (sibling.classList && sibling.classList.contains("filter-selection__accordion-wrapper")) {
        if (sibling.classList.contains("filter-selection__accordion-wrapper--hidden")) {
          sibling.classList.remove("filter-selection__accordion-wrapper--hidden");
          closeButton.classList.remove("filter-selection__accordion-closed");
        } else {
          sibling.classList.add("filter-selection__accordion-wrapper--hidden");
          closeButton.classList.add("filter-selection__accordion-closed");
        }
      }
    });
  });
});

let resetAll = document.querySelector(".filter-selection__button--reset");
let checkBoxes = document.querySelectorAll(".checkboxes__wrapper>input[type=checkbox]");
let radioButtons = document.querySelectorAll(".radio-buttons__label-wrapper>input[type=radio]")

resetAll.addEventListener("click", function () {
  checkBoxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
  radioButtons.forEach(function (radiobutton) {
    radiobutton.checked = false;
  });
  minPrice.value = 2000;
  maxPrice.value = 12000;
  updateMin(18);
  updateMax(108);
});
