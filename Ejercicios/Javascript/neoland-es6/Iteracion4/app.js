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

	let mapName2 = users2.map ((user) => {
		if (user.name.charAt(0) === "A") {
		return (user.name = "Anacleto");
	}
		return user.name;
	});
		console.log(mapName2);


//4.3
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

let newArray = []
for (let city of cities) {
	if (city.isVisited === true) {
		newArray.push(city.name + ": Visited")
	} else {
		newArray.push(city.name)
	}
};
console.log(newArray)
//no he sido capaz de hacerlo con .map y modificar el array que se crea con la condicional para modificar el valor determinado
