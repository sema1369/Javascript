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

/* ======================================== EXERCICE 4 ======================================= */

// Ecrire tout ca dans une fonction : 
// La vitesse limite est de 70 km/h 
// Si la vitesse limite est dépassé de 5km/h rajouter 1 points
// Si Arrivé à 12 points afficher "permis suspendu" 

checkSpeed(130);

function checkSpeed(speed) {
    const speedLimit = 70;
    // Je déclare une variable, je la nomme speedLimit, je lui affecte une valeur "70". 

    const kmhPerPoint = 5; 
    // Je déclare une variable, je la nomme speedLimit, je lui affecte une valeur "5".
    
    if (speed < speedLimit + kmhPerPoint) {
    // Si ma vitesse est inférieur à 70 + 5... 
        console.log('ok');
        // ... Tu m'affiche dans la log 'ok'. 
    } else {
        let points = Math.floor((speed - speedLimit) / kmhPerPoint);
        // Sert à calculer les points
        if (points >= 12) {
        // Si on arrive ou l'on dépasse 12 points...
            console.log('Permis suspendu');
            // Affiche dans la log 'permis suspendu'
        } else {
            console.log('Points', points);
            // Sinon affiche les points
        }
    }
}

/* ======================================== EXERCICE 5 ======================================= */

// Ecrire une fonction :
// Afficher dans la log 10 chiffre
// Afficher Pair pour les chiffre pair et impair pour les chiffres impairs

showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
    // J'initialise ma variable i à 0, Si i est inferieur ou = à limit, tu rajoutes 1 à chaque boucle
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        // Je declare une variable "message", j'utilise un l'operateur ternaire.
        console.log(i, message);
        // J'affiche dans la log le resultat. 
    }
}

/* ======================================== EXERCICE 6 ======================================= */

const movie = {
    title: 'a',
    releaseYear: 2008,
    rating: 4.5, 
    director: 'b'
}; 

// Afficher à l'aide d'une fonction les propriétés qui contiennent une string

showProperties(movie);

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            console.log(key, obj[key]);
        }
    }
}

/* ======================================== EXERCICE 7 ======================================= */

// Ecrire une fonction en affichant des etoiles 

showStars(1);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++) {
            pattern += '*';
            console.log(pattern);
        }
    }
}

