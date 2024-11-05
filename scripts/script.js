function afficherResultat(score, nbMots){
      // Afficher le score
      let spanScore = document.querySelector(".zoneScore span");
      let affichageScore = `Votre score est de : ${score} / ${nbMots}`;
      spanScore.innerText = affichageScore;
      console.log("Votre score est de : " + score + " sur " + nbMots);
}



function lancerJeu(){
  let score = 0;
  let nbMots = 0;

  afficherResultat(score, nbMots);
}
