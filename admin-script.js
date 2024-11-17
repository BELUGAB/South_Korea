// Liste des utilisateurs avec uniquement leurs réponses
const users = [
  {
    id: "관휘",
    response: localStorage.getItem("response_관휘") || "Aucune réponse encore",
  },
  {
    id: "시온",
    response: localStorage.getItem("response_시온") || "Aucune réponse encore",
  },
  {
    id: "은서",
    response: localStorage.getItem("response_은서") || "Aucune réponse encore",
  },
  {
    id: "소희",
    response: localStorage.getItem("response_소희") || "Aucune réponse encore",
  },
  {
    id: "퐁",
    response: localStorage.getItem("response_퐁") || "Aucune réponse encore",
  },
  {
    id: "선주",
    response: localStorage.getItem("response_선주") || "Aucune réponse encore",
  },
];

// Fonction pour afficher les réponses des utilisateurs
function displayUserResponses() {
  const container = document.getElementById("user-responses");

  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user-response");
    userDiv.innerHTML = `
          <h3>${user.id}</h3>
          <p><strong>Réponse:</strong> ${user.response}</p>
        `;
    container.appendChild(userDiv);
  });
}

// Afficher les réponses lorsque la page est chargée
displayUserResponses();

// Fonction pour rediriger vers la page d'accueil
function goToHomePage() {
  window.location.href = "index.html"; // Retour à la page d'accueil
}
