// Mobile menue ------------
const hamburger = document.querySelector('.hamburger');
const mobileLink = document.querySelectorAll('.mobile-link');
const mobileMenue = document.querySelector('.mobile-menu');

function mobileToggleClassActive() {
  hamburger.classList.toggle('active');
  mobileMenue.classList.toggle('active');
}

hamburger.addEventListener('click', mobileToggleClassActive);
mobileLink.forEach((element) => {
  element.addEventListener('click', mobileToggleClassActive);
});