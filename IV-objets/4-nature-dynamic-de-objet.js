// 4 - OBJETS - NATURE DYNAMIC DE L'OBJET - SEMA

const circle = {
    radius: 1
};

circle.color = 'bleu';
circle.draw = function () {};

delete circle.color;
// Delete supprime un élément du tableau

delete circle.draw;

console.log(circle);

