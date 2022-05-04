// 13 - PRECEDENCE DES OPERATIONS - SEMA

let x = 2 + 3 * 4; 
console.log(x);
// Le calcul commencera par la multiplication. 

x = (2 + 3) * 4;
console.log(x);
// Le calcul commencera par la parenthèse. 

let h = 1 - 2 - 3; 
console.log(h);
// le calcul commencera de gauche à droite

let j = 1 + 4 - 5;
console.log(j);

let k = 2 ** 3 ** 2;
console.log(k); 


