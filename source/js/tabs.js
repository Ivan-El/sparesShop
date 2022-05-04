const tabLinks = document.querySelectorAll('.tabs__link');
const tabPanels = document.querySelectorAll('.tabs__panel');

tabLinks.forEach((el) => {
  el.addEventListener('click', (evt) => {
    const { target } = evt;
    const targetHref = target.getAttribute('href');

    evt.preventDefault();

    if (!target.classList.contains('tabs__link')) return;

    target.closest('.tabs').querySelector('.tabs__link--current').classList.remove('tabs__link--current');
    target.classList.add('tabs__link--current');

    target.closest('.tabs').querySelector('.tabs__panel--current').classList.remove('tabs__panel--current');

    tabPanels.forEach((panel, i) => {
      if (tabPanels[i].id === targetHref.slice(1)) {
        tabPanels[i].classList.add('tabs__panel--current');
      }
    });
  });
});
