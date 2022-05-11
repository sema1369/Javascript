// 16 - STRUCTURE DE CONTROLE - SWITCH / CASE - SEMA

let role;

switch (role)  {
    case 'invité':
        console.log('utilisateur invité');
        break;
    
    case 'modérateur':
        console.log('utilisateur modérateur');
        break;
    
    default:
        console.log('utilisateur inconnu');
}

// Dans cet exemple n°1 le résultat est utilisateur inconnu, car notre variable n'est pas définie. 

let roleDeux = 'invité';

switch (roleDeux) {
    case 'invité':
        console.log('utilisateur invité');
        break;
    
    case 'modérateur':
        console.log('utilisateur modérateur');
        break;
    
    default:
        console.log('utilisateur inconnu');
}

// Dans cet exemple n°2 le résultat est utilisateur invité, car notre variable est définie. 

if (roleDeux === 'invité') {
    console.log('utilisateur invité');
} else if (roleDeux === 'modérateur') {
    console.log('utilsateur modérateur');
} else {
    console.log('utilisateur inconnu');
}

// Dans cet exemple n°3 nous avons utilisé le if else qui donne le même résultat que le switch. 

