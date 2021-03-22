// Esta clase modal nos servira para poder lanzar las ventanas emergentes que tengamos en nuestra pagina web como por ejemplo en la pestaña de registrar al oprimir el boton de geolocalizacion nos lanzara una ventana emergente en el cual contiene el mapa.

//modal
const open = document.getElementById('button-location');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('cancel');
const ok = document.getElementById('accept');

open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

ok.addEventListener('click', () => {
  modal_container.classList.remove('show');
  document.getElementById('txtLocationPet').value=locationPet;
});