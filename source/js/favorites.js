const favBtns = document.querySelectorAll('.button__favorite');

favBtns.forEach((favBtn) => {
  favBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    evt.target.classList.toggle('button__favorite--active');
  });
});
