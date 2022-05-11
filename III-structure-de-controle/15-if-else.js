// 15 - STRUCTURE DE CONTROLE - IF / ELSE - SEMA

// Structure d'une condition if...else :
/* if (condition) {
    execution
}
else if (autreCondition) {
    execution
}
else if (encoreUneCondition) {
    execution
}
else {
    execution
} */

/* ======================================== EXERCICE ======================================= */
 
// Si l'heure est entre 6am et 12pm executer l'ordre 'C'est le matin'
// Si l'heure est entre 12pm et 18pm executer l'ordre 'C'est l'après-midi'
// Sinon 'C'est le soir'

let heure = 10; 

if (heure >= 6 && heure < 12) {
    console.log("C'est le matin");
}
else if (heure >= 12 && heure < 18) {
    console.log("C'est l'après-midi");
}
else {
    console.log("C'est le soir");
}




