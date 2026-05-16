document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.querySelector('.header__menu-btn');
const nav = document.querySelector('.header__nav');

menuBtn.addEventListener('click', () => {
  const open = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuBtn.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  });
});
