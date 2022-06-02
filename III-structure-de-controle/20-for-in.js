// 20 - STRUCTURE DE CONTROLE - FOR IN - SEMA

const person = {
    name: 'Sema',
    age: 30
};

for (let key in person) {
    console.log(key, person[key]);
}

const colors = ['vert','rouge','noir'];

for (let index in colors) {
    console.log(index, colors[index]);
}