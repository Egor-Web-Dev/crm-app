import { createClient } from "../api/api.js";
import createModalWindow from "./createModalWindow.js";
import validateForm from "./validateForm.js";
import validateClientContact from "./validateClientContact.js";
import overflowToggle from "./overflowToggle.js";
import createClientItem from "./createClientItem.js";

function addModalWindow() {
  const createModal = createModalWindow();
  const modalContainer = document.createElement("div");

  modalContainer.classList.add("modal-container", "modal-active-container");
  createModal.modalForm.classList.add("add-client");

  modalContainer.append(createModal.modalContent);

  createModal.modalForm.addEventListener("submit", async (e) => {
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
        createModal.errorsBlock
      );

      contacts.push({
        type: contactTypes[i].innerHTML,
        value: contactValues[i].value,
      });
    }

    let clientName = createModal.inputName.value.trim();
    clientName =
      clientName.slice(0, 1).toUpperCase() + clientName.slice(1).toLowerCase();
    let clientSurname = createModal.inputSurname.value.trim();
    clientSurname =
      clientSurname.slice(0, 1).toUpperCase() +
      clientSurname.slice(1).toLowerCase();
    let clientLastName = createModal.inputLastName.value.trim();
    clientLastName =
      clientLastName.slice(0, 1).toUpperCase() +
      clientLastName.slice(1).toLowerCase();

    clientObj.name = clientName;
    clientObj.surname = clientSurname;
    clientObj.lastName = clientLastName;
    clientObj.contacts = contacts;

    validateForm(createModal.inputSurname, createModal.errorsBlock, "Фамилия");
    validateForm(createModal.inputName, createModal.errorsBlock, "Имя");
    validateForm(
      createModal.inputLastName,
      createModal.errorsBlock,
      "Отчество"
    );

    const modalSpinner = document.querySelector(".modal__spinner");

    try {
      if (!createModal.modalForm.querySelector(".no-valid-input")) {
        modalSpinner.style.display = "block";
        const clientData = await createClient(clientObj);
        document
          .querySelector(".clients__tbody")
          .append(createClientItem(clientData));
        modalContainer.remove();
        overflowToggle();
      }
    } catch (err) {
      createModal.errorsBlock.append(createModal.modalMessageError);
    } finally {
      modalSpinner.style.display = "none";
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
      modalContainer.remove();
      overflowToggle();
    }
  });

  createModal.modalBtnClose.addEventListener("click", () => {
    modalContainer.remove();
    overflowToggle();
  });

  createModal.cancelBtn.addEventListener("click", () => {
    modalContainer.remove();
    overflowToggle();
  });

  return modalContainer;
}

export default addModalWindow;
