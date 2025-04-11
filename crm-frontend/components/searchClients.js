import { getClients, findClient } from "../api/api.js";
import createClientItem from "./createClientItem.js";

function searchClients() {
  const input = document.querySelector(".header__input");
  const tbody = document.querySelector(".clients__tbody");
  const regexp = /^[А-Яа-яЁё]/;
  let timer;

  const redrawTable = async (val) => {
    const response = await findClient(val);
    tbody.innerHTML = "";

    for (const client of response) {
      tbody.append(createClientItem(client));
    }
  };

  input.addEventListener("input", async () => {
    const clients = await getClients();
    clearTimeout(timer);

    timer = setTimeout(() => {
      const value = input.value.trim();
      if (value !== "" && regexp.test(value)) {
        redrawTable(value);
      } else if (value !== "" && !regexp.test(value)) {
        tbody.innerHTML = "";
      } else {
        tbody.innerHTML = "";

        for (const client of clients) {
          tbody.append(createClientItem(client));
        }
      }
    }, 300);
  });
}

export default searchClients;
