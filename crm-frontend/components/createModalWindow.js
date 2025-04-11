import icons from "./icons.js";
import createContactItem from "./createContactItem.js";

function createModalWindow() {
  const modalContent = document.createElement("div");
  const modalForm = document.createElement("form");
  const modalHeading = document.createElement("h2");
  const modalBtnClose = document.createElement("button");
  const formGroupName = document.createElement("div");
  const formGroupSurname = document.createElement("div");
  const formGroupLastName = document.createElement("div");
  const inputName = document.createElement("input");
  const labelName = document.createElement("label");
  const inputSurname = document.createElement("input");
  const labelSurname = document.createElement("label");
  const inputLastName = document.createElement("input");
  const labelLastName = document.createElement("label");
  const nameSvg = document.createElement("span");
  const surnameSvg = document.createElement("span");
  const contactsBlock = document.createElement("div");
  const addContactBtn = document.createElement("button");
  const contactBtnSvgDefault = document.createElement("span");
  const contactBtnSvgHover = document.createElement("span");
  const saveBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");
  const errorsBlock = document.createElement("div");
  const modalMessageError = document.createElement("p");
  const spinnerSave = document.createElement("span");

  modalForm.classList.add("modal__form", "flex");
  modalHeading.classList.add("modal__heading");
  modalBtnClose.classList.add("modal__close", "btn-reset");
  formGroupName.classList.add("modal__group-input");
  formGroupSurname.classList.add("modal__group-input");
  formGroupLastName.classList.add("modal__group-input");
  inputName.classList.add("modal__input", "input-required");
  inputSurname.classList.add("modal__input", "input-required");
  inputLastName.classList.add("modal__input");
  labelName.classList.add("modal__label");
  labelSurname.classList.add("modal__label");
  labelLastName.classList.add("modal__label");
  nameSvg.classList.add("modal__label-star");
  surnameSvg.classList.add("modal__label-star");
  contactsBlock.classList.add("modal__contact", "flex");
  addContactBtn.classList.add(
    "modal__btn-contact",
    "btn-reset",
    "modal__btn-contact--active"
  );
  saveBtn.classList.add("modal__btn-save", "btn-reset", "modal__btn");
  cancelBtn.classList.add("modal__btn-back", "btn-reset");
  contactBtnSvgDefault.classList.add(
    "btn-contact__svg",
    "btn-contact__svg-default"
  );
  contactBtnSvgHover.classList.add(
    "btn-contact__svg",
    "btn-contact__svg-hover"
  );
  errorsBlock.classList.add("modal__block-error");
  modalMessageError.classList.add("modal__message-error", "message-error");
  spinnerSave.classList.add("modal__spinner");
  modalContent.classList.add(
    "modal",
    "modal-container__content",
    "modal-active-content"
  );

  modalForm.noValidate = true;
  labelName.for = "floatingName";
  labelSurname.for = "floatingSurname";
  labelLastName.for = "floatingLastName";
  inputName.id = "floatingName";
  inputSurname.id = "floatingSurname";
  inputLastName.id = "floatingLastName";
  inputName.type = "text";
  inputSurname.type = "text";
  inputLastName.type = "text";
  inputName.placeholder = "Имя";
  inputSurname.placeholder = "Фамилия";
  inputLastName.placeholder = "Отчество";
  modalBtnClose.type = "button";
  addContactBtn.type = "button";
  saveBtn.type = "submit";
  cancelBtn.type = "button";

  modalHeading.textContent = "Новый клиент";
  labelName.textContent = "Имя";
  labelSurname.textContent = "Фамилия";
  labelLastName.textContent = "Отчество";
  addContactBtn.textContent = "Добавить контакт";
  saveBtn.textContent = "Сохранить";
  cancelBtn.textContent = "Отмена";
  nameSvg.textContent = "*";
  surnameSvg.textContent = "*";
  modalMessageError.textContent = "Что-то пошло не так! Попробуйте позже!";
  modalBtnClose.title = "Закрыть";
  modalBtnClose.innerHTML = icons.closeModalWindowBtn;
  contactBtnSvgDefault.innerHTML = icons.addContactDefault;
  contactBtnSvgHover.innerHTML = icons.addContactHover;
  spinnerSave.innerHTML = icons.spinner;

  addContactBtn.addEventListener("click", () => {
    const contactItem = createContactItem();
    contactItem.contactInput.id = (Math.random() * 10)
      .toString()
      .split(".")[1]
      .substring(0, 7);
    contactsBlock.prepend(contactItem.contact);
    const arrayContacts = document.querySelectorAll(".contact");

    if (arrayContacts.length === 10) {
      addContactBtn.classList.remove("modal__btn-contact--active");
    } else {
      addContactBtn.classList.add("modal__btn-contact--active");
    }

    if (arrayContacts.length >= 8) {
      modalContent.style.top = "59%";
    }
  });

  labelName.append(nameSvg);
  labelSurname.append(surnameSvg);
  formGroupName.append(inputName, labelName);
  formGroupSurname.append(inputSurname, labelSurname);
  formGroupLastName.append(inputLastName, labelLastName);
  contactsBlock.append(addContactBtn);
  addContactBtn.prepend(contactBtnSvgDefault, contactBtnSvgHover);
  saveBtn.prepend(spinnerSave);
  modalForm.append(
    formGroupSurname,
    formGroupName,
    formGroupLastName,
    contactsBlock,
    errorsBlock,
    saveBtn,
    cancelBtn
  );

  modalContent.append(modalHeading, modalBtnClose, modalForm);

  return {
    modalContent,
    modalForm,
    modalHeading,
    modalBtnClose,
    inputName,
    inputSurname,
    inputLastName,
    labelName,
    labelSurname,
    labelLastName,
    contactsBlock,
    errorsBlock,
    modalMessageError,
    addContactBtn,
    cancelBtn,
  };
}

export default createModalWindow;
