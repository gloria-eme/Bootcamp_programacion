//Iteración 1

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
const word1sWithWord = (array, word) => {
    for (let valor of array) {
        if (valor.includes(word)) {
        console.log(valor);
        }}
}
console.log(word1sWithWord(products, "Camiseta"))

//Iteración 2

// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved***
//  a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***. 
// ( **Mirar abajo en pistas** ).
// Puedes usar este array para probar tu función:

alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumns.forEach((alumns) => {    
    if ((alumns.T1 === true && alumns.T2 === true) ||
            (alumns.T1 === true && alumns.T3 === true) ||
            (alumns.T2 === true && alumns.T3 === true)) {
                alumns.isApproved = true
        } else {
            alumns.isApproved = false;   
}console.log (alumns)
})

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
const placesToTravel2 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

const filterplaces = placesToTravel2.filter((place) => (place.id !== 11) && (place.id !==44));
console.log(filterplaces);
//no he sabido sacarlo con for, pero me ha salido con filter

//Iteración 6

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

let toysNoCat= [];
for (let toy of toys) {
    if (toy.name.includes("gato")===false) {
        toysNoCat.push(toy);
    }
} console.log(toysNoCat);

//Iteración 7

const popularToys = [];
const toys2 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

for (let toy of toys2) {
    if (toy.sellCount > 15) {
        popularToys.push(toy);
    }
} console.log(popularToys);

    




