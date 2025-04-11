function validateForm(input, container, name) {
  const inputField = input;
  const formMessageError = document.createElement("p");
  const paragraphError = document.getElementById(
    `${inputField.id}${inputField.type}`
  );
  const regexp = /^[А-Яа-яЁё]/;

  inputField.classList.remove("no-valid-input");

  if (paragraphError) {
    paragraphError.remove();
  }

  formMessageError.classList.add("message-error", "modal__message-error");

  formMessageError.id = `${inputField.id}${inputField.type}`;

  inputField.addEventListener("input", () => {
    inputField.style.borderColor = "var(--color-gray-suit)";
    formMessageError.textContent = "";
  });

  if (
    (!regexp.test(inputField.value) && inputField.value) ||
    (!inputField.value && inputField.classList.contains("input-required"))
  ) {
    inputField.style.borderColor = "var(--color-burnt-sienna)";
    inputField.classList.add("no-valid-input");
    container.prepend(formMessageError);
  }

  if (!inputField.value && inputField.classList.contains("input-required")) {
    formMessageError.textContent = `Заполните поле "${name}"!`;
  }

  if (!regexp.test(inputField.value) && inputField.value) {
    formMessageError.textContent = `Поле "${name}" содержит некорректное значение!`;
  }
}

export default validateForm;
