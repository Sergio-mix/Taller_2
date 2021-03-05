//modal
const open = document.getElementById('button-location');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('cancel');

open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});