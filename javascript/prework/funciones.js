//fragmentos de códigos los cuales los encapsulamos bajo un nombre 
 //y podemos usarlo llamando a través de su nombre
function producto (a, b) {
    return a*b;
}
console.log(producto(30, 5));


let myUser = {name: "John", age: 30};
console.log(myUser);  //{ name: 'John', age: 30 }
console.log(JSON.stringify(myUser));  //{"name":"John","age":30}