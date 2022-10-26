//SELECTION DES ETAPES
const etape1 = document.querySelector("#number1");
const etape2 = document.querySelector("#number2");
const etape3 = document.querySelector("#number3");

// SELECTION DES FORMULAIRES DANS LE DOM
const form1 = document.querySelector(".contact__choix");
const form2 = document.querySelector(".contact__form--entreprises-syndic");
const form3 = document.querySelector(".contact__form--particuliers");
const form4 = document.querySelector(".contact__form--projet");

//SELECTION DES TITRES DES FORMULAIRES DANS LE DOM
const titreForm1 = document.querySelector("#titreForm1");
const titreForm2 = document.querySelector("#titreForm2");
const titreForm3 = document.querySelector("#titreForm3");

// SELECTION DES BOUTONS DANS LE DOM
const buttonBack = document.querySelector("#button__back");
const buttonNext = document.querySelector("#button__next");
const buttonSubmit = document.querySelector("#message");

// SELECTION DU MESSAGE DANS LE DOM
const msgSuccess = document.querySelector("#msg_success")


// LES FORMULAIRES, LES ETAPLES TITRES, LES BOUTONS ET LE MESSAGE SONT MASQUES PAR DEFAUT

form2.style.display = "none";
form3.style.display = "none";
form4.style.display = "none";

titreForm2.style.display = "none";
titreForm3.style.display = "none";

buttonBack.style.display = "none";
buttonNext.style.display = "none";
buttonSubmit.style.display ="none";

msgSuccess.style.display = "none";

// FONCTIONS

    //FONCTION QUI PERMET D'AFFICHER LES BOUTONS SUIVANTS ET PRECEDENTS

    function afficherBouton(){
        buttonBack.style.display = "block";
        buttonNext.style.display = "block"; 
    }

    //FONCTION QUI PERMET DE CHANGER LA COULEUR DES NOMBRES
    //  etapeX = Nombre à afficher en blanc
    //  etapeY = Nombre à afficher en vert
    
    function changerEtape(etapeX, etapeY){
        etapeX.style.backgroundColor = "#fff";
        etapeX.style.borderColor = "#000";

        etapeY.style.backgroundColor = "#94dc1f";
        etapeY.style.borderColor = "#94dc1f";
    }

    //FONCTION QUI PERMET D'AFFICHER UN TITRE ET D'EN MASQUER UN AUTRE
    //  titreFormX = Titre du formulaire à masquer
    //  titreFormY = Titre du formulaire à afficher

    function changerTitre(titreFormX, titreFormY){
        titreFormX.style.display = "none";
        titreFormY.style.display = "block";
    }

    //FONCTION QUI PERMET D'AFFICHER UN FORMULAIRE A LA FOIS
    //FormX = Formulaire à masquer
    //FormY = Formulaire à afficher

    function changerForm(formX, formY){
        formX.style.display = "none";
        formY.style.display = "flex";
        
        
    }


// ON AFFICHE LE FORM2 AU CLIC SUR "ENTREPRISES" OU "SYNDICATS"

const choixEntreprise = document.querySelector("#choixEntreprise");
const choixSyndicats = document.querySelector("#choixSyndicats");


choixEntreprise.onclick = function(){
    changerEtape(etape1, etape2);
    changerTitre(titreForm1, titreForm2);
    changerForm(form1, form2)
    afficherBouton();
}

choixSyndicats.onclick = function(){
    changerEtape(etape1, etape2);
    changerTitre(titreForm1, titreForm2);
    changerForm(form1, form2)
    afficherBouton()
}







// ON AFFICHE LE FORM3 AU CLIC SUR "PARTICULIER"

const choixParticuliers = document.querySelector("#choixParticuliers");

choixParticuliers.onclick = function(){
    changerEtape(etape1, etape2);
    changerTitre(titreForm1, titreForm2);
    changerForm(form1, form3);
    afficherBouton()
    buttonSubmit.style.display = "block";
}







// ON MASQUE LE FORM2 ET ON AFFICHE LE FORM4

buttonNext.onclick = function () {
    changerForm(form2 , form4)
    changerEtape(etape2 , etape3)
}

buttonBack.onclick = function(){
    changerForm(form4 , form2)
    changerEtape(etape3 , etape2)
}




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






// function Verif() {
//     var rempli=0;
//         if(idInput.value==''){rempli++;}
//         if(document.forms['formulaire'].elements['notesB'].value==''){rempli++;}

//       if(rempli==0) {
//             return true;
//         } else {
//             alert('Veuillez remplir tous les champs');
//             return false;
//         }
//     }

// function Verif (){
//     let rempli=0;
//         if (IdInput.value=""){
//             rempli++
            
//         }
        
//         if(rempli > 0){
            
//         }
        
// }