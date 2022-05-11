// 12 - OPERATEURS LOGIQUES - SEMA

/* ========================= ET (&&) : RETOURNE TRUE SI LES OPERATEURS SONT VRAIS ======================== */

console.log(true && true); 
// Retourne true car les deux opérateurs sont vrai. 

console.log(false && true); 
// Retourne false car les deux opérateurs ne sont pas vrai. 

let x = 5;
console.log(x >= 0 && x <= 10); 
// Retourne true car les deux operateur sont vrai : x est >= à 0 et est inférieur à 10.

//Exemple : 
// Le client est éligible à un prêt bancaire uniquement : 
// Si sont revenu est élevé,
// S'il a un taux d'endettement faible, 
// Sinon il n'est pas éligible.  

let revenuEleve = true;
let tauxEndettementFaible = true;
let eligiblePretBancaire = revenuEleve && tauxEndettementFaible;
console.log(eligiblePretBancaire);

/* ================== OU (||) : RETOURNE TRUE SI L'UN DES DEUX OPERATEURS EST VRAI  ================== */

let y = 20;
console.log(y < -10 || y > 10);
// Retoune true car y est > 10. 

y = -20;
console.log(y > -20 || y >= 10); 
// Retourne false car y n'est pas > à -20 ni >= à 10. 

//Exemple : 
// Le client est éligible à un prêt bancaire uniquement : 
// Si sont revenu est élevé,
// Sinon il n'est pas éligible.  

revenuEleve = true;
tauxEndettementFaible = false;
eligiblePretBancaire = revenuEleve || tauxEndettementFaible;
console.log('Eligible', eligiblePretBancaire);


/* ========================= NON (!) : RETOUNRE FALSE SI LES OPERTAEURS SONT VRAIS ======================== */

// ! = NON (ce n'est pas vrai)
let pretRefuse = !eligiblePretBancaire;
console.log('Prêt refusé', pretRefuse);









