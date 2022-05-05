// 14 - INVERSER LES VARIABLES - SEMA

let a = 'rouge';
let b = 'bleu'; 
console.log(a);
console.log(b);

// Exercie : 
// Dans la console.log la valeur 'rouge' apparait avant la 'bleu'. 
// Faites en sortes que la valeur 'bleu' apparaisse avant la 'rouge'. 

let c = a;
a = b; 
b = c; 
console.log(a);
console.log(b);

// Solution : 
// 1 - Je cree une nouvelle variable 
// 2 - Je lui affecte la valeur de a (donc 'rouge'), 
// 3 - Je reafecte la valeur de a en b (donc 'bleu'),
// 4 - Je reafecte la valeur de b en c (donc 'rouge'). 


