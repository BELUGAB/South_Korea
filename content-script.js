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
      // Ajouter un message dans Firestore
      const docRef = await addDoc(collection(window.db, "messages"), {
        userId: userId,
        message: feedback,
        timestamp: new Date(),
      });

      console.log("Message sauvegardé avec succès :", docRef.id);
      alert("Message envoyé !");
      document.getElementById("feedback").value = ""; // Réinitialiser le champ de texte
      toggleMessageBox(); // Masquer la boîte de message après envoi
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      alert("Une erreur est survenue, veuillez réessayer.");
    }
  } else {
    alert("Le message ne peut pas être vide.");
  }
}

// Exécuter la fonction pour charger le contenu de l'utilisateur
loadUserContent();
