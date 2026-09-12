document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector(".footer-inner p");

  if (footer) {
    footer.textContent = `© ${year} Wild Notes`;
  }

  const tabs = document.querySelectorAll(".filter-tab");
  const cards = document.querySelectorAll(".video-card");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selected = tab.dataset.filter;

      tabs.forEach((item) => item.classList.toggle("active", item === tab));
      cards.forEach((card) => {
        const match = selected === "All" || card.dataset.category === selected;
        card.style.display = match ? "block" : "none";
      });
    });
  });

  const petCards = document.querySelectorAll(".pet-card");
  const modal = document.getElementById("petModal");
  const modalImage = document.getElementById("modalImage");
  const modalName = document.getElementById("modalName");
  const modalScientific = document.getElementById("modalScientific");
  const modalOrigin = document.getElementById("modalOrigin");
  const modalBirth = document.getElementById("modalBirth");
  const modalDescription = document.getElementById("modalDescription");
  const modalClose = document.querySelector(".pet-modal-close");
  const modalBackdrop = document.querySelector(".pet-modal-backdrop");

  const showPetModal = (card) => {
    modalImage.src = card.dataset.image;
    modalImage.alt = card.dataset.name;
    modalName.textContent = card.dataset.name;
    modalScientific.textContent = card.dataset.scientific;
    modalOrigin.textContent = card.dataset.origin;
    modalBirth.textContent = card.dataset.birth;
    modalDescription.textContent = card.dataset.description;
    modal.classList.remove("hidden");
  };

  petCards.forEach((card) => {
    card.addEventListener("click", () => showPetModal(card));
  });

  const closePetModal = () => modal.classList.add("hidden");

  modalClose.addEventListener("click", closePetModal);
  modalBackdrop.addEventListener("click", closePetModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
      closePetModal();
    }
  });
});
