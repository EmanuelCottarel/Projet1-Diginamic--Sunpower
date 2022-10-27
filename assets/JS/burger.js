const burgerMenu = document.querySelector('#burger-menu');

const overlay = document.querySelector('#menu');

burgerMenu.onclick= function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
};