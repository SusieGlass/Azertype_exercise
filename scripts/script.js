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

function lancerJeu(){
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

  afficherResultat(score, i);

}
