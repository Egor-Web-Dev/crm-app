import icons from "./icons.js";

function createContactItem() {
  const contact = document.createElement("div");
  const contactType = document.createElement("div");
  const contactName = document.createElement("button");
  const contactList = document.createElement("ul");
  const contactPhone = document.createElement("li");
  const contactVk = document.createElement("li");
  const contactFb = document.createElement("li");
  const contactEmail = document.createElement("li");
  const contactOther = document.createElement("li");
  const btnPhone = document.createElement("button");
  const btnVk = document.createElement("button");
  const btnFb = document.createElement("button");
  const btnEmail = document.createElement("button");
  const btnOther = document.createElement("button");
  const contactInput = document.createElement("input");
  const contactDelete = document.createElement("button");
  const contactDeleteTooltip = document.createElement("span");

  contact.classList.add("contact", "flex");
  contactType.classList.add("contact__type");
  contactName.classList.add("contact__name");
  contactList.classList.add("contact__list", "list-reset", "flex");
  btnPhone.classList.add("contact__item", "btn-reset");
  btnVk.classList.add("contact__item", "btn-reset");
  btnFb.classList.add("contact__item", "btn-reset");
  btnEmail.classList.add("contact__item", "btn-reset");
  btnOther.classList.add("contact__item", "btn-reset");
  contactInput.classList.add("contact__input");

  contactDelete.classList.add("contact__delete", "btn-reset", "flex");
  contactDeleteTooltip.classList.add("modal__contact-tooltip", "span-tooltip");

  contactName.textContent = "Телефон";
  contactName.type = "button";
  btnPhone.textContent = "Телефон";
  btnPhone.type = "button";
  btnVk.textContent = "VK";
  btnVk.type = "button";
  btnEmail.textContent = "Email";
  btnEmail.type = "button";
  btnFb.textContent = "Facebook";
  btnFb.type = "button";
  btnOther.textContent = "Другое";
  btnOther.type = "button";
  contactInput.placeholder = "Введите данные контакта";
  contactDeleteTooltip.textContent = "Удалить контакт";
  contactInput.type = "text";
  contactDelete.type = "button";
  contactDelete.innerHTML = icons.deleteContact;

  contactDelete.addEventListener("click", () => {
    contact.remove();
    const arrayContacts = document.querySelectorAll(".contact");
    document
      .querySelector(".modal__btn-contact")
      .classList.add("modal__btn-contact--active");
    if (arrayContacts.length <= 7) {
      document.querySelector(".modal").style.top = "50%";
    }
  });

  contactName.addEventListener("click", () => {
    contactList.classList.toggle("contact__list--active");
    contactName.classList.toggle("contact__list--active");
  });

  contactType.addEventListener("mouseleave", () => {
    contactList.classList.remove("contact__list--active");
    contactName.classList.remove("contact__list--active");
  });

  const typesArray = [
    contactPhone,
    contactEmail,
    contactVk,
    contactFb,
    contactOther,
  ];

  typesArray.forEach((type) => {
    type.addEventListener("click", () => {
      contactName.textContent = type.textContent;
      contactList.classList.remove("contact__list--active");
      contactName.classList.remove("contact__list--active");
    });
  });

  contactDelete.append(contactDeleteTooltip);
  contact.append(contactType, contactInput, contactDelete);
  contactType.append(contactName, contactList);
  contactPhone.append(btnPhone);
  contactVk.append(btnVk);
  contactEmail.append(btnEmail);
  contactFb.append(btnFb);
  contactOther.append(btnOther);
  contactList.append(
    contactPhone,
    contactEmail,
    contactVk,
    contactFb,
    contactOther
  );

  return {
    contact,
    contactName,
    contactInput,
    contactDelete,
  };
}

export default createContactItem;
