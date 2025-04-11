import icons from "./icons.js";
import { formatDate, formatTime } from "./setDateTime.js";
import { deleteClientItem } from "../api/api.js";
import deleteClientModal from "./createDeleteModal.js";
import addEditModal from "./addEditModal.js";
import createContactLink from "./createContactLink.js";
import overflowToggle from "./overflowToggle.js";

function createClientItem(clientObject) {
  const clientTr = document.createElement("tr");
  const clientId = document.createElement("td");
  const clientFullName = document.createElement("td");
  const clientName = document.createElement("span");
  const clientSurname = document.createElement("span");
  const clientLastName = document.createElement("span");
  const clientCreated = document.createElement("td");
  const createdDate = document.createElement("span");
  const createdTime = document.createElement("span");
  const clientChanged = document.createElement("td");
  const changedDate = document.createElement("span");
  const changedTime = document.createElement("span");
  const clientContacts = document.createElement("td");
  const clientsContactsBtn = document.createElement("button");
  const clientActions = document.createElement("td");
  const clientEdit = document.createElement("button");
  const clientDelete = document.createElement("button");
  const spinnerEdit = document.createElement("span");
  const spinnerDel = document.createElement("span");
  const deleteClient = deleteClientModal();
  const editClient = addEditModal(clientObject);

  clientTr.classList.add("clients__item", "flex");
  clientTr.id = clientObject.id;
  clientId.classList.add("client__id", "flex");
  clientFullName.classList.add("clients__full-name", "flex");
  clientName.classList.add("clients__name");
  clientSurname.classList.add("clients__surname");
  clientLastName.classList.add("clients__lastname");
  clientCreated.classList.add("clients__created", "flex");
  createdDate.classList.add("created__date");
  createdTime.classList.add("created__time");
  clientChanged.classList.add("clients__changed", "flex");
  changedDate.classList.add("changed__date");
  changedTime.classList.add("changed__time");
  clientContacts.classList.add("clients__contacts", "flex");
  clientsContactsBtn.classList.add("clients__contacts-btn", "btn-reset");
  clientActions.classList.add("clients__actions", "flex");
  clientEdit.classList.add(
    "clients__actions-btn",
    "clients__edit",
    "btn-reset"
  );
  clientDelete.classList.add(
    "clients__actions-btn",
    "clients__delete",
    "btn-reset"
  );
  spinnerEdit.classList.add("actions__spinner");
  spinnerDel.classList.add("actions__spinner");

  if (clientObject.contacts.length > 4) {
    for (let i = 0; i < 4; i += 1) {
      clientContacts.append(
        createContactLink(clientObject.contacts[i]),
        clientsContactsBtn
      );
    }
  } else {
    clientObject.contacts.forEach((contact) => {
      clientContacts.append(createContactLink(contact));
    });
  }

  clientsContactsBtn.addEventListener("click", () => {
    for (let i = 4; i < clientObject.contacts.length; i += 1) {
      clientContacts.append(createContactLink(clientObject.contacts[i]));
      clientsContactsBtn.remove();
    }
  });

  deleteClient.deleteModalBtn.addEventListener("click", () => {
    try {
      deleteClient.spinnerDelete.style.display = "block";
      deleteClientItem(clientObject.id);
      document.getElementById(clientObject.id).remove();
      deleteClient.deleteModal.remove();
      overflowToggle();
    } catch (err) {
      console.log(err);
    } finally {
      deleteClient.spinnerDelete.style.display = "none";
    }
  });

  clientEdit.addEventListener("click", () => {
    spinnerEdit.style.display = "block";
    clientEdit.classList.add("actions__wait");

    setTimeout(() => {
      document.querySelector(".body").append(editClient);
      spinnerEdit.style.display = "none";
      clientEdit.classList.remove("actions__wait");
      overflowToggle();
    }, 800);
  });

  clientDelete.addEventListener("click", () => {
    spinnerDel.style.display = "block";
    clientDelete.classList.add("actions__wait");

    setTimeout(() => {
      document.querySelector(".body").append(deleteClient.deleteModal);
      spinnerDel.style.display = "none";
      clientDelete.classList.remove("actions__wait");
      overflowToggle();
    }, 800);
  });

  clientId.textContent = `${
    clientObject.id.substr(0, 3) + clientObject.id.substr(-3)
  }`;

  clientName.textContent = clientObject.name;
  clientSurname.textContent = clientObject.surname;
  clientLastName.textContent = clientObject.lastName;
  clientEdit.textContent = "Изменить";
  clientDelete.textContent = "Удалить";
  createdDate.textContent = formatDate(clientObject.createdAt);
  createdTime.textContent = formatTime(clientObject.createdAt);
  changedDate.textContent = formatDate(clientObject.updatedAt);
  changedTime.textContent = formatTime(clientObject.updatedAt);
  spinnerEdit.innerHTML = icons.spinner;
  spinnerDel.innerHTML = icons.spinner;
  clientEdit.type = "button";
  clientDelete.type = "button";
  clientsContactsBtn.type = "button";
  clientsContactsBtn.title = "Показать все контакты";
  clientsContactsBtn.textContent = `+${clientObject.contacts.length - 4}`;

  clientFullName.append(clientSurname, clientName, clientLastName);
  clientCreated.append(createdDate, createdTime);
  clientChanged.append(changedDate, changedTime);
  clientActions.append(clientEdit, clientDelete);
  clientEdit.prepend(spinnerEdit);
  clientDelete.prepend(spinnerDel);
  clientTr.append(
    clientId,
    clientFullName,
    clientCreated,
    clientChanged,
    clientContacts,
    clientActions
  );

  return clientTr;
}

export default createClientItem;
