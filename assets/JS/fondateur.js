// Carte des fondateurs 
const Fonda1 = document.querySelector("#fonda1");
const Fonda2 = document.querySelector("#fonda2");
const Fonda3 = document.querySelector("#fonda3");

// Texte des fondateurs
const textFonda1 = document.querySelector("#textFonda1")
const textFonda2 = document.querySelector("#textFonda2")
const textFonda3 = document.querySelector("#textFonda3")

textFonda1.style.display = "none";
textFonda2.style.display = "none";
textFonda3.style.display = "none";

//function

function disparait(textFondaX){
    if(textFondaX.style.display === "block"){
        textFondaX.style.display = "none"
    }else{
        textFondaX.style.display = "block";
    }
}


 

fonda1.onclick = function(){
    disparait(textFonda1);

    textFonda2.style.display = "none";
    textFonda3.style.display = "none";

}

fonda2.onclick = function(){
    disparait(textFonda2);

    textFonda1.style.display = "none";
    textFonda3.style.display = "none";
    
}

fonda3.onclick = function(){
    disparait(textFonda3);
    
    textFonda1.style.display = "none";
    textFonda2.style.display = "none";
    
}






