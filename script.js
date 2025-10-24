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
