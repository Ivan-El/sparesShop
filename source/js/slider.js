let slideIndex = 0;
const sliderArrows = document.querySelectorAll('.slider__arrow');
const dotsArrows = document.querySelectorAll('.slider__dot');

function showSlides(n) {
  const slides = document.querySelectorAll('.slider__slide');

  if (n > slides.length - 1) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
    dotsArrows[i].classList.remove('slider__dot--current');
  }

  slides[slideIndex].style.display = 'block';
  dotsArrows[slideIndex].classList.add('slider__dot--current');
}

showSlides(slideIndex);

if (sliderArrows) {
  sliderArrows.forEach((arrow) => {
    arrow.classList.contains('slider__arrow--previous')
      ? arrow.addEventListener('click', (evt) => {
        evt.preventDefault();
        showSlides(slideIndex -= 1);
      })
      : arrow.addEventListener('click', (evt) => {
        evt.preventDefault();
        showSlides(slideIndex += 1);
      });
  });
}

if (dotsArrows) {
  for (let i = 0; i < dotsArrows.length; i += 1) {
    const dot = dotsArrows[i];
    dot.addEventListener('click', () => {
      showSlides(slideIndex = i);
    });
  }
}
