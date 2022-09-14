const btnHamburger = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btnHamburger.addEventListener('click', () => {
  btnHamburger.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
});
