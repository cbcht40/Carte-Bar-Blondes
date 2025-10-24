// Année automatique
document.getElementById('year').textContent = new Date().getFullYear();

// Accordéon menus
const toggles = document.querySelectorAll('.menu-toggle');
toggles.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    btn.nextElementSibling.classList.toggle('open');
  });
});

// Carrousel auto
const carousel = document.querySelector('.carousel');
let scrollPos = 0;
function autoScroll() {
  if (!carousel) return;
  scrollPos += 1;
  if (scrollPos >= carousel.scrollWidth - carousel.clientWidth) scrollPos = 0;
  carousel.scrollTo({ left: scrollPos, behavior: 'smooth' });
}
setInterval(autoScroll, 60);
// --- Bouton retour en haut ---
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
