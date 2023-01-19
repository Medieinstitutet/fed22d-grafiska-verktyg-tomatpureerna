const checkbox = document.querySelector('#menu__input__id');
const menuNav = document.querySelector('.menu__nav');

function closeMenuTransition() {
  menuNav.style.transition = '';
}

function menuTransition() {
  if (!checkbox.checked) {
    setTimeout(closeMenuTransition, 500);
  } else {
    menuNav.style.transition = 'all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)';
  }
}

checkbox.addEventListener('click', menuTransition);
