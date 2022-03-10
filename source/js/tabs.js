"use strict"

let tabsBody = document.querySelector(".tabs");
let tabLinks = document.querySelectorAll(".tabs__link");
let tabPanels = document.querySelectorAll(".tabs__panel");
let selectedTab = tabLinks[0];
let selectedPanel = tabPanels[0];


tabsBody.addEventListener("click", function (evt) {
  let target = evt.target;
  let targetHref = target.getAttribute("href");
  evt.preventDefault();

  if (!target.classList.contains("tabs__link")) return;

  activateTab(target);
  activatePanel(targetHref)
});


function activateTab (tab) {
  if (selectedTab) {
    selectedTab.classList.remove("tabs__link--current");
  }

  selectedTab = tab;
  selectedTab.classList.add("tabs__link--current");
};


function activatePanel (tabHref) {
  if (selectedPanel) {
    selectedPanel.classList.remove("tabs__panel--current");
  }

  tabPanels.forEach((panel, i) => {
    if (tabPanels[i].id === tabHref.slice(1)) {
      selectedPanel = tabPanels[i];
      selectedPanel.classList.add("tabs__panel--current");
    }
  });
}
