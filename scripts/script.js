function afficherResultat(score, nbMots){
      // Afficher le score
      let spanScore = document.querySelector(".zoneScore span");
      let affichageScore = `Votre score est de : ${score} / ${nbMots}`;
      spanScore.innerText = affichageScore;
      console.log("Votre score est de : " + score + " sur " + nbMots);
}

function choisirPhrasesOuMot(){
  let choix = prompt("Veuillez saisir mots ou phrases : mots/phrases");
  while(choix !== "mots" && choix !== "phrases"){
    choix = prompt("Veuillez saisir mots ou phrases : mots/phrases");
  }
  return choix;
}

function lancerBoucleDeJeu(listPropositions){
    let score = 0;
    for(let i = 0; i < listPropositions.length; i++){
        let motUtilisateur = prompt("Veuillez saisir le mot : " + listPropositions[i]);
        if(motUtilisateur === listPropositions[i]){
        score++;
    }
  }
      return score;
}

function lancerJeu(){
  let choix = choisirPhrasesOuMot();
  let score = 0;
  let nbMots = 0;

  if(choix === 'mots'){
    score = lancerBoucleDeJeu(listMots);
    nbMots = listMots.length;
  }else{
    score = lancerBoucleDeJeu(listPhrases);
    nbMots = listPhrases.length;
  }

  afficherResultat(score, nbMots);
}
