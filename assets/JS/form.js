//SELECTION DES ETAPES
const etape1 = document.querySelector("#number1");
const etape2 = document.querySelector("#number2");
const etape3 = document.querySelector("#number3");

// SELECTION DES FORMULAIRES DANS LE DOM
const form1 = document.querySelector(".contact__choix");
const form2 = document.querySelector(".contact__form--entreprises-syndic");
const form3 = document.querySelector(".contact__form--projet");
const form4 = document.querySelector(".contact__form--particuliers");
const form5 = document.querySelector(".contact__form--question");

//SELECTION DES TITRES DES FORMULAIRES DANS LE DOM
const titreForm1 = document.querySelector("#titreForm1");
const titreForm2 = document.querySelector("#titreForm2");
const titreForm3 = document.querySelector("#titreForm3");

// SELECTION DES BOUTONS DANS LE DOM
const buttonBack = document.querySelector("#button__back");
const buttonBack2 = document.querySelector("#button__back2");
const buttonNext = document.querySelector("#button__next");

//BOUTON SUBMIT
////SUBMIT FORM QUESTION
const buttonSubmit = document.querySelector("#message");
const submitFormParticulier=document.querySelector(".submitFormParticulier");
////SUBMIT FORM ENTREPRISES ET COLLECTIVITES
const submitFormEntreprise=document.querySelector(".submitFormEntreprise");


// SELECTION DES CHOIX SUR LE FORMULAIRE 1
const choixEntreprise = document.querySelector("#choixEntreprise");
const choixSyndicats = document.querySelector("#choixSyndicats");
const choixParticuliers = document.querySelector("#choixParticuliers");

// SELECTION DU MESSAGE DANS LE DOM
const msgSuccess = document.querySelector("#msg_success");

// LES FORMULAIRES, LES BOUTONS ET LE MESSAGE SONT MASQUES PAR DEFAUT
///Si le JS n'est pas executé, les éléments sont affichés par défaut et le formulaire peut toujour etre rempli

form2.style.display = "none";
form3.style.display = "none";
form4.style.display = "none";
form5.style.display = "none";

titreForm2.style.display = "none";
titreForm3.style.display = "none";

buttonBack.style.display = "none";
buttonNext.style.display = "none";
buttonSubmit.style.display = "none";
submitFormParticulier.style.display = "none";
submitFormEntreprise.style.display = "none";


msgSuccess.style.display = "none";


// FONCTIONS

//FONCTION QUI PERMET D'AFFICHER LES BOUTONS SUIVANTS ET PRECEDENTS

function afficherBouton() {
  buttonBack.style.display = "block";
  buttonNext.style.display = "block";
}


//Fonction permettant de changer les pages du formulaire. 
function changePage() {
    if (whichForm === 1) {                            
      form1.style.display = "flex";
      form2.style.display = "none";
      form3.style.display = "none";
      form4.style.display = "none";
      form5.style.display = "none";
  
      buttonBack.style.display = "none";
      buttonNext.style.display = "none";
      submitFormEntreprise.style.display = "none";
      submitFormParticulier.style.display = "none";
      
      titreForm1.innerHTML="Qui êtes-vous?";
      
    } else if (whichForm === 2) {
      form1.style.display = "none";
      form2.style.display = "flex";
      form3.style.display = "none";
      form4.style.display = "none";
      form5.style.display = "none";
  
      afficherBouton();
      submitFormParticulier.style.display = "none";
      submitFormEntreprise.style.display = "none";
      
      titreForm1.innerHTML="Donnez nous quelques informations sur vous";
      
      
    } else if (whichForm === 3) {
      form1.style.display = "none";
      form2.style.display = "none";
      form3.style.display = "flex";
      form4.style.display = "none";
      form5.style.display = "none";
  
      buttonBack.style.display = "block";
      buttonNext.style.display = "none";
      submitFormEntreprise.style.display = "block";
      submitFormParticulier.style.display = "none";
      
      
      
      titreForm1.innerHTML="Parlez nous de votre projet";
      
    } else if (whichForm === 4) {
      form1.style.display = "none";
      form2.style.display = "none";
      form3.style.display = "none";
      form4.style.display = "flex";
      form5.style.display = "none";
  
      afficherBouton();
      buttonBack.onclick = function () {
        whichForm = 1;
        changePage();
        changeCouleurEtape()
      };
      
       titreForm1.innerHTML="Donnez nous quelques informations sur vous";
      submitFormParticulier.style.display = "none";
      
    } else if (whichForm === 5) {
      form1.style.display = "none";
      form2.style.display = "none";
      form3.style.display = "none";
      form4.style.display = "none";
      form5.style.display = "flex";
  
      afficherBouton();
      buttonBack.onclick = function () {
        whichForm = 4;
        changePage();
        changeCouleurEtape()
      };
      
      
      buttonNext.style.display = "none";
      submitFormParticulier.style.display = "block";
      
      titreForm1.innerHTML="Quelle est votre question?";
     
    }
    
    console.log(whichForm)
  }
  
  //Fonction permettant de changer la couleur des numéros
  function changeCouleurEtape(){
  if(whichForm===1){
      etape1.style.backgroundColor = "#94dc1f";
      etape1.style.borderColor = "#94dc1f";
    
      etape2.style.backgroundColor = "#fff";
      etape2.style.borderColor = "#000";
    
      etape3.style.backgroundColor = "#fff";
      etape3.style.borderColor = "#000";
        
  }else if(whichForm===2 || whichForm===4){
      etape1.style.backgroundColor = "#fff";
      etape1.style.borderColor = "#000";
    
      etape2.style.backgroundColor = "#94dc1f";
      etape2.style.borderColor = "#94dc1f";
    
      etape3.style.backgroundColor = "#fff";
      etape3.style.borderColor = "#000";
      
     
  }else if(whichForm===3 || whichForm===5){
      etape1.style.backgroundColor = "#fff";
      etape1.style.borderColor = "#000";
    
      etape2.style.backgroundColor = "#fff";
      etape2.style.borderColor = "#000";
    
      etape3.style.backgroundColor = "#94dc1f";
      etape3.style.borderColor = "#94dc1f";
      
     
  }
  }


// WhichForm permet de définir à quelle étape du formulaire on se trouve. Elle est incrémentée quand on apsse à l'étape suivante 
let whichForm = 1;

changeCouleurEtape()


//EVENEMENTS ONCLICK

//Au clic sur le bouton "Suivant", whichForm est incrémenté de 1, l'étape suivante du formulaire s'affiche
buttonNext.onclick = function () {
  whichForm++;
  console.log(whichForm);
  changePage();
  changeCouleurEtape();
};

//Au clic sur le bouton "Entreprise", whichForm est incrémenté de 1, l'étape suivante du formulaire s'affiche
choixEntreprise.onclick = function () {
  whichForm++;
  console.log(whichForm);
  changePage();
  changeCouleurEtape();
};

//Au clic sur le bouton "Syndicats", whichForm est incrémenté de 1, l'étape suivante du formulaire s'affiche
choixSyndicats.onclick = function () {
  whichForm++;
  console.log(whichForm);
  changePage();
  changeCouleurEtape();
};

//Au clic sur le bouton "Je veux juste poser une question", whichForm prend la valeur 4, ce qui correspond à la 2e page du formulaire Questions
choixParticuliers.onclick = function () {
  whichForm = 4;
  console.log(whichForm);
  changePage();
  changeCouleurEtape();
};

//Au clic sur le bouton "Suivant", whichForm est décrémenté de 1, l'étape précédente du formulaire s'affiche
buttonBack.onclick = function () {
  whichForm--;
  console.log(whichForm);
  changePage();
  changeCouleurEtape();
};









// Bouton envoyer qui envoi un mail à l'utilisateur

// const onSubmit = (data, r) =>{
//     alert('Merci pour votre message, il sera traité au plus vite');
//     const templateId = 'template_55hpl2b';
//     const serviceId = 'service_kh5s0pb';
//     sendFeedback(serviceId, templateId, {
//         from_surname: data.from_surname,
//         from_name: data.from_name,
//         contact_email: data.contact_email,
//         from_phone: data.from_phone,
//         message: data.message,
//         reply_to: r.target.reset(),
//     });
// };

// const sendFeedback = (serviceId, templateId, variables) =>{
//     emailjs.send(serviceId, templateId, variables,"DwZJ4WwVhTbkusxOt").then((res)=> {
//         console.log('success')
//     })
//     .catch((err)=> console.error('Il y a une erreur'));
// }


// function sendMail(params){
//     let tempParams = {
//         from_surname: document.getElementById("fromSurname").value,
//         from_name: document.getElementById("fromname").value,
//         contact_email: document.getElementById("fromEmail").value,
//         from_phone: document.getElementById("fromphone").value,
//         message:document.getElementById("message").value
//     }

//     emailjs.send('service_kh5s0pb', 'template_55hpl2b', tempParams).then(function(res){
//         console.log("success: ", res.status);

//         if (res.status === 500){
//             msgSuccess = document.getElementById('msg_success');
//             msgSuccess.setAttribute("style", "display : block"); 
//             setTimeout(() =>{
//                 msgSuccess.setAttribute("style", "display : none");
//             }, 5000);
//         }
//     })
// }





