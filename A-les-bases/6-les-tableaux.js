// 6 - LES TABLEAUX (ARRAYS) - SEMA

/* ======================================== A - LES TABLEAUX (ARRAYS)======================================= */

let couleurSelectionne = [
    'rouge',
    'noir'
];
console.log(couleurSelectionne);
// let = Je declare ma variable
// couleurSelectionne = Le nom de ma variable 
// Les crochets '[]' contiennent les éléments de mon array

/* ============================== B - ACCEDER AU TABLEAU (ARRAY) PAR SON INDICE ============================= */

console.log(couleurSelectionne[0]);
// Chaque éléments possède un indice démarrant à 0 (voir console.log), par lequel on accède. 

/* =========================== C - AJOUTER UN ELEMENT AU TABLEAU (ARRAY) PAR SON INDICE ========================== */

couleurSelectionne[2] = 'vert';
console.log(couleurSelectionne);
// Un nouveau élément (vert) à été ajouté a mon array. 

/* ======================================== D - LA PROPRIETE LENGTH ======================================= */

let vips = [
    'Ronaldinho',
    'Pele',
    'Ronaldo',
    'Adriano'
];
console.log(vips);

let nombreDeVips = vips.length;
console.log(nombreDeVips);
// La propriété length permet de savoir le nombre d'élément contenu dans mon array. 

/* ======================================== E - LA METHODE PUSH ============================================ */

vips.push('Neymar');
console.log(vips);
// La méthode push permet d'ajouter un nouvel élément à la fin de mon array. 

/* ======================================== F - LA METHODE UNSHIFT ========================================= */

vips.unshift('Dida');
console.log(vips);
// La méthode unshift permet d'ajouter un nouvel élément au début de mon array. 

/* =========================================== G - LA METHODE POP ============================================ */

vips.pop();
console.log(vips);
// La méthode pop permet de supprimer le dernier élément de mon array.
