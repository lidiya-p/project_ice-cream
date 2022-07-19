(() => {
  const refs = {
    openModalBtn: document.querySelector("[modal-data-open]"),
    closeModalBtn: document.querySelector("[modal-data-close]"),
    modal: document.querySelector("[modal-data]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
