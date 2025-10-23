// === SCRIPT CAFÉ BLONDES ===

// Met à jour automatiquement l'année dans le footer
document.getElementById("year").textContent = new Date().getFullYear();

// Effet d’apparition douce au scroll
const elements = document.querySelectorAll('.menu-section, .menu-section li');

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);
