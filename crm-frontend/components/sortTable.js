function sortTable() {
  const table = document.querySelector(".clients__table");
  const tbody = table.querySelector(".clients__tbody");
  const headers = table.querySelectorAll(".sorting");

  const sortColumn = (index) => {
    const type = headers[index].getAttribute("data-type");
    const rows = tbody.querySelectorAll("tr");
    const newRows = Array.from(rows);
    const multiply = headers[index].classList.contains("sort-up") ? -1 : 1;

    newRows.sort((row1, row2) => {
      const cellA = row1.querySelectorAll("td")[index].textContent;
      const cellB = row2.querySelectorAll("td")[index].textContent;
      let a;
      let b;

      if (type === "id") {
        a = Number(cellA);
        b = Number(cellB);
      } else if (type === "create" || type === "update") {
        a = Number(
          cellA.slice(0, 10).split(".").reverse().join("") +
            cellA.slice(10).split(":").join("")
        );
        b = Number(
          cellB.slice(0, 10).split(".").reverse().join("") +
            cellB.slice(10).split(":").join("")
        );
      } else {
        a = cellA;
        b = cellB;
      }

      if (a > b) return 1 * multiply;
      if (a < b) return -1 * multiply;
      if (a === b) return 0;
    });

    rows.forEach((r) => {
      tbody.removeChild(r);
    });

    newRows.forEach((r) => {
      tbody.appendChild(r);
    });

    headers[index].classList.toggle("sort-up");
    headers[index].classList.toggle("sort-down");
  };

  for (let i = headers.length - 1; i >= 0; i -= 1) {
    headers[i].addEventListener("click", () => {
      sortColumn(i);
    });
  }
}

export default sortTable;
