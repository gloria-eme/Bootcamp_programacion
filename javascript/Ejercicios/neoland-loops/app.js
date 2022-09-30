//Iteración 1

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
const word1sWithWord = (array, word) => {
    for (let valor of array) {
        if (valor.includes(word)) {
        console.log(valor);
        }}
}
console.log(word1sWithWord(products, "Camiseta"))

//Iteración 

// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved***
//  a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***. 
// ( **Mirar abajo en pistas** ).
// Puedes usar este array para probar tu función:

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

//Iteración 3

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
for (let place of placesToTravel) {
    console.log(place);
}

//Iteración 4

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for (let key in alien) {
    console.log(key, alien[key]);
}

//Iteración 5
// Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.
//  Imprime en un console log el array. Puedes usar este array:
const placesToTravel2 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for (let places of placesToTravel2) {
    if (placesToTravel2.filter((places) => places.id ===11)) {
        placesToTravel2.pop(places)
    }
    console.log(placesToTravel2)  
}
//por terminar
