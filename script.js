/* === STYLE CAFÉ BLONDES === */

/* Police et couleurs principales */
:root {
  --jaune: #f8c200;
  --noir: #1b1b1b;
  --bois: #f7f3e8;
  --texte: #222;
  --max-width: 800px;
  font-family: "Segoe UI", Roboto, sans-serif;
}

/* Mise en page générale */
body {
  margin: 0;
  background: var(--bois) url('https://www.transparenttextures.com/patterns/wood-pattern.png');
  background-size: auto;
  color: var(--texte);
}

/* Header */
.site-header {
  background: var(--noir);
  color: var(--jaune);
  text-align: center;
  padding: 30px 10px;
  border-bottom: 5px solid var(--jaune);
}

.site-header h1 {
  margin: 0;
  font-size: 2.5rem;
  letter-spacing: 1px;
}

.subtitle {
  margin-top: 5px;
  font-size: 1rem;
  color: #f9e87b;
}

/* Conteneur principal */
.menu-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 20px;
}

/* Titres des sections */
.menu-section h2 {
  background: var(--jaune);
  color: var(--noir);
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 40px;
}

/* Liste des items */
.menu-section ul {
  list-style: none;
  padding: 0;
  margin: 15px 0 30px 0;
}

.menu-section li {
  background: #fff9e6;
  margin: 8px 0;
  padding: 12px 16px;
  border-left: 5px solid var(--jaune);
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.08);
  font-size: 1.05rem;
  transition: transform 0.15s ease, background 0.3s;
}

.menu-section li:hover {
  transform: translateX(5px);
  background: #fff2b5;
}

/* Pied de page */
.site-footer {
  text-align: center;
  background: var(--noir);
  color: var(--jaune);
  padding: 25px 10px;
  margin-top: 40px;
  border-top: 5px solid var(--jaune);
}

.site-footer p {
  margin: 0;
  font-size: 0.9rem;
}

/* Responsive (mobile) */
@media (max-width: 600px) {
  .site-header h1 {
    font-size: 2rem;
  }
  .menu-section li {
    font-size: 1rem;
  }
}

/* Effet d’apparition douce (optionnel, activé avec JS) */
.fade-in {
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
