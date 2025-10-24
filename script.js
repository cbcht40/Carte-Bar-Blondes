// --- Menus déroulants ---
document.querySelectorAll('.menu-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.classList.toggle('open');
  });
});

// --- Carrousel auto ---
const carousel = document.querySelector('.carousel');
setInterval(() => {
  carousel.scrollBy({ left: 270, behavior: 'smooth' });
  if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
    carousel.scrollTo({ left: 0, behavior: 'smooth' });
  }
}, 3000);

// --- Bouton retour haut ---
const backToTop = document.createElement('button');
backToTop.id = 'backToTop';
backToTop.textContent = '↑';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) backToTop.classList.add('show');
  else backToTop.classList.remove('show');
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- Animation de fondu au chargement ---
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
