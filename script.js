function inverseMot(mot) {
  const motPropre = mot.trim();
  let motInverse = "";
  //console.log(motPropre);     //chat

  for (let i = motPropre.length - 1; i >= 0; i--) {
    motInverse += motPropre[i];
    //console.log(motInverse);       //t
  }
  return motInverse;
}
//console.log(inverseMot("kayak"));

function estPalindrome(mot) {
  const motRetourne = inverseMot(mot);

  if (motRetourne === mot) {
    return "C'est un palindrome !";
    //console.log("C'est un palindrome !")
  } else {
    //console.log("Ce n'est pas un palindrome !")
    return "Ce n'est pas un palindrome !";
  }
}
//console.log(estPalindrome("kayak"));

const champ = document.getElementById("user-word");
const bouton = document.getElementById("validate-button");
const resultat = document.getElementById("result");

bouton.addEventListener("click", function () {
  const motTape = champ.value;
  const phrase = estPalindrome(motTape);
  resultat.textContent = phrase;
});
