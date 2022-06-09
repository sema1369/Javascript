// 3 - OBJETS - FONCTION DE CONSTRUCTION - SEMA

/* ======================================== Factory function ======================================= */

// Utilise le camelCase notation.
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}
const myCircle = createCircle(1);
console.log(circle);

/* =================================== Constructor Function ================================== */

// Utilise le Pascal notion. Sert à créer une nouvel object. 
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle = new Circle(1);

