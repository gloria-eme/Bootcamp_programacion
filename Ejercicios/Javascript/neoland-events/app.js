//Iteracion 1
//1.1
const btn = document.querySelector("#btnToClick");
const input1 = document.querySelector(".click")

btn.addEventListener("click", (ev) => console.log(ev));

//1.2
const imput2 = document.querySelector(".focus");

imput2.addEventListener("focus", (ev) => console.log(ev.target.value));


//1.3
// Añade un evento 'input' que ejecute un console.log con el valor del input.
const input3 = document.querySelector(".value");

input3.addEventListener("input", (ev) => console.log(ev.target.value));