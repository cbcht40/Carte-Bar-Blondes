const quizContainer = document.getElementById('quiz');

const questions = [
  { question: "Tu préfères une bière blonde, brune, blanche ou IPA ?", answers: ["Blonde", "Brune", "Blanche", "IPA"] },
  { question: "Plutôt légère et désaltérante ou puissante et complexe ?", answers: ["Légère", "Puissante"] },
  { question: "Tu veux une bière avec une touche fruitée ?", answers: ["Oui", "Non"] },
  { question: "Tu veux une bière amère ?", answers: ["Oui", "Non"] }
];

let currentQuestion = 0;
let answers = [];

function showQuestion() {
  const q = questions[currentQuestion];
  quizContainer.innerHTML = `
    <h2>${q.question}</h2>
    ${q.answers.map(a => `<button onclick="answer('${a}')">${a}</button>`).join('')}
    <p>${currentQuestion + 1} / ${questions.length}</p>
  `;
}

function answer(a) {
  answers.push(a);
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const [color, body, fruity, bitter] = answers;
  let beer = "Fouillotte Blonde";

  if (color === "Brune") beer = "Prior Bernardus";
  else if (color === "IPA") beer = bitter === "Oui" ? "Delta IPA" : "Milkshake IPA";
  else if (color === "Blanche") beer = fruity === "Oui" ? "Weihenstephaner Vitus" : "Blanche Bernardus";
  else if (color === "Blonde") {
    if (body === "Légère") beer = fruity === "Oui" ? "Timut" : "Fouillotte Blonde";
    else beer = "Ypra Lefort";
  }

  quizContainer.innerHTML = `
    <h2>🍺 Ta bière idéale : <span style="color:#f5c542">${beer}</span></h2>
    <button onclick="location.reload()">🔄 Rejouer</button>
    <button onclick="window.location.href='index.html#menu'">📜 Voir la carte</button>
  `;
}

showQuestion();

document.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    const targetBeer = document.getElementById(hash);
    if (targetBeer) {
      targetBeer.scrollIntoView({ behavior: "smooth", block: "center" });
      const body = targetBeer.querySelector(".beer-body");
      if (body) body.style.display = "block";
    }
  }
});
