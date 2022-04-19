// FICHIER JS EXTERNE - TYPES DE DONNEE - SEMA

/* =================================== TYPE PRIMITIF : STRING (chaine de caractère) ================================= */

let presentation = 'Je m\'appelle Michael.';

document.getElementById('p1').innerHTML = 'Le type de données pour la variable presentation = ' + typeof presentation;
// On affiche le type de données dans la page HTML. 



/* =================================== TYPE PRIMITIF : NUMBER (nombre) ======================================= */

let age = 25;

document.getElementById('p2').innerHTML = 'Le type de données pour la variable age = ' + typeof age;
// On affiche le type de données dans la page HTML. 

let y = -20000;
let z = 3.14;

console.log(z);
console.log (typeof z, z); 
// On peut passer deux arguments dans la console. 

/* =============================== TYPE PRIMITIF : BOOLEAN TRUE (vrai) / FALSE (faux) ============================= */

let test = 8 > 4;
console.log(typeof test, test);

/* =============================================== TYPE PRIMITIF : NULL ========================================= */

let nul = null;
console.log(typeof nul);

document.getElementById('p5').innerHTML = 'Le type de la variable nul est : ' + typeof nul;

/* =============================================== TYPE PRIMITIF : UNDEFINED ========================================= */
let indefini;
document.getElementById('p6').innerHTML = 'Le type de la variable indefini est : ' + typeof indefini;