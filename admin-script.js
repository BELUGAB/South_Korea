// Importation des fonctions Firebase
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
  storageBucket: "feedback-coree-du-sud.firebasestorage.app",
  messagingSenderId: "588294660667",
  appId: "1:588294660667:web:41b4296bbc114a0cb7721e",
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Liste des utilisateurs récupérés depuis localStorage (les noms)
const users = ["관휘", "시온", "은서", "소희", "퐁", "선주"];

// Fonction pour récupérer les messages des utilisateurs depuis Firestore
async function fetchUserMessages() {
  const responsesCollection = collection(db, "messages"); // Nom de la collection Firestore
  const snapshot = await getDocs(responsesCollection);
  const userMessages = {};

  // Vérification si des documents sont récupérés
  if (snapshot.empty) {
    console.log("Aucun document trouvé dans la collection 'messages'");
  } else {
    snapshot.forEach((doc) => {
      const data = doc.data();
      console.log("Données récupérées : ", data); // Affiche les données du document dans la console

      // Si un message existe, on l'ajoute à l'objet userMessages
      if (data.userId && data.message) {
        userMessages[data.userId] = data.message;
      }
    });
  }

  // Affichage des messages après récupération des données de Firestore
  displayUserMessages(userMessages);
}

// Fonction pour afficher les messages des utilisateurs
function displayUserMessages(userMessages) {
  const container = document.getElementById("user-responses");

  // Réinitialiser le conteneur avant d'ajouter les nouveaux messages
  container.innerHTML = "";

  // Vérification si userMessages est vide ou non
  console.log("Messages récupérés pour l'affichage : ", userMessages);

  // Afficher les messages des utilisateurs
  users.forEach((userId) => {
    const feedback = userMessages[userId] || "Aucun message encore"; // Si aucun message n'est trouvé, afficher un message par défaut

    const userDiv = document.createElement("div");
    userDiv.classList.add("user-response");
    userDiv.innerHTML = `
      <h3>${userId}</h3>
      <p><strong>Message:</strong> ${feedback}</p>
    `;
    container.appendChild(userDiv);
  });
}

// Charger les messages depuis Firestore après le chargement de la page
window.onload = fetchUserMessages;

// Fonction pour rediriger vers la page d'accueil
function goToHomePage() {
  window.location.href = "index.html"; // Retour à la page d'accueil
}

// Ajout du gestionnaire d'événement pour le bouton "Retour à l'accueil"
document.getElementById("back-button").addEventListener("click", goToHomePage);
