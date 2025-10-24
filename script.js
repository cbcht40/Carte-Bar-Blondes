// Met à jour l'année dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Gestion des menus déroulants
const toggles = document.querySelectorAll('.menu-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;
    content.classList.toggle('open');
  });
});
