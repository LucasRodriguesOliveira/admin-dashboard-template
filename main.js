const [menu] = document.getElementsByClassName('sidebar');
const [menuButton] = document.getElementsByClassName('menu-button');

menuButton.onclick = () => {
  menu.classList.toggle('active');
}
