const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-open-btn');
const modalBtnClose = document.querySelector('.modal-close-btn');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);