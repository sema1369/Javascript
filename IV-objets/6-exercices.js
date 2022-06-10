// 6 - OBJETS - EXERCICES - SEMA

// Creer un objet avec la rue, le code postal, la ville. 
// Ensuite creer une fonction qui fait appel au propriete de cet objet. 

let adress = {
// Je crée mon objet. 
    street: ': 3 résidence la lutèce',
    city: ': Rueil Malmaison',
    zipCode: ': 92500'
    // J'affecte à mon objet des proprietes.
};

function showAdresse(adress) {
// Je crée une fonction en mettant en parametre mon objet.
    for (const key in adress) {
    // Je crée une boucle for pour aller chercher dans mon objet les propriétés.
        console.log(key, adress[key]);
        // J'affiche les résultat dans ma log. 
    }
}; 
showAdresse(adress);
// J'appel ma fonction pour qu'elle s'execute. 

/* ======================================== EXERCICE 2 ======================================= */

// Faire la même chose que l'exercice N°1 en utilisant Factory function et constructor function. 

// Factory Function :

let address2 = createAddress('178 avenue du 18 juin 1940', 'Rueil Malmaison', '92500');
// Je crée une variable en affectant des valeurs

function createAddress(street, city, zipCode) {
// Je crée une fonction en mettant en parametre les proprietes que je souhaites.
    return {
        street,
        city,
        zipCode
    };
}
console.log(address2);
// J'affiche le resultat dans ma log.

// Constructor Function : Sert a creer une nouvel objet

let address3 = new Address('5 avenue Sankara', 'Faso', '13691');

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
};
console.log(address3);

/* ======================================== EXERCICE 3 ======================================= */

// Déterminer si les deux adresses sont identiques, 
// si c'est le cas, le resultat retourne vrai sinon Faux. 

let address4 = new Address('10 rue George padmore','kama','10131');
let address5 = new Address('10 rue George padmore','kama','10131');
// Je déclare mes variables en leur affectant des valeurs. 

function Address(street, city, zipCode) {
// Je cree ma fonction (Constructor function)
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
};

function areEqual(address4, address5) {
// Je crée ma fonction pour savoir si les deux adresse sont identique. 
    return address4.street === address5.street &&
    // J'utilise l'opérateur de comparaison 'égal en valeur et en type' puis l'opérateur logique '&&' 
    address4.city === address5.city &&
    address4.zipCode === address5.zipCode
}
console.log(areEqual(address4, address5));

function areSame(address4, address5) {
// Je crée une autre fonction pour savoir s'il sont pareil. 
    return address4 === address5;
    // J'utilise l'opérateur de comparaison 'égal en valeur et en type'
}
console.log(areSame(address4, address5));

/* ======================================== EXERCICE 4 ======================================= */

let blogPost = {
    title: 'loulou',
    body: 'bienvenue dans le monde de loulou',
    author: 'sema',
    views: 10,
    comments: [
        {author : 'kemi', body: 'super'},
        {author : 'Hash', body: 'boloss'}
    ],
    isLive: true
};
console.log(blogPost);

