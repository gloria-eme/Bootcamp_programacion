//at

const array1 = [1, 5, 7, 12];

const index1 = 3;
console.log(array1.at(index1))

console.log(array1[3])
//ambos devuelven lo mismo: 12





/*
//object.entries transforma un objeto en un array de array

const object = {
    a:"eso",
    b: "aquello",
}
console.log (object);

console.log(Object.entries(object));

//para iterar los objetos es a través de un for in

/* el for of recorre el array genérico [...] -> destructurin
0 iterarion --> [a, 50]
1 iteration --> [b, 85]
destructurin para 0: [position0, position1] -> [a, 50]
destructurin para 1: [position0, position1] -> [b, 85]

for (const [position0, position1] of object.entries(object)) {
    console.log(`${position0}: ${position1}`)
}

*/