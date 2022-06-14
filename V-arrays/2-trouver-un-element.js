// V - ARRAYS - TROUVER UN ELEMENT DANS UN TABLEAU - SEMA

/* ============================== TROUVER UN ELEMENT : TYPE PRIMITIF ============================= */

const numbers = [1, 2, 3, 4, 2, 5, 6]; 

console.log(numbers.indexOf(5));
//indexOf sert a rechercher une element dans un tableau par son indice.

console.log(numbers.indexOf(2));

console.log(numbers.lastIndexOf(2));
//Sert à savoir le dernier indice de l'element dans un tableau.

console.log(numbers.includes(1));
//Sert à savoir si un élément existe réellement dans un tableau. 


/* ============================== TROUVER UN ELEMENT : REFERENCE TYPE ============================= */

const courses = [
    {id: 1, name: 'Lala'},
    {id: 2, name: 'Toto'},
];
console.log(courses);

const course = courses.find(function(course) {
    return course.name === 'Lala';
});
console.log(course);

const course2 = courses.findIndex(function(course) {
    return course.name === 'Lala';
});
console.log(course2);
