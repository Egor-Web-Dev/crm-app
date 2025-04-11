import validateForm from "./validateForm.js";
import overflowToggle from "./overflowToggle.js";
import createClientItem from "./createClientItem.js";
import createModalWindow from "./createModalWindow.js";
import createContactItem from "./createContactItem.js";
import deleteClientModal from "./createDeleteModal.js";
import { deleteClientItem, editClient } from "../api/api.js";
import validateClientContact from "./validateClientContact.js";

function addEditModal(data) {
  const modal = createModalWindow();
  const editModal = document.createElement("div");
  const titleId = document.createElement("span");

  titleId.classList.add("modal__id");
  editModal.classList.add(
    "modal-edit",
    "modal-container",
    "modal-active-container"
  );

  modal.modalHeading.textContent = "Изменить данные";
  titleId.textContent = `ID: ${data.id.substr(0, 3) + data.id.substr(-3)}`;
  modal.cancelBtn.textContent = "Удалить клиента";
  modal.inputSurname.value = data.surname;
  modal.inputName.value = data.name;
  modal.inputLastName.value = data.lastName;

  data.contacts.forEach((c) => {
    const createContact = createContactItem();

    createContact.contactName.textContent = c.type;
    createContact.contactInput.value = c.value;

    modal.contactsBlock.prepend(createContact.c);
  });

  if (data.contacts.length === 10) {
    modal.addContactBtn.classList.remove("modal__btn-contact--active");
  }

  modal.cancelBtn.addEventListener("click", () => {
    const deleteModal = deleteClientModal();
    document.querySelector(".body").append(deleteModal.deleteModal);

    deleteModal.deleteModalBtn.addEventListener("click", () => {
      try {
        deleteModal.spinnerDelete.style.display = "block";
        deleteClientItem(data.id);
        document.getElementById(data.id).remove();
        deleteModal.deleteModal.remove();
        document.querySelector(".modal-edit").remove();
        overflowToggle();
      } catch (error) {
        console.log(error);
      } finally {
        deleteModal.spinnerDelete.style.display = "none";
      }
    });
  });

  modal.modalBtnClose.addEventListener("click", () => {
    editModal.remove();
    overflowToggle();
  });

  document.addEventListener("click", (e) => {
    if (e.target === editModal) {
      editModal.remove();
      overflowToggle();
    }
  });

  modal.modalForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const contactTypes = document.querySelectorAll(".contact__name");
    const contactValues = document.querySelectorAll(".contact__input");
    const contactDelete = document.querySelectorAll(".contact__delete");
    const contacts = [];
    const clientObj = {};

    for (let i = 0; i < contactTypes.length; i += 1) {
      validateClientContact(
        contactTypes[i],
        contactValues[i],
        contactDelete[i],
        modal.errorsBlock
      );
      contacts.push({
        type: contactTypes[i].innerHTML,
        value: contactValues[i].value,
      });
    }

    let editedClientName = modal.inputName.value.trim();
    editedClientName =
      editedClientName.slice(0, 1).toUpperCase() +
      editedClientName.slice(1).toLowerCase();
    let editedClientSurname = modal.inputSurname.value.trim();
    editedClientSurname =
      editedClientSurname.slice(0, 1).toUpperCase() +
      editedClientSurname.slice(1).toLowerCase();
    let editedClientLastName = modal.inputLastName.value.trim();
    editedClientLastName =
      editedClientLastName.slice(0, 1).toUpperCase() +
      editedClientLastName.slice(1).toLowerCase();

    clientObj.name = editedClientName;
    clientObj.surname = editedClientSurname;
    clientObj.lastName = editedClientLastName;
    clientObj.contacts = contacts;

    validateForm(modal.inputSurname, modal.errorsBlock, "Фамилия");
    validateForm(modal.inputName, modal.errorsBlock, "Имя");
    validateForm(modal.inputLastName, modal.errorsBlock, "Отчество");

    const modalSpinner = document.querySelector(".modal__spinner");

    try {
      if (!modal.modalForm.querySelector(".no-valid-input")) {
        modalSpinner.style.display = "block";
        const editedClientData = await editClient(clientObj, data.id);
        document
          .getElementById(editedClientData.id)
          .replaceWith(createClientItem(editedClientData));
        editModal.remove();
        overflowToggle();
      }
    } catch {
      modal.errorsBlock.append(modal.modalMessageError);
    } finally {
      modalSpinner.style.display = "none";
    }
  });

  modal.modalHeading.append(titleId);
  editModal.append(modal.modalContent);

  return editModal;
}

export default addEditModal;
