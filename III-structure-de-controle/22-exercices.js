// 22 - STRUCTURE DE CONTROLE - EXERCICES - SEMA

/* ======================================== EXERCICE 1 ======================================= */

// Ecris une fonction qui contient 2 nombres et affiche le nombre le plus grand dans la console log. 

let number = max(6, 3); 
// Je decalare ma variable, je lui donne un nom "number", et je lui affecte une valeur "= max(6, 3)"

function max(number1, number2) {
    return (number1 > number2) ? number1 : number2
    // retourne si number1 est superieur a number2 sinon retourne number2
}
// J'utilise un operateur ternaire pour ecrire cette function mais je peut aussi utilier un if. 

console.log(number);
// Je verifie dans le log le resultat

/* ======================================== EXERCICE 2 ======================================= */

// Ecrire une fonction : si l'image a une largeur plus grande que sa hauteur alors affiche true sinon false.

function islandscape(width, height) {
    return (width > height);
    // Retourne automatiquement vrai ou faux.
}
console.log(islandscape(100, 60));

/* ======================================== EXERCICE 3 ======================================= */

// divisible par 3 = fizz
// divisible par 5 = Buzz
// divisible par 3 ou 5 = fizzBuzz 
// not divisible par 3 ou 5 = input

const output = fizzBuzz(7);
console.log(output);

function fizzBuzz(input){
    if (typeof input !== 'number') {
        return NaN;
    }

    if ((input % 3 === 0) && (input % 5 === 0)) {
        return 'FizzBuzz';
    }

    if (input % 3 === 0) {
        return 'Fizz';
    }

    if (input % 5 === 0) {
        return 'Buzz';
    }

    return input;  
}
