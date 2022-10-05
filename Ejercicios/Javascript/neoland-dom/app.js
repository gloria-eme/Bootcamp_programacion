//iteración 1

const querySubtitle = document.querySelector(".showme");

const querySubtitle2 = document.querySelector("#pillado");

const allQueryDivs = document.querySelectorAll("p");

const allQueryDivs2 = document.querySelectorAll(".pokemon");

//Iteración 2

//2.1
const newDiv = document.createElement("div");
document.body.appendChild(newDiv);

//2.2
const newDiv2 = document.createElement("div");
newDiv.innerHTML = 
`<div>
    <p>Una p</p>
</div>`;
document.body.appendChild(newDiv2);

//2.3 //for i
const newDiv3 = document.createElement("div");
const pElements = ["p1", "p2", "p3", "p4", "p5", "p6"];
pElements.forEach((element) => {
    newDiv3.innerHTML += `<p>párrafo ${element}</p>`;
});
document.body.appendChild(newDiv3);
console.log(pElements)

//2.4
const newP = document.createElement("p");
newP.innerHTML = "Soy dinámico!";
document.body.appendChild(newP);

//2.5
const h2 = document.querySelector(".fn-insert-here");
h2.innerHTML = 'Wubba Lubba dub dub';

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const liApps = document.createElement("ul");
apps.forEach((element) => {
   liApps.innerHTML += `<li>${element}</li>`;
})
document.body.appendChild(liApps);

//2.7
const pes = document.querySelectorAll(".fn-remove-me");
const body = document.querySelector("body")
    body.removeChild(pes)


//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	//Recuerda que no solo puedes insertar elementos con .appendChild.
const divs = document.querySelectorAll(".fn-insert-here")
