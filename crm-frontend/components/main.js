import sortTable from "./sortTable.js";
import { getClients } from "../api/api.js";
import createHeader from "./createHeader.js";
import searchClients from "./searchClients.js";
import createClientItem from "./createClientItem.js";
import createClientsSection from "./createSectionClients.js";

async function createClientsList() {
  const header = createHeader();
  const sectionClients = createClientsSection();
  document.querySelector(".body").append(header, sectionClients.main);
  const preloader = document.querySelector(".preloader");

  try {
    const clients = await getClients();
    searchClients();
    clients.forEach((client) => {
      document
        .querySelector(".clients__tbody")
        .append(createClientItem(client));
    });
  } catch {
    sectionClients.addClientBtn.remove();
    sectionClients.clientsTable.append(sectionClients.clientsMessageError);
  } finally {
    preloader.remove();
  }
}

createClientsList();

document.addEventListener("DOMContentLoaded", sortTable());
