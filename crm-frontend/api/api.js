async function getClients() {
  try {
    const response = await fetch("http://localhost:3000/api/clients");
    return await response.json();
  } catch (err) {
    console.warn(err);
  }
}

async function createClient(clientData) {
  try {
    const response = await fetch("http://localhost:3000/api/clients/", {
      method: "POST",
      body: JSON.stringify(clientData),
    });

    return await response.json();
  } catch (err) {
    console.warn(err);
  }
}

async function editClient(clientData, id) {
  try {
    const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
      method: "PATCH",
      body: JSON.stringify(clientData),
    });

    return await response.json();
  } catch (err) {
    console.warn(err);
  }
}

async function deleteClientItem(id) {
  try {
    await fetch(`http://localhost:3000/api/clients/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    console.warn(err);
  }
}

async function findClient(value) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/clients?search=${value}`
    );

    return await response.json();
  } catch (err) {
    console.warn(err);
  }
}

export { getClients, createClient, editClient, deleteClientItem, findClient };
