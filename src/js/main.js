const btnHamburger = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const btnScroll = document.getElementById('scroll-top');

// add click as button hamburger to toggle showing menu as mobile screen size
btnHamburger.addEventListener('click', () => {
  btnHamburger.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
});

// trigger aos animate
AOS.init();

// change background navbar desktop after page scroll top 20px
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScroll.style.display = 'block';
  } else {
    btnScroll.style.display = 'none';
  }
};

// scroll to top
btnScroll.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
