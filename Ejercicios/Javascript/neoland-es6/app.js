//Iteracion1
const letters = (a=10, b=5) => {
    console.log( a + b)
    
}
letters ();
letters(undefined, 6);
letters(3, 4);

//Iteracion2
//2.1
const game = {
    title: 'The last us 2', 
    gender: ['action', 'zombie', 'survival'], 
    year: 2020
}

const {title, gender, year} = game;

console.log(title);
console.log(gender);
console.log(year);

//2.2
const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

//2.3

const animalFunction = () => {
    return {name1: 'Bengal Tiger', race: 'Tiger'}
};
const {name1, race} = animalFunction()

console.log(name1);
console.log(race);

//2.4
const car = {name2: 'Mazda 6', itv: [2015, 2011, 2020] }
const {name2, itv} = car;
const [year1, year2, year3] = itv;

console.log(year1);
console.log(year2);
console.log(year3);

//Iteracion 3
//3.1
const pointsList = [32, 54, 21, 64, 75, 43]
let copyList = [...pointsList];

//3.2
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
let copyToy = {...toy};

//3.3
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const twoPoints = [...pointsList1, ...pointsLis2];

//3.4
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const towToys = {...toy1,...toyUpdate};

//3.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const copyColors = [...colors]
copyColors.splice(2, 1);

console.log(copyColors);

//Iteracion 4
//4.1
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


const mapName = users.map(user => user.name);
console.log(mapName);

//4.2
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const nameUsers1 = () => {
const mapName2 = users.map(user => user.name);
for (let name of mapName) {
    if (name.charAt[0] =="A") {
    mapName2.replace(name, "Anacleto")
}} }
nameUsers1()





