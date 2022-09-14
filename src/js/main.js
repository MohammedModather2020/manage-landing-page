const btnHamburger = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// add click as button hamburger to toggle showing menu as mobile screen size
btnHamburger.addEventListener('click', () => {
  btnHamburger.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
});

// trigger aos animate
AOS.init();
