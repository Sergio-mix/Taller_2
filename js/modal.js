//modal
const open = document.getElementById('boton-ubicacion');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('cancelar');

open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});
