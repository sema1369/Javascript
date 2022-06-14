// V - ARRAYS - ADDING ELEMENTS IN ARRAY - SEMA

/* ======================================== METHODE D'AJOUT ======================================= */

const numbers = [3, 4]; 

console.log(numbers);

// Ajouter un élément à la FIN d'un tableau

numbers.push(5, 6);

console.log(numbers);

// Ajouter un élément au DEBUT d'un tableau

numbers.unshift(1, 2);

console.log(numbers);

// Ajouter un élément au MILIEU d'un tableau

numbers.splice(2, 0, 'a', 'b');
console.log(numbers);