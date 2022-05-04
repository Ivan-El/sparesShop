const accordionButtons = document.querySelectorAll('.accordion__dropdown-button');
const accordionSections = document.querySelectorAll('.accordion__section');

function onButtonClick(evt) {
  const section = evt.target.closest('.accordion__dropdown-wrapper').parentElement;

  if (section.classList.contains('accordion__section--accordion-opened')) {
    section.classList.remove('accordion__section--accordion-opened');
  } else {
    accordionSections.forEach((accordionSection) => {
      accordionSection.classList.remove('accordion__section--accordion-opened');
    });
    section.classList.add('accordion__section--accordion-opened');
  }
}

accordionButtons.forEach((accordionButton) => {
  accordionButton.addEventListener('click', onButtonClick);
});
