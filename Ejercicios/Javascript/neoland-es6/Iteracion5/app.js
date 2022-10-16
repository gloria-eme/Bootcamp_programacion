//5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let overNumber = ages.filter(age => age >= 18);
console.log(overNumber);


//5.2
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let pairNumbers = ages2.filter(age => age%2 == 0);
console.log(pairNumbers);

//5.3
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let filterItems = streamers.filter (streamer => 
	streamer.gameMorePlayed=='League of Legends');

console.log(filterItems);

//5.4
let filterLetter = streamers.filter (streamer => 
	streamer.name.includes("u"));

console.log (filterLetter);

//5.5
let filterCaracter = streamers.filter ((streamer) => {
	return streamer.gameMorePlayed.includes("Legends");
	})
for (let streamer of filterCaracter) {
		if (streamer.age > 35) {
		streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
	}}
	
console.log(filterCaracter)
	

