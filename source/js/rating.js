const rating = document.querySelector('.rating');

rating.addEventListener('click', (evt) => {
  const { target } = evt;
  if (target.classList.contains('rating__rating-star')) {
    const active = rating.querySelector('.rating__rating-star--active');
    active.classList.remove('rating__rating-star--active');
    target.classList.add('rating__rating-star--active');
  }
});
