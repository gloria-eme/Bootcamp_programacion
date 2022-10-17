//6.1
const numbers = [32, 21, 63, 95, 100, 67, 43];

const findNumber = numbers.find(number => number === 100);
console.log(findNumber);


//6.2
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];
const findYear = movies.find(movie => movie.date === 2010);
console.log(findYear);


//6.3
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];
const finder = aliens.find (alien => alien.name ==='Cucushumushu')
    
const finder2 = mutations.find (mutation => mutation.name === "Porompompero");

console.log(finder, finder2)

finder2["name2"] = finder2["name"]

const myMut = new Object();
myMut.mutation = {...finder2, ...finder};
console.log(myMut)


//Iteracion 7
//7.1
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const sumScore = exams.reduce ((acumulator, exam) => acumulator + exam.score, 0);
console.log(sumScore);


//7.2
const sumScore2 = exams.reduce ((acumulator, exam) => {
    return (exam.score > 4) ? acumulator + exam.score : acumulator}, 0);

console.log (sumScore2)


//7.3
const promed = sumScore/exams.length;
console.log(promed);


//Iteracion 8 
//8.1
const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]


let filterGames = videogames.filter (videogame => 
	videogame.genders.includes("RPG"));

console.log(filterGames)

const sumScore3 = videogames.reduce ((acumulator, videogame) => acumulator + videogame.score, 0);
const promedScore = sumScore3/videogames.length

console.log (promedScore)