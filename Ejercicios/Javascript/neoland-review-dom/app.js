//1.1
const body = document.querySelector("body");
const List = document.createElement("ul");
List.classList.add("countries")

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

for (const country of countries) {
   List.innerHTML += `
    <ul>${country}</ul>
   `
}
body.appendChild(List)


//1.2
const pe = document.querySelector(".fn-remove-me");
pe.remove("fn-remove-me");

//1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const printHere = document.querySelector("[data-function='printHere']");
const lista = document.createElement("ul");
printHere.appendChild(lista);

for (const car of cars) {
    lista.innerHTML += `
     <li>${car}</li>
    `
 }
 

//1.4
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const List3= document.createElement("ul");
List3.classList.add("images");

for (const countrie of countries2) {
    List3.innerHTML += `
    <li>
        <div>
            <h4>${countrie.title}</h4>
            <img src= ${countrie.imgUrl}/>
        </div>
    </li>
    `
}
document.body.appendChild(List3)

//1.5
const btn = document.createElement("button")
// const remove = (ev) => {
//     List3.removeChild(List3.lastChild)
// }
btn.addEventListener("click", (ev) => List3.removeChild(List3.lastChild));
body.appendChild(btn);

//1.6
// const allList = document.querySelectorAll("li");

// for (const list of allList) {
//     const btns = document.createElement("button");
// list.appendChild(btns);
// btns.textContent= "clickame y verás qué hago";
// btns.addEventListener("click", () => btns.parentElement.remove())
// }
const input = document.querySelector("input");

function buscarNombre() {

  const result = streamers.filter((streamer) => {
    if (streamer.name.includes(input.value)) {
       console.log(streamer.name);
      return input.textContent= streamer.name;
    }
  });
}
input.addEventListener("input", buscarNombre);



