//es un espacio de memoria (caja) donde puedo almacenar cualquier elemento

let x="gloria"; //string
    x = 34;
    x = true; //booleano
    x = null; //null
    x = undefined; //undefined
    x = {name: "Gloria", surname:"apellido"};  //Object
    x = [1, 2, 3, 4];  //Array (deriva de la clase Object)

let name = prompt("Cuál es tu nombre?")
let edad = prompt ("Y cuántos años tienes?")
function usuario = [("Entonces te llamas ") + name + ("y tienes ") + edad + (" años")]
console.log(usuario)
