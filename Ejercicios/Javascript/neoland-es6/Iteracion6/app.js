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