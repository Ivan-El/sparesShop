const filterToggle = document.querySelector('.filter-top__sorting-button--filter');
const backFilters = document.querySelector('.filter-modal__close');
const { body } = document;

filterToggle.addEventListener('click', () => {
  if (body.classList.contains('filter-opened')) {
    body.classList.remove('filter-opened');
  } else {
    body.classList.add('filter-opened');
  }
});

backFilters.addEventListener('click', () => {
  if (body.classList.contains('filter-opened')) {
    body.classList.remove('filter-opened');
  }
});

const minPrice = document.getElementById('min-price-mask');
const maxPrice = document.getElementById('max-price-mask');
let previousMinPriceValue;
let previousMaxPriceValue;

function parsePrice(inputValue) {
  return parseInt(inputValue.replace(/ /g, ''), 10);
}

minPrice.addEventListener('focus', (evt) => {
  previousMinPriceValue = evt.target.value;
});

minPrice.addEventListener('blur', (evt) => {
  const newMinPrice = parsePrice(evt.target.value);
  if (newMinPrice < parsePrice(maxPrice.value)) {
    const newX = (newMinPrice / (maxPriceValue - minPriceValue)) * scale.clientWidth;
    updateMin(newX);
  } else {
    evt.target.value = previousMinPriceValue;
  }
});

maxPrice.addEventListener('focus', (evt) => {
  previousMaxPriceValue = evt.target.value;
});
maxPrice.addEventListener('blur', (evt) => {
  const newMaxPrice = parsePrice(evt.target.value);
  if (newMaxPrice > parsePrice(minPrice.value)) {
    const newX = (newMaxPrice / (maxPriceValue - minPriceValue)) * scale.clientWidth;
    updateMax(newX);
  } else {
    evt.target.value = previousMaxPriceValue;
  }
});

const sliderContainer = document.querySelector('.price-range__fieldset');
const sliderMin = document.querySelector('.price-range__range-toggle--min');
const sliderMax = document.querySelector('.price-range__range-toggle--max');
let scale = document.querySelector('.price-range__scale');
const sliderBar = document.querySelector('.price-range__bar');
let minPriceValue = 0;
let maxPriceValue = 30000;
let minMoving = false;
let maxMoving = false;

sliderMin.addEventListener('mousedown', () => {
  minMoving = true;
});

sliderMax.addEventListener('mousedown', () => {
  maxMoving = true;
});

document.addEventListener('mousemove', (evt) => {
  if (minMoving || maxMoving) {
    const newX = evt.clientX - sliderContainer.offsetLeft;
    const newPrice = (Math.floor((maxPriceValue - minPriceValue) * newX) / scale.clientWidth);
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
  sliderMin.style.left = `${newX}px`;
  sliderBar.style.marginLeft = sliderMin.style.left;
  sliderBar.style.width = `${sliderMax.offsetLeft - newX}px`;
}

function updateMax(newX) {
  sliderMax.style.left = `${newX}px`;
  sliderBar.style.width = `${newX - sliderMin.offsetLeft}px`;
}

document.addEventListener('mouseup', () => {
  minMoving = false;
  maxMoving = false;
});

const accordeonCloseButtons = document.querySelectorAll('.filter-selection__accordion-close');

accordeonCloseButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', (evt) => {
    const siblings = evt.target.parentNode.childNodes;
    siblings.forEach((sibling) => {
      if (sibling.classList && sibling.classList.contains('filter-selection__accordion-wrapper')) {
        if (sibling.classList.contains('filter-selection__accordion-wrapper--hidden')) {
          sibling.classList.remove('filter-selection__accordion-wrapper--hidden');
          closeButton.classList.remove('filter-selection__accordion-closed');
        } else {
          sibling.classList.add('filter-selection__accordion-wrapper--hidden');
          closeButton.classList.add('filter-selection__accordion-closed');
        }
      }
    });
  });
});

const resetAll = document.querySelector('.filter-selection__button--reset');
const checkBoxes = document.querySelectorAll('.checkboxes__wrapper>input[type=checkbox]');
const radioButtons = document.querySelectorAll('.radio-buttons__label-wrapper>input[type=radio]');

resetAll.addEventListener('click', () => {
  checkBoxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  radioButtons.forEach((radiobutton) => {
    radiobutton.checked = false;
  });
  minPrice.value = 2000;
  maxPrice.value = 12000;
  updateMin(18);
  updateMax(108);
});
