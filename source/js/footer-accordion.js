"use strict"

let accordionButtons = document.querySelectorAll(".accordion__dropdown-button");
let accordionSections = document.querySelectorAll(".accordion__section");

accordionButtons.forEach(function (accordionButton) {
  accordionButton.addEventListener("click", onButtonClick);
});

function onButtonClick(evt) {
  let section = evt.target.closest(".accordion__dropdown-wrapper").parentElement;

  if (section.classList.contains("accordion__section--accordion-opened")) {
    section.classList.remove("accordion__section--accordion-opened");
  } else {
    accordionSections.forEach(function (accordionSection) {
      accordionSection.classList.remove("accordion__section--accordion-opened");
    });
    section.classList.add("accordion__section--accordion-opened");
  }
}
