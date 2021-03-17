const back = document.getElementById('button-back');

back.addEventListener('click', () => {
  modal_container.classList.remove('show');
  doOpen('table.html');
});

function doOpen(url) {
  document.location.target = "_blank";
  document.location.href = url;
}
