let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector('.sale-slider__container');
const gap = document.querySelector('.sale-slider__runner');
const btnPrev = document.querySelector('.sale-slider__button--previous');
const btnNext = document.querySelector('.sale-slider__button--next');
const items = document.querySelectorAll('.sale-slider__slide');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;
const dots = document.querySelectorAll('.sale-slider__dot');

const setPosition = () => {
  gap.style.transform = `translateX(${position}px)`;
};

const setDots = () => {
  dots.forEach((dot, index) => {
    dot.classList.remove('sale-slider__dot-current');
    if (position === index * -itemWidth) {
      dots[index].classList.add('sale-slider__dot-current');
    }
  });
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    position = index * -itemWidth;

    setDots();
    setPosition();
    checkBtns();
  });
});

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
  setDots();
});

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
  setDots();
});

checkBtns();
