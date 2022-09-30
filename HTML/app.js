//recuperando los elementos del DOM
//la vble se convierte en un NODO para almacenar elementos de HTML en JS

//------YA NO SE UTILIZAN-------//
//getElementebyID: se recupera por el nombre del id del HTML (no recupera class, solo id)
const subtitle =document.getElementById("subtitle");
console.log(subtitle);

//getElementbyClassName
const paragraph = document.getElementsByClassName("paragraph");
console.log(paragraph);

//getElementbyTagName: crea una lista con los elementos correspondientes a la etiqueta indicada
const allDivs = document.getElementsByTagName("div");
console.log(allDivs);

//-------ESTOS SON LOS QUE SE USAN SIEMPRE-----//
//querySelector -> recupera un elelento del DOM y dpendiendo de si escribimos .clase,3id o etiqueta, recuperaremos dicho elemento. 
//Si hay varios elementos que se llaman igual (div), cogerá solo el primero
const querySubtitle = document.querySelector("#subtitle");
const queryParagraph = document.querySelector(".paragraph"); 
const firstDiv =document.querySelector("div");

//querySelectorAll --> genera una lista con los elementos de DOM correspondientes, y tb acepta clases, id y etiquetas.
//SI hay varios elementos iguales (div), vale para todos.
const allQueryDivs = document.querySelectorAll("div");

console.log(querySubtitle);  
console.log(queryParagraph);
console.log(firstDiv);
console.log(allQueryDivs);  

//childNodes indica los hijos del elemento
const list =document.querySelector("ul");
const hijasdeList = list.childNodes;
console.log(hijasdeList)

//parentNode indica el nodo padre del elemento


//-------CREANDO NUEVOS ELEMENTOS EN DOM----------//
//createlement crea un nuevo elemento con el tag que especifiquemos
const newH3 = document.createElement("h3")

//appenChild --> al elemento indicado le añadimos un hijo
newH3.appenChild(textH3)
console.log(newH3)


//forma rápida para asignar el texto a los elementos
//innerHTML modifica el HTML interno de los elementos
const htmlDiv =document.querySelector("#container")
htmlDiv.innerHTML = 
    <ul>
        <li>cosa1</li>
        <li>cosa2</li>
        <li>cosa3</li>
    </ul>

//insertBefore --> inserta un elemento antes del padre
document.body.insertBefore(newH3, htmlDiv) ;
//(a,b)-->a es el elemento a insertar y b es el elemento del que va antes
//(poner a(elemento a insertar) antes de b)


//-------MANIPULANDO CLASES--------------//
const titulo = document.querySelector("#cabecera");

//añadir una clase o varias si no existe
titulo.classList.add("rojo", "subrayado");

//eliminar
titulo.classList.remove("rojo");

//Toggle (como darle a un interruptor: si está on se pone off, si está off se pone on)
titulo.classList.toggle("rojo"); //si estaba rojo lo quita, si no está rojo lo pone rojo

//contain --> si existe devuelve true, si no, devuelve false
console.log(titulo.classList.contains("rojo"));

//showsContainer
showsContainer.appenChild

