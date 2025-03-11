import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCp0MHrlUNcoVbGDgD5bCKSlbdLJWVmJz4",
  authDomain: "feedback-coree-du-sud.firebaseapp.com",
  projectId: "feedback-coree-du-sud",
  storageBucket: "feedback-coree-du-sud.appspot.com",
  messagingSenderId: "588294660667",
  appId: "1:588294660667:web:41b4296bbc114a0cb7721e",
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Liste des utilisateurs
const users = ["관휘", "시온", "은서", "소희", "퐁", "선주","경민"];

// Fonction pour récupérer les messages
async function fetchUserMessages() {
  const messagesCollection = collection(db, "messages");
  const snapshot = await getDocs(messagesCollection);

  const userMessages = {};

  snapshot.forEach((doc) => {
    const data = doc.data();
    const userId = data.userId;
    const message = data.message;

    // Ajouter les messages dans une liste par utilisateur
    if (!userMessages[userId]) {
      userMessages[userId] = [];
    }
    userMessages[userId].push(message);
  });

  displayUserMessages(userMessages);
}

// Fonction pour afficher les messages
function displayUserMessages(userMessages) {
  const container = document.getElementById("user-responses");
  container.innerHTML = "";

  users.forEach((userId) => {
    const messages = userMessages[userId] || ["Aucun message encore"];
    const userDiv = document.createElement("div");
    userDiv.classList.add("user-response");

    const messagesHTML = messages.map((msg) => `<li>${msg}</li>`).join("");

    userDiv.innerHTML = `
      <h3>${userId}</h3>
      <ul>${messagesHTML}</ul>
    `;
    container.appendChild(userDiv);
  });
}

// Charger les messages au chargement de la page
window.onload = fetchUserMessages;

// Fonction pour rediriger vers l'accueil
document.getElementById("back-button").addEventListener("click", () => {
  window.location.href = "index.html";
});
