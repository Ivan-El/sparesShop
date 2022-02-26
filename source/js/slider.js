"use strict"

let slideIndex = 1;
let arrows = document.querySelectorAll(".slider__arrow");
let dots = document.querySelectorAll(".slider__dot");

showSlides(slideIndex);

if (arrows) {
  for (let arrow of arrows) {
    if (arrow.classList.contains(".slider__arrow--next")){
      arrow.addEventListener("click", function(){
          showSlides(slideIndex += 1);
        })
    } else {
        arrow.addEventListener("click", function(){
          showSlides(slideIndex -= 1);
        })
    }
  }
}

if(dots) {
  for (let i = 0; i < dots.length; i++) {
    let dot = dots[i];
    dot.addEventListener("click", function(){
      showSlides(slideIndex = i + 1);
    })
  }
}

function showSlides(n) {
  let slides = document.querySelectorAll(".slider__slide");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("slider__dot--current");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("slider__dot--current");
}
