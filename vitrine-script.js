function showPhotos(photoContainerId) {
  const photos = document.querySelectorAll(`#${photoContainerId} img`);
  const modal = document.getElementById("photo-modal");
  const modalPhotoGrid = document.getElementById("modal-photo-grid");

  // Vider la grille modale avant d'ajouter les nouvelles photos
  modalPhotoGrid.innerHTML = "";

  // Ajouter les photos à la grille modale
  photos.forEach((photo) => {
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt;
    modalPhotoGrid.appendChild(img);
  });

  // Afficher la boîte modale
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("photo-modal");
  modal.style.display = "none";
}
