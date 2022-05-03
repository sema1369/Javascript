// 5 - LES OBJETS - SEMA

/* ======================================== A - LES OBJETS ======================================= */

let prenom = 'Kémi';
let nom = 'Seba';
let age = 40;

let personne = {
    prenom: 'Sema',
    nom: 'Stg',
    age: 27
};
console.log(personne);
// let = Je déclare ma variable,
// personne = Le nom de ma variable, 
// Le signe égal '=' est un opérateur d'affectation,
// Les accolades '{}' indiquent que ma variable devient un objet et quelles contiennent des propriétés (paires de clés: valeurs)
// Chaque clé est une chaîne et les valeurs peuvent être de tout types de données (string, number, boolean etc..)

/* ============================== B - TRAVAILLER L'OBJET AVEC DOT NOTATION ============================= */

personne.nom;
console.log(personne.nom);
// Pour accéder aux données d'un objet on utilise la dot notation (.) = l'objet.lapropriété; 

personne.age = 30;
console.log(personne.age);
// On peut modifier la valeur de la propriété choisis. 

/* ============================== C - TRAVAILLER L'OBJET AVEC BRACKET NOTATION ============================= */

personne['nom'];
console.log(personne.nom);
// Pour accéder aux données d'un objet on peut aussi utiliser la bracket notation [] = l'objet[lapropriété];

personne['nom'] = 'Kama';
console.log(personne.nom);
// On peut modifier la valeur de la propriété choisis.

console.log(personne);
// Les valeurs de mon objet (personne) ont été modifié grace au changements effectué.  