//JS page fondateur - Overlays

//Récupération des éléments dans le DOM

const overlayFondateur1 = document.querySelector("#overlayFondateur1");
const overlayFondateur2 = document.querySelector("#overlayFondateur2");
const overlayFondateur3 = document.querySelector("#overlayFondateur3");

overlayFondateur1.style.display="none";
overlayFondateur2.style.display="none";
overlayFondateur3.style.display="none";

const carteFondateur1= document.querySelector("#carteFondateur1");
const carteFondateur2= document.querySelector("#carteFondateur2");
const carteFondateur3= document.querySelector("#carteFondateur3");


// Afficher et masquer les overlays
carteFondateur1.onmouseover= function(){
    overlayFondateur1.style.display="block";
}

carteFondateur1.onmouseout= function(){
    overlayFondateur1.style.display="none";
}

carteFondateur2.onmouseover= function(){
    overlayFondateur2.style.display="block";
}

carteFondateur2.onmouseout= function(){
    overlayFondateur2.style.display="none";
}

carteFondateur3.onmouseover= function(){
    overlayFondateur3.style.display="block";
}

carteFondateur3.onmouseout= function(){
    overlayFondateur3.style.display="none";
}
