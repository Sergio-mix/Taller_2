//Selector
addEventListener("DOMContentLoaded", () => {
  const btn_menu = document.querySelector('.btn_menu');
  if(btn_menu){
      btn_menu.addEventListener('click', () =>{
        const menu_items = document.querySelector('.menu_items');
        menu_items.classList.toggle('show')
      })
  }
});


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

  
