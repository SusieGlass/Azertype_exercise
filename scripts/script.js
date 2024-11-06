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
  let boutonValidation = document.getElementById("btnValiderMot");
  let inputEcriture = document.getElementById("inputEcriture");


  afficherPropositions(listMots[i]);

  boutonValidation.addEventListener("click", () =>{
  console.log(inputEcriture.value);
  if(listMots[i] === inputEcriture.value){
    score++;
  }
  i++;
  afficherResultat(score, i);
  inputEcriture.value = "";

  if(listMots[i] === undefined){
    afficherPropositions("Le jeu est fini");
    boutonValidation.disabled = true;
  }else{
    afficherPropositions(listMots[i]);
  }

  });

  afficherResultat(score, i);

}
