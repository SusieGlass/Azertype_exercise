/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/


function afficherResultat(score, nbMots){
      // Afficher le score
      let spanScore = document.querySelector(".zoneScore span");
      let affichageScore = `Votre score est de : ${score} / ${nbMots}`;
      spanScore.innerText = affichageScore;
      console.log("Votre score est de : " + score + " sur " + nbMots);
}

function afficherPropositions(proposition){
  let zoneProposition = document.querySelector(".zoneProposition");
  zoneProposition.innerText = proposition;
}

/**
 * Cette fonction construit et affiche l'email.
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score.
 */
function afficherEmail(nom, email, score) {
  let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
  location.href = mailto
}

function lancerJeu(){
  initAddEventListenerPopup()
  let score = 0;
  let nbMots = 0;
  let i = 0;
  let listeProposition = listMots
  let boutonValidation = document.getElementById("btnValiderMot");
  let inputEcriture = document.getElementById("inputEcriture");


  afficherPropositions(listeProposition[i]);

  boutonValidation.addEventListener("click", () =>{
  console.log(inputEcriture.value);
  if(listeProposition[i] === inputEcriture.value){
    score++;
  }
  i++;
  afficherResultat(score, i);
  inputEcriture.value = "";

  if(listeProposition[i] === undefined){
    afficherPropositions("Le jeu est fini");
    boutonValidation.disabled = true;
  }else{
    afficherPropositions(listeProposition[i]);
  }

  });

  let listBtnRadio = document.querySelectorAll(".optionSource input")
  for (let index = 0; index < listBtnRadio.length; index++) {
    listBtnRadio[index].addEventListener("change", (event) => {
      console.log(event.target.value)
      if (event.target.value === "1"){
        listeProposition = listMots
      } else {
        listeProposition = listPhrases
      }
      afficherPropositions(listeProposition[i])
    })
  }

  let formNoValidate = document.querySelector('form');
  formNoValidate.addEventListener("submit", (event) => {
    event.preventDefault();
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;

    let scoreEmail = `${score} / ${i}`
    afficherEmail(nom, email, scoreEmail)
    console.log(nom, email);

  })

  afficherResultat(score, i);

}
