const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const sideMenu = document.getElementById('sideMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuLinks = document.querySelectorAll('.menu-item a');

function openSideMenu() {
  sideMenu.classList.add('active');
  menuOverlay.classList.add('active');
}

function closeSideMenu() {
  sideMenu.classList.remove('active');
  menuOverlay.classList.remove('active');
}

menuToggle.addEventListener('click', openSideMenu);
closeMenu.addEventListener('click', closeSideMenu);
menuOverlay.addEventListener('click', closeSideMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeSideMenu();
  });
});