// 7 - LES FUNCTIONS - SEMA

/* ======================================== A - DECLARATION D'UNE FUNCTION ======================================= */

// Function qui sert à réaliser une tâche précise.
function saluer() {
    console.log('Bonjour tout le monde');
}
saluer(); 
// function = je déclare ma function.
// saluer = Je nomme ma fonction avec une signification précise.
// les accolades '{}' contiennent à l'intérieur la tâche à executer. 
// J'appel le nom de ma fonction à l'exterieur des accolades pour quelle s'execute.

/* ======================================== B - MANIPULER UNE FONCTION ======================================= */

function bonjour(name) {
    console.log('Bonjour ' + name);
    // J'utilise la concaténation pour placer le parametre avec ma string.  
}
bonjour('Sema');
// function = je déclare ma function.
// bonjour(name) = Je nomme ma fonction avec une signification précise et lui affecte un parametre.
// les accolades '{}' contiennent à l'intérieur l'ordre à executer.
// bonjour('Sema') = J'appel le nom de ma fonction à l'exterieur des accolades en lui affectant un argument pour quelle puisse me retourner une valeur et s'executer. 

bonjour('Sara');

/* ====================================== C - AJOUTER PLUSIEURS PARAMETRE ===================================== */

// Function qui sert à réaliser une tâche précise.
function presentation(name, lastname) {
    console.log('Salut, je suis ' + name + ' ' + lastname);
}
presentation('Winnie', 'MANDELA');

/* ======================================== D - CALCULER UNE VALEUR ======================================= */

// Function qui sert à calculer des valeurs.
function carre(number) {
    // Je déclare ma function avec le mot-clé 'function', ensuite je nomme ma function 'carre', puis je lui passe un parametre.
    return number * number;
    // Code qui renvoie le calcul de la multiplication
}
console.log(carre(2));
// On verifie dans la console le résultat. 
