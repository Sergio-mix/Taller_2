//esta es la clase que toma la accion que se halla dado para asi asignarle un evento, y es la que nos va a poder cambiar de paginas dependiendo la seleccion que se haya seleccionado

//Selector
addEventListener("DOMContentLoaded", () => {
    const btn_menu = document.querySelector('.btn_menu');
    if (btn_menu) {
      btn_menu.addEventListener('click', () => {
        const menu_items = document.querySelector('.menu_items');
        menu_items.classList.toggle('show')
      })
    }
  });
  