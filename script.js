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

const vinyl = document.getElementById('vinylRecord');
let currentRotation = 0;
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

function animateVinyl() {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  
  if (st < lastScrollTop) {
    currentRotation -= 2.5;
  } else {
    currentRotation += 1.5;
  }

  vinyl.style.transform = `rotate(${currentRotation}deg)`;
  lastScrollTop = st <= 0 ? 0 : st;

  requestAnimationFrame(animateVinyl);
}

animateVinyl();