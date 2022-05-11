// 19 - STRUCTURE DE CONTROLE - BOUCLE DO WHILE - SEMA

let while1 = 6;
// 1 - J'initialise ma variable a 6

while (while1 < 5) {
// 2 - Je pose une condition : Si i est inférieur à 5 alors execute le bloc d'instruction suivant :
    console.log('Une boucle while', while1);
    while1++;
    // 3 - Le bloc  d'instruction s'execute s'incremente de 1 a chaque fois jusqu'à arriver a 5
}

// Dans cet exemple le résultat ne s'affiche pas dans la console car la condition est false dès le depart donc la boucle s'arrete directement et ne va pas plus loin.

let while2 = 6; 
do {
    console.log('Une boucle do while', while2);
    while2++;
} 
while(while2 < 5);

// Dans cet exemple le résultat affiche le bloc d'instruction qu'une seule fois d'abord puis n'incremente pas car la condition est false. 
// Do while est utilisé peu fréquemment. 