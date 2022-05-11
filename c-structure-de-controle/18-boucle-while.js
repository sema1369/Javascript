// 18 - STRUCTURE DE CONTROLE - BOUCLE WHILE - SEMA

let i = 0;
console.log(typeof i, i);
// 1 - J'initialise ma variable a 0

while (i < 5) {
// 2 - Je pose une condition : Si i est inférieur à 5 alors execute le bloc d'instruction suivant :
    console.log('Une boucle while', i);
    i++;
    // 3 - Le bloc  d'instruction s'execute s'incremente de 1 a chaque fois jusqu'à arriver a 5
}