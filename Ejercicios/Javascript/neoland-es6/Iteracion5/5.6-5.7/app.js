//5.6
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
;
const inputFilter = streamers.filter ((streamer) => {
	return streamer.name.includes(input.value);
	})

    inputText.addEventListener ('input', () => {
        const inputText = document.querySelector("[data-function='toFilterStreamers']").value;
        console.log(inputFilter)
    })

//5.7
// const btn = document.querySelector("[data-function=toShowFilterStreamers']")
// btn.addEventListener("click", () => )