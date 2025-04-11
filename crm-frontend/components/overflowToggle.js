function overflowToggle() {
  const modalContainer = document.querySelector(".modal-container");

  if (modalContainer) {
    document.querySelector(".body").classList.add("overflow-none");
  } else {
    document.querySelector(".body").classList.remove("overflow-none");
  }
}

export default overflowToggle;
