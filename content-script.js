// content-script.js

// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", () => {
  // Initialisation de Firebase de manière asynchrone
  initializeFirebase();
});

// Fonction d'initialisation de Firebase
async function initializeFirebase() {
  try {
    // Importer les modules Firebase de manière dynamique
    const { initializeApp } = await import(
      "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
    );
    const { getFirestore, collection, addDoc } = await import(
      "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js"
    );

    // Vérification de la présence des modules Firestore
    if (!addDoc || !getFirestore || !collection) {
      console.error(
        "Erreur : Firebase Firestore n'a pas pu être chargé correctement."
      );
      return;
    }

    // Configuration Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyCp0MHrlUNcoVbGDgD5bCKSlbdLJWVmJz4",
      authDomain: "feedback-coree-du-sud.firebaseapp.com",
      projectId: "feedback-coree-du-sud",
      storageBucket: "feedback-coree-du-sud.firebasestorage.app",
      messagingSenderId: "588294660667",
      appId: "1:588294660667:web:41b4296bbc114a0cb7721e",
    };

    // Initialisation de Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Exposer la base de données Firestore pour une utilisation globale
    window.db = db;
    window.addDoc = addDoc; // Ajouter la fonction `addDoc` à l'objet global
    window.collection = collection; // Ajouter la fonction `collection` à l'objet global

    // Charger le contenu utilisateur une fois Firebase initialisé
    loadUserContent();

    // Initialiser les événements pour les boutons après l'initialisation
    initializeEventListeners();
  } catch (error) {
    console.error("Erreur lors de l'initialisation de Firebase :", error);
  }
}

// Charger les données de l'utilisateur depuis localStorage
function loadUserContent() {
  const userId = localStorage.getItem("userId");
  const userContent = localStorage.getItem("userContent");
  const userImage = localStorage.getItem("userImage");

  if (userId && userContent && userImage) {
    document.getElementById("user-name").textContent = userId;
    document.getElementById("user-content").textContent = userContent;

    // Afficher l'image de l'utilisateur
    const img = document.createElement("img");
    img.src = userImage;
    img.alt = "Photo de l'utilisateur";
    img.classList.add("friend-photo");

    // Dictionnaire de correspondance pour les classes spécifiques aux utilisateurs
    const userClasses = {
      관휘: "gwanhwe-photo",
      은서: "eunseo-photo",
      소희: "eunseo-photo",
      선주: "gwanhwe-photo",
    };

    // Appliquer la classe spécifique à l'utilisateur, si elle existe
    if (userClasses[userId]) {
      img.classList.add(userClasses[userId]);
    }

    document.getElementById("photos-container").appendChild(img);
  } else {
    console.error("Données utilisateur non trouvées dans localStorage.");
  }
}

// Fonction de déconnexion
function logout() {
  localStorage.clear(); // Effacer les données de l'utilisateur
  window.location.href = "login.html"; // Rediriger vers la page de connexion
}

// Fonction pour afficher/masquer la boîte de message
function toggleMessageBox() {
  const messageBox = document.getElementById("message-box");
  const isVisible = messageBox.style.display === "block";
  messageBox.style.display = isVisible ? "none" : "block"; // Alterner l'affichage
}

// Fonction pour sauvegarder le message dans Firestore
async function saveFeedback() {
  const feedback = document.getElementById("feedback").value;
  const userId = localStorage.getItem("userId");

  if (feedback && userId) {
    try {
      // Vérification si la base de données est initialisée
      if (!window.db || !window.addDoc || !window.collection) {
        console.error(
          "Erreur : La base de données ou les fonctions nécessaires ne sont pas disponibles."
        );
        return;
      }

      // Vérification si 'messages' existe bien dans Firestore
      const messagesCollection = window.collection(window.db, "messages");
      if (!messagesCollection) {
        console.error("Erreur : La collection 'messages' n'a pas été trouvée.");
        return;
      }

      // Ajouter un message dans Firestore
      const docRef = await window.addDoc(messagesCollection, {
        userId: userId,
        message: feedback,
        timestamp: new Date(),
      });

      console.log("Message sauvegardé avec succès :", docRef.id);
      alert("Message envoyé !");
      document.getElementById("feedback").value = ""; // Réinitialiser le champ de texte
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      alert("Une erreur est survenue, veuillez réessayer.");
    }
  } else {
    alert("Le message ne peut pas être vide.");
  }
}

// Initialiser les événements des boutons
function initializeEventListeners() {
  // Événement pour la déconnexion
  const logoutButton = document.getElementById("logout-btn");
  if (logoutButton) {
    logoutButton.addEventListener("click", logout);
  }

  // Événement pour afficher/masquer la boîte de message
  const toggleButton = document.getElementById("message-btn");
  if (toggleButton) {
    toggleButton.addEventListener("click", toggleMessageBox);
  }

  // Événement pour envoyer le message
  const saveButton = document.getElementById("save-feedback-btn");
  if (saveButton) {
    saveButton.addEventListener("click", saveFeedback);
  }
}
