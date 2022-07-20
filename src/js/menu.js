(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
    aboutRef: document.querySelector('.site-nav'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.aboutRef.addEventListener('click', aboutRefOpen);

  function aboutRefOpen(event) {
    if (event.target.nodeName !== 'A') {
      return;
    }
    toggleModal();
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();
