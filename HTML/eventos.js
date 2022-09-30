//EVENTOS -->acciones ejecutadas por el usuarios (click en un botón)
const saludo = () => {
    alert("buenas tardes")
}

//addEventListener --> añadir un evento a una acción que haga el usuario
const div1 = document.querySelector ("div1");

div1.addEventListener("click", (ev) => saludo())
//(a, b)detecta qué evento queremos que haga el usuario(a), y qué cómo queremos que responda la página(b).

//---------Proceso de crear elementos cuando usuario haga un evento-------//
const createBtn =document.createElement("buttom")  //creamos el node de los botones
const themeBtn =document.createElement("buttom")

document.body.classList.add("light"); //añadir al body una class = "light"

createBtn.innerHTML = "Crear elemento"  //lo modificamos en el HTML para que aparezca el " "
themeBtn.innerHTML = "Crear tema"

const createbox = () => {
    const box = document.createElement("div");
    box.classList.add("box")
    document.body.appendChild(box)
}

const changeTheme = () => {
    document.body.classList.toggle("dark")  //si hay una class en body, se cambia por la class dark
}

createBtn.addEventListener("click", (createbox) //hacer que cuando usuario clicke, se ejecute createbox

document.body,appendChild(createBtn)
document.body,appendChild(themeBtn)
createbox()

//TIMEOUTS --> es un evento que ejecuta el código que digamo teniendo en cuenta un tiempo indicado
setTimeout (() => {
    console.log("hola")
}, 2000)

//INTERVALOS --> un evento se va a ejecutar dentro del intervalo
setInterval(() => {
    console.log("esto es un segundo")
}, 1000);

setInterval(() => {     
    segundos = 0;
    segundos++;
    console.log(`Han pasado ${segundos} segundos`)      //saca el texo de forma infinita, habría que decirle cuándo parar
}, 1000);