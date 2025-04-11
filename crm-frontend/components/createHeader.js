import icons from "./icons.js";

function createHeader() {
  const header = document.createElement("header");
  const container = document.createElement("div");
  const headerContent = document.createElement("div");
  const form = document.createElement("form");
  const logoLink = document.createElement("a");
  const input = document.createElement("input");

  header.classList.add("header");
  container.classList.add("container");
  headerContent.classList.add("header__content", "flex");
  form.classList.add("header__form");
  logoLink.classList.add("header__logo");
  input.classList.add("header__input");

  logoLink.innerHTML = icons.headerLogo;
  logoLink.href = "#";
  logoLink.tabIndex = "0";
  input.type = "search";
  input.placeholder = "Введите запрос";
  input.tabIndex = "1";

  header.append(container);
  container.append(headerContent);
  headerContent.append(logoLink, form);
  form.append(input);

  return header;
}

export default createHeader;
