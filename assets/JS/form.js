// Formulaire de la page contact.html


//Choix du formulaire
const formProjet = document.querySelector("#containerProjet");
const formQuestion = document.querySelector("#containerQuestion");

const choixFormProjet = document.querySelector("#choixFormulaire1");
const choixFormQuestion = document.querySelector("#choixFormulaire2");

formQuestion.style.display = "none";


// Fonction permettant d'afficher un des formulaire et d'afficher le second selon le choix de l'utilisateur
function QuelFormulaire() {
  if (choixFormProjet.checked) {
    formProjet.style.display = "flex";
    formQuestion.style.display = "none";
  } else if (choixFormQuestion.checked) {
    formQuestion.style.display = "flex";
    formProjet.style.display = "none";
  }
}
choixFormProjet.onclick = function () {
  QuelFormulaire();
};
choixFormQuestion.onclick = function () {
  QuelFormulaire();
};

//Formulaire 1: projets et informations Entreprises, syndicats, copropriétés


// Récupération des éléments du formulaire 1 dans le DOM
const buttonNext = document.querySelector("#buttonNext");
const buttonReturn = document.querySelector("#buttonReturn");
const form = document.querySelector("#formProject");

const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const number3 = document.querySelector("#number3");


//La variable Swipe correspond a l'étape du formulaire à laquelle on se trouve
// etape 1 = 0
// etape 2 = 1
// etape 3 = 2
let swipe = 0;


buttonReturn.style.display = "none";

//Bouton suivant - événement onclick
buttonNext.onclick = function () {
  swipe++;
  goLeft();
  displayButton();
  changeNumber();
};

//Bouton Précedent - événement onclick
buttonReturn.onclick = function () {
  swipe--;
  goRight();
  displayButton();
  changeNumber();
};


//Fonction permettant de changer le numéro d'étape à laquelle on se trouve
function changeNumber() {
  if (swipe === 0) {
    number1.style.backgroundColor = "#94dc1f";
    number1.style.color = "#fff";

    number2.style.backgroundColor = "#fff";
    number2.style.color = "#94dc1f";

    number3.style.backgroundColor = "#fff";
    number3.style.color = "#94dc1f";
  } else if (swipe === 1) {
    number2.style.backgroundColor = "#94dc1f";
    number2.style.color = "#fff";

    number1.style.backgroundColor = "#fff";
    number1.style.color = "#94dc1f";

    number3.style.backgroundColor = "#fff";
    number3.style.color = "#94dc1f";
  } else if (swipe === 2) {
    number3.style.backgroundColor = "#94dc1f";
    number3.style.color = "#fff";

    number2.style.backgroundColor = "#fff";
    number2.style.color = "#94dc1f";

    number1.style.backgroundColor = "#fff";
    number1.style.color = "#94dc1f";
  }
}


//Fonction qui affiche les boutons Suivant et Retour selon l'étape du formulaire
function displayButton() {
  if (swipe === 0) {
    buttonReturn.style.display = "none";
    buttonNext.style.display = "block";
  } else if (swipe === 1) {
    buttonNext.style.display = "block";
    buttonReturn.style.display = "block";
  } else if (swipe === 2) {
    buttonNext.style.display = "none";
    buttonReturn.style.display = "block";
  }
}


//Fonction permettant de décaler le formulaire sur la gauche
function goLeft() {
  if (swipe === 1) {
    form.style.transform = "translate(0)";
  } else if (swipe === 2) {
    form.style.transform = "translate(-215%)";
  }
}

//Fonction permettant de décaler le formulaire sur la droite
function goRight() {
  if (swipe === 1) {
    form.style.transform = "translate(0)";
  } else if (swipe === 0) {
    form.style.transform = "translate(215%)";
  }
}


//Formulaire 2: Questions
//Récupération des éléments du formulaire 2 dans le DOM
const formulaireQuestion = document.querySelector("#formQuestion");

const buttonNextQuestion = document.querySelector("#buttonNextQuestion");
const buttonReturnQuestion = document.querySelector("#buttonReturnQuestion");

const number1Question = document.querySelector("#number1Question");
const number2Question = document.querySelector("#number2Question");


//La variable SwipeQuestion permet de savoir à quelle étape on se trouve sur le formulaire 2
let swipeQuestion = 0;

buttonReturnQuestion.style.display = "none";

//Bouton suivant - événement onclick
buttonNextQuestion.onclick = function () {
  swipeQuestion++;
  goRightQuestion();
  displayButtonQuestion();
  changeNumberQuestion();
};

//Bouton retour - événement onclick
buttonReturnQuestion.onclick = function () {
  swipeQuestion--;
  goLeftQuestion();
  displayButtonQuestion();
  changeNumberQuestion();
};


//Fonction permettant de changer le numéro d'étape à laquelle on se trouve
function changeNumberQuestion() {
  if (swipeQuestion === 0) {
    number1Question.style.backgroundColor = "#94dc1f";
    number1Question.style.color = "#fff";
    number2Question.style.backgroundColor = "#fff";
    number2Question.style.color = "#94dc1f";
     
  } else if (swipeQuestion === 1) {
    number2Question.style.backgroundColor = "#94dc1f";
    number2Question.style.color = "#fff";

    number1Question.style.backgroundColor = "#fff";
    number1Question.style.color = "#94dc1f";
  }
}

//Fonction qui affiche les boutons Suivant et Retour selon l'étape du formulaire
function displayButtonQuestion() {
  if (swipeQuestion === 0) {
    buttonReturnQuestion.style.display = "none";
    buttonNextQuestion.style.display = "block";
  } else if (swipeQuestion === 1) {
    buttonNextQuestion.style.display = "block";
    buttonReturnQuestion.style.display = "block";
  }
}

//Fonction permettant de décaler le formulaire sur la droite
function goRightQuestion() {
  if (swipeQuestion === 1) {
    formulaireQuestion.style.transform = "translate(-108%)";
  }
}

//Fonction permettant de décaler le formulaire sur la gauche
function goLeftQuestion() {
  if (swipeQuestion === 0) {
    formulaireQuestion.style.transform = "translate(108%)";
  }
}


// Validation des champs
pageInit(form);
pageInit(formulaireQuestion);
//add submit event listener to form
function pageInit(formulaire) {
  formulaire.addEventListener("submit", validateForm);
}

function validateForm(e) {
  //Empeche l'envoie normal du formulaire
  e.preventDefault();
  //Retire les messages de validation
  document.querySelectorAll(".msg").forEach((msg) => {
    msg.parentNode.removeChild(msg);
  });
  //Initialisation de la variable valid
  let valid = true;
  //Récuperation dans le DOM des champs de formulaire à vérifier
  let fields = document.querySelectorAll(
    "input[required], select[required], input[maxlength], input[pattern]"
  );
  //Boucle à travers les champs à vérifier
  fields.forEach((field) => {
    if (field.checkValidity()) {
      //Si le champs est valide, on ajoute une class "valid" au champ concerné dans le HTML
      field.className = "valid";
      
    } else {
      //Valid prend la valeur false
      valid = false;
      //Si le champs est invalide, on ajoute une class "invalid" au champ concerné dans le HTML
      field.className = "invalid";
      
      //La variable message prend la veleur de l'attribut "title" du champ concerné
      let message = field.title ? field.title : field.validationMessage;
      //Ajoute un Span contenant le message d'erreur dans le DOM
      field.parentNode.insertAdjacentHTML(
        "beforeend",
        `<span class="msg error-msg">${message}</span>`
      );
    } //Fin if else checkValidity()
  }); //Fin forEach()
  //On envoie le formulaire si la variable valid=true

  if (valid) {
    e.target.submit();
  }
}
