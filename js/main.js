document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  const navUl = nav.querySelector('ul');

  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
  });
});
