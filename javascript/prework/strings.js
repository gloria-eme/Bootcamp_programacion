//Código ahorro
 //crear vbles de elementos de una variable
const character = {
    name : "Rachel",
    age : 30,
    job : "camarera",
};
const {name, age, job} = character;
console.log (name, age);
console.log(`${name} tiene ${age} años y es ${job}`);
/* Rachel 30
Rachel tiene 30 años y es camarera */

//Spread Operator -> (...vble) saca los elementos de un array de las vbles 
//(como si se quitaran los corchetes de más afuera (si hubiera varios))
const habita = ["cama", "armario", "mesilla"];
const salon = ["sofá", "TV", "mesa", "cojin"];

const casa = [...habita, ...salon];
console.log(casa);
/* Return
'cama',    'armario',
'mesilla', 'sofá',
'TV',      'mesa',
'cojin'  */

//Filter
const people = [
    {name:"Alba", age: 26, city:"Lugo"},
    {name:"Lidia", age: 32, city:"Sevilla"},
    {name:"Nuria", age: 28, city:"Madrid"},
    {name:"Ana", age: 35, city:"Sevilla"}
]
const sevilla = people.filter(people => people.city === "Sevilla")
console.log(sevilla);
const over30 = people.filter(people => people.age > 30);
console.log(over30);