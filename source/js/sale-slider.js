"use strict"

let position = 0;
let slidesToShow = 1;
let slidesToScroll = 1;
let container = document.querySelector(".sale-slider__container");
let gap = document.querySelector(".sale-slider__runner");
let btnPrev = document.querySelector(".sale-slider__button--previous");
let btnNext = document.querySelector(".sale-slider__button--next");
let items = document.querySelectorAll(".sale-slider__slide");
let itemsCount = items.length;
let itemWidth = container.clientWidth / slidesToShow;
let movePosition = slidesToScroll * itemWidth;
let dots = document.querySelectorAll(".sale-slider__dot");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    position = index * -itemWidth;

    setDots();
    setPosition();
    checkBtns();
  });
});

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener("click", () => {
  let itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
  setDots();
});

btnPrev.addEventListener("click", () => {
  let itemsLeft = Math.abs(position) / itemWidth;

  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
  setDots();
});

let setPosition = () => {
  gap.style.transform = `translateX(${position}px)`;
}

let setDots = () => {
  dots.forEach((dot, index) => {
    dot.classList.remove("sale-slider__dot-current");
    if(position === index * -itemWidth) {
      dots[index].classList.add("sale-slider__dot-current");
    };
  });
};

let checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

checkBtns();
