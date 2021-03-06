const menuButton = document.querySelector('.hamburger');

document.body.classList.remove('no-js');

if (menuButton) {
  menuButton.addEventListener('click', () => {
    document.body.classList.toggle('menu-opened');
    menuButton.classList.toggle('hamburger--opened');
  });
}

const navList = document.querySelector('.navigation__list');

if (navList) {
  navList.addEventListener('click', (evt) => {
    const curTarget = evt.currentTarget;
    const { target } = evt;
    if (target.classList.contains('navigation__link')) {
      curTarget.querySelector('.navigation__link--current').classList.remove('navigation__link--current');
      target.classList.add('navigation__link--current');
    }
  });
}
