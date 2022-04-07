"use strict"

let slideIndex = 0;
let sliderArrows = document.querySelectorAll(".slider__arrow");
let dotsArrows = document.querySelectorAll(".slider__dot");

showSlides(slideIndex);

if (sliderArrows) {
  for (let arrow of sliderArrows) {
    arrow.classList.contains("slider__arrow--previous") ?
    arrow.addEventListener("click", (evt) => {
      evt.preventDefault();
      showSlides(slideIndex -= 1)}) :
    arrow.addEventListener("click", (evt) => {
      evt.preventDefault();
      showSlides(slideIndex += 1)});
  }
}

if(dotsArrows) {
  for (let i = 0; i < dotsArrows.length; i++) {
    let dot = dotsArrows[i];
    dot.addEventListener("click", function(){
      showSlides(slideIndex = i);
    })
  }
}

function showSlides(n) {
  let slides = document.querySelectorAll(".slider__slide");

  if (n > slides.length-1) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length-1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dotsArrows[i].classList.remove("slider__dot--current");
  }

  slides[slideIndex].style.display = "block";
  dotsArrows[slideIndex].classList.add("slider__dot--current");
}
