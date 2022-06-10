// 5 - OBJETS - ClONER UN OBJET - SEMA

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = {...circle};
// Je clone mon objet circle a l'interieur de ma constante 'another' grace au trois petits points. 

console.log(another);
// J'affiche le resultat dans ma log. 