// FICHIER JS EXTERNE - DECLARATION DE VARIABLE - SEMA

/* ======================================== 1) DECLARATION D'UNE VARIABLE ======================================= */

let nombreDeChiens = 4;
// let = Je déclare ma variable 
// nombreDeChiens = Je donne un nom à ma variable
// '=' Le signe égal est un opérateur d'affectation. 
// J'initialise ma variable en lui affectant un nombre = '4' 

console.log(nombreDeChiens);
// console.log permet d'afficher les resultats dans la console du naviguateur

/* ==================================== 2) MODIFICATION DE LA VALEUR D'UNE VARIABLE ================================ */

let nombreDeChats = 2; 
nombreDeChats = 4; 
// Je réaffecte une autre valeur à ma variable. 

console.log(nombreDeChats);

/* ======================================== 3) LES OPERATEURS ARITHMETIQUES ======================================= */

// L'addition  
let totalCDs = 67;
let totalVinyls = 34;
let totalMusic = totalCDs + totalVinyls;
// Pour ajouter deux variables, on utilise le signe " + " 

console.log(totalMusic);

// La soustraction
let cookies = 10;
let cookiesMange = 2;
let totalCookies = cookies - cookiesMange;
// Pour soustraire deux variables, on utilise le signe " - " 

console.log(totalCookies);

// Operateur d'affectation
let poulets = 10; 
// Manger deux poulets
poulets -= 2; 
// Il reste 8 poulets. 
// Ajouter un nouveau lot de 12 poulets.
poulets += 12; 
// Il y a maintenant 20 poulets. 
// Pour ajouter ou soustraire un nombre d'une variable, vous pouvez utiliser les opérateurs   " += " et " -= "

console.log(poulets);

// Incrémentation et décrémentation 
let nombreDeJaime = 10;
nombreDeJaime++;  
// On incrémente de 1, Cela fait 11
nombreDeJaime--; 
// On décrémente de 1, on revient à 10.

console.log(nombreDeJaime);

// Multiplication et division
let coutParProduit = 20;
let nombreDeProduits = 5;
let totalCout = coutParProduit * nombreDeProduits;
// Les opérations de multiplication utilisent le signe " * "

console.log(totalCout);

let CoutMoyenParProduit = totalCout / nombreDeProduits;
// Les opérations de division utilisent le signe " / "

console.log(CoutMoyenParProduit);

// Operateur d'affectation
let nombreDeTables = 2;
nombreDeTables *= 6;  
// nombreDeTables vaut maintenant 2*6 = 12;
nombreDeTables /= 3;  
// nombreDeTables vaut maintenant 12/3 = 4;

console.log(nombreDeTables);

/* ======================================== 4) LES CONSTANTES ======================================= */

const nombrePostParPage = 10;
// nombrePostParPage = 30; 
// Retourne une erreur dans la console car on ne peut pas changer la valeur d'une constante.

console.log(nombrePostParPage);


