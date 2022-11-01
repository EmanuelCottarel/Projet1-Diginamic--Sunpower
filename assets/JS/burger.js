//JS Burger menu


//Récupération des éléments dans le DOM
const burgerMenu = document.querySelector('#burger-menu');

const overlay = document.querySelector('#menu');


//Evenement onclick pour ouvrir et fermer le burger menu
burgerMenu.onclick= function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
};