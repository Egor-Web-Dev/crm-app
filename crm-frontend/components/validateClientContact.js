function validateClientContact(type, input, btnDel, container) {
  const inputField = input;
  const contactMessageError = document.createElement("p");
  const paragraphError = document.getElementById(
    `${type.textContent}${inputField.id}`
  );
  let regexp;

  inputField.classList.remove("no-valid-input");
  if (paragraphError) paragraphError.remove();

  contactMessageError.classList.add("message-error", "modal__message-error");

  contactMessageError.id = `${type.textContent}${inputField.id}`;

  const deleteErrorMessage = (element, event) => {
    element.addEventListener(event, () => {
      inputField.style.backgroundColor = "transparent";
      contactMessageError.remove();
    });
  };

  deleteErrorMessage(inputField, "input");
  deleteErrorMessage(type, "click");
  deleteErrorMessage(btnDel, "click");

  switch (type.textContent) {
    case "Телефон":
      regexp = /[0-9]$/;
      if (inputField.value.length !== 11)
        contactMessageError.textContent =
          "Номер телефона должен содержать 11 цифр!";
      if (!regexp.test(inputField.value))
        contactMessageError.textContent =
          "Введите корректный номер телефона! Например: 89117775500";
      break;
    case "Email":
      regexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      if (!regexp.test(inputField.value))
        contactMessageError.textContent =
          "Введите корректный Email! Например: qwertyz@mail.ru";
      break;
    case "VK":
      regexp = /vk\.com\/[\S]{1,}$/;
      if (!regexp.test(inputField.value))
        contactMessageError.textContent =
          "Введите корректный адресс VK! Например: vk.com/skillbus";
      break;
    case "Facebook":
      regexp = /facebook\.com\/[\S]{1,}$/;
      if (!regexp.test(inputField.value))
        contactMessageError.textContent =
          "Введите корректный адресс Facebook! Например: facebook.com/ivanov1";
      break;
    case "Другое":
      regexp = /[а-яА-ЯёЁ0-9]/;
      if (!regexp.test(inputField.value))
        contactMessageError.textContent = `Значение поля "${type.textContent}" должно быть на кириллице!`;
      break;
    default:
      break;
  }

  if (!inputField.value)
    contactMessageError.textContent = `Заполните поле "${type.textContent}"!`;

  if (
    !inputField.value ||
    !regexp.test(inputField.value) ||
    (type.textContent === "Телефон" && inputField.value.length !== 11)
  ) {
    inputField.style.backgroundColor = "var(--color-burnt-sienna)";
    inputField.classList.add("no-valid-input");
    container.append(contactMessageError);
  }
}

export default validateClientContact;
