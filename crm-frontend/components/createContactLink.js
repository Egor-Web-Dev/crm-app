import icons from "./icons.js";
import contactTooltip from "./createContactTooltip.js";

function createContactLink(contactObj) {
  const setTooltip = contactTooltip(contactObj.type, contactObj.value);
  const contactLink = document.createElement("a");
  contactLink.classList.add("contacts__link");

  switch (contactObj.type) {
    case "Телефон":
      contactLink.href = `tel:${contactObj.value.trim()}`;
      contactLink.innerHTML = icons.contactSvgPhone;
      setTooltip.tooltipValue.style.color = "var(--color-white)";
      setTooltip.tooltipValue.style.textDecoration = "none";
      break;
    case "Facebook":
      contactLink.href = contactObj.value.trim();
      contactLink.innerHTML = icons.contactSvgFb;
      break;
    case "VK":
      contactLink.href = contactObj.value.trim();
      contactLink.innerHTML = icons.contactSvgVk;
      break;
    case "Email":
      contactLink.href = `mailto:${contactObj.value.trim()}`;
      contactLink.innerHTML = icons.contactSvgMail;
      break;
    case "Другое":
      contactLink.href = contactObj.value.trim();
      contactLink.innerHTML = icons.contactSvgOther;
      break;

    default:
      break;
  }

  contactLink.append(setTooltip.tooltip);

  return contactLink;
}

export default createContactLink;
