// 1 - OBJETS - BASIQUES - SEMA

/* =============================== OBJECT-ORIENTED PROGRAMMING (OPP)  ============================== */

const circle = {
    // Je crée un bojet que je nomme circle 
    
        radius: 1,
        // Je lui affecte une paires clef-valeur
    
        location: {
        // Je crée un objet à l'intérieur de mon objet que je nomme location et 
            x: 1,
            y: 1  
            // Je lui affecte des paires clefs-valeurs
        },
    
        isVisible: true,
        // J'affecte une paire clef-valeur booléen 
    
        draw: function () {
        // Je crée une function à l'interieur de mon objet circle. 
            console.log('draw');
            // Je lui dit de m'afficher le resultat dans la log. 
        }
    };
    
    circle.draw();
    // J'appel ma function pour quel s'execute.