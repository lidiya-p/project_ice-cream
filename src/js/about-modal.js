
  
const openAboutModal = document.querySelector('.about__button');

const aboutModal = document.querySelector('.about__backdrop');
  

  openAboutModal.addEventListener("click", onOpenModal);

aboutModal.addEventListener('click', onBackdropClick);

function onOpenModal() {
  aboutModal.classList.remove('about__backdrop--is-hidden')
};


function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
aboutModal.classList.add('about__backdrop--is-hidden')
  }
  
};

