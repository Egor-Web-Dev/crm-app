import icons from "./icons.js";
import overflowToggle from "./overflowToggle.js";
import addModalWindow from "./addModalWindow.js";
import createPreloader from "./createPreloader.js";

function createClientsSection() {
  const main = document.createElement("main");
  const section = document.createElement("section");
  const container = document.createElement("div");
  const heading1 = document.createElement("h1");
  const clientsContentDiv = document.createElement("div");
  const wrapperDiv = document.createElement("div");
  const clientsTable = document.createElement("table");
  const thead = document.createElement("thead");
  const theadTr = document.createElement("tr");
  const headCellId = document.createElement("th");
  const headCellName = document.createElement("th");
  const headCellCreation = document.createElement("th");
  const headCellChanges = document.createElement("th");
  const headCellContacts = document.createElement("th");
  const headCellActions = document.createElement("th");
  const nameSpan = document.createElement("span");
  const tbody = document.createElement("tbody");
  const addClientBtn = document.createElement("button");
  const addClientBtnSvg = document.createElement("span");
  const idSpan = document.createElement("span");
  const creationSpan = document.createElement("span");
  const changesSpan = document.createElement("span");
  const clientsMessageError = document.createElement("p");

  const classThSorting = "sorting";
  const classForThead = "thead__th";
  const classFlex = "flex";
  const classSvgFill = "svg-fill";
  const classArrowSpan = "span-arrow";

  headCellId.setAttribute("data-type", "id");
  headCellName.setAttribute("data-type", "name");
  headCellCreation.setAttribute("data-type", "create");
  headCellChanges.setAttribute("data-type", "update");

  headCellId.tabIndex = "1";
  headCellName.tabIndex = "1";
  headCellCreation.tabIndex = "1";
  headCellChanges.tabIndex = "1";

  main.classList.add("main");
  section.classList.add("clients");
  container.classList.add("container");
  heading1.classList.add("clients__heading");
  clientsContentDiv.classList.add(classFlex, "clients__content");
  wrapperDiv.classList.add("clients__wrapper");
  clientsTable.classList.add("clients__table");
  thead.classList.add("table__thead", "thead");
  theadTr.classList.add(classFlex, "thead__tr");
  headCellId.classList.add(
    classForThead,
    classFlex,
    classThSorting,
    "thead__cell-id",
    "sort-up"
  );
  headCellName.classList.add(
    classForThead,
    classFlex,
    classThSorting,
    "thead__cell-name",
    "sort-down"
  );
  headCellCreation.classList.add(
    classForThead,
    classFlex,
    classThSorting,
    "thead__cell-creation",
    "sort-down"
  );
  headCellChanges.classList.add(
    classForThead,
    classFlex,
    classThSorting,
    "thead__cell-changes",
    "sort-down"
  );
  headCellContacts.classList.add(
    classForThead,
    classFlex,
    "thead__cell-contacts"
  );
  headCellActions.classList.add(
    classForThead,
    classFlex,
    "thead__cell-actions"
  );
  tbody.classList.add("clients__tbody");
  idSpan.classList.add(classSvgFill, classArrowSpan, "id__span-svg");
  nameSpan.classList.add(classSvgFill, classArrowSpan, classFlex, "name__span");
  creationSpan.classList.add(
    classSvgFill,
    classArrowSpan,
    "creation__span-svg"
  );
  changesSpan.classList.add(classSvgFill, classArrowSpan, "changes__span-svg");
  addClientBtn.classList.add("clients__btn-add", "btn-reset");
  addClientBtnSvg.classList.add(classSvgFill, "clients__btn-svg");
  clientsMessageError.classList.add("clients__message-error", "message-error");

  heading1.textContent = "Клиенты";
  headCellId.textContent = "ID";
  idSpan.innerHTML = icons.arrowUp;
  headCellName.textContent = "Фамилия Имя Отчество";
  nameSpan.innerHTML = `${icons.arrowUp}А-Я`;
  headCellCreation.textContent = "Дата и время";
  creationSpan.innerHTML = `создания${icons.arrowUp}`;
  headCellChanges.textContent = "Последние";
  changesSpan.innerHTML = `изменения${icons.arrowUp}`;
  headCellContacts.textContent = "Контакты";
  headCellActions.textContent = "Действия";
  addClientBtn.textContent = "Добавить клиента";
  addClientBtn.type = "button";
  addClientBtnSvg.innerHTML = icons.addClientSvg;
  clientsMessageError.textContent = "Что-то пошло не так! Попробуйте позже!";

  addClientBtn.addEventListener("click", () => {
    document.querySelector(".body").append(addModalWindow());
    overflowToggle();
  });

  main.append(section);
  section.append(container);
  container.append(clientsContentDiv);
  clientsContentDiv.append(heading1, wrapperDiv, addClientBtn);
  wrapperDiv.append(clientsTable);
  clientsTable.append(thead, tbody);
  tbody.append(createPreloader());
  thead.append(theadTr);
  theadTr.append(
    headCellId,
    headCellName,
    headCellCreation,
    headCellChanges,
    headCellContacts,
    headCellActions
  );
  headCellId.append(idSpan);
  headCellName.appendChild(nameSpan);
  headCellCreation.append(creationSpan);
  headCellChanges.append(changesSpan);
  addClientBtn.prepend(addClientBtnSvg);

  return {
    main,
    clientsTable,
    tbody,
    addClientBtn,
    clientsMessageError,
  };
}

export default createClientsSection;
