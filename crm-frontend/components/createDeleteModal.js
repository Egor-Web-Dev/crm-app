import icons from "./icons.js";
import overflowToggle from "./overflowToggle.js";

function deleteClientModal() {
  const deleteModal = document.createElement("div");
  const deleteModalContent = document.createElement("div");
  const modalClose = document.createElement("button");
  const deleteModalHeading = document.createElement("h2");
  const deleteModalText = document.createElement("p");
  const deleteModalBtn = document.createElement("button");
  const deleteModalBack = document.createElement("button");
  const spinnerDelete = document.createElement("span");

  deleteModal.classList.add(
    "delete-modal",
    "modal-container",
    "modal-active-container"
  );
  deleteModalContent.classList.add(
    "delete-modal__content",
    "modal",
    "modal-active-content",
    "flex"
  );
  deleteModalHeading.classList.add("delete-modal__title", "modal__heading");
  deleteModalText.classList.add("delete-modal__text");
  deleteModalBtn.classList.add(
    "delete-modal__delete",
    "btn-reset",
    "modal__btn"
  );
  deleteModalBack.classList.add(
    "delete-modal__back",
    "btn-reset",
    "modal__btn-back"
  );
  modalClose.classList.add("modal__close", "btn-reset");
  spinnerDelete.classList.add("modal__spinner");

  deleteModalHeading.textContent = "Удалить клиента";
  deleteModalText.textContent =
    "Вы действительно хотите удалить данного клиента?";
  deleteModalBtn.textContent = "Удалить";
  deleteModalBack.textContent = "Отмена";
  modalClose.title = "Закрыть";
  modalClose.innerHTML = icons.closeModalWindowBtn;
  spinnerDelete.innerHTML = icons.spinner;

  deleteModalBtn.prepend(spinnerDelete);
  deleteModalContent.append(
    modalClose,
    deleteModalHeading,
    deleteModalText,
    deleteModalBtn,
    deleteModalBack
  );
  deleteModal.append(deleteModalContent);

  modalClose.addEventListener("click", () => {
    deleteModal.remove();
    overflowToggle();
  });

  deleteModalBack.addEventListener("click", () => {
    deleteModal.remove();
    overflowToggle();
  });

  window.addEventListener("click", (e) => {
    if (e.target === deleteModal) {
      deleteModal.remove();
      overflowToggle();
    }
  });

  return {
    deleteModal,
    deleteModalContent,
    deleteModalBtn,
    spinnerDelete,
  };
}

export default deleteClientModal;
