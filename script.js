const initializePage = () => {
  if (document.body.dataset.pageInitialized === "true") return;
  document.body.dataset.pageInitialized = "true";

  const year = new Date().getFullYear();
  const footer = document.querySelector(".footer-inner p");

  if (footer) {
    footer.textContent = `© ${year} Wild Notes`;
  }

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
    if (!modal || !modalImage || !modalName || !modalScientific || !modalOrigin || !modalBirth || !modalDescription) return;

    modalImage.src = card.dataset.image;
    modalImage.alt = card.dataset.name;
    modalName.textContent = card.dataset.name;
    modalScientific.textContent = card.dataset.scientific;
    modalOrigin.textContent = card.dataset.origin;
    modalBirth.textContent = card.dataset.birth;
    modalDescription.textContent = card.dataset.description;
    modal.classList.remove("hidden");
  };

  const closePetModal = () => modal.classList.add("hidden");

  document.addEventListener("click", (event) => {
    const tab = event.target.closest(".filter-tab");
    const petCard = event.target.closest(".pet-card");

    if (tab) {
      const selected = tab.dataset.filter;
      document.querySelectorAll(".filter-tab").forEach((item) => {
        item.classList.toggle("active", item === tab);
      });
      document.querySelectorAll(".video-card").forEach((card) => {
        const match = selected === "All" || card.dataset.category === selected;
        card.style.display = match ? "" : "none";
      });
    }

    if (petCard) showPetModal(petCard);
    if (event.target.closest(".pet-modal-close, .pet-modal-backdrop")) closePetModal();
  });

  document.addEventListener("keydown", (event) => {
    if (modal && event.key === "Escape" && !modal.classList.contains("hidden")) {
      closePetModal();
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePage);
} else {
  initializePage();
}
