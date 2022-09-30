/*/let elements = ["a", "b", "c", "d"];

//for (let index=0; index < elements.length; index++) {
   // console.log(index);
  //  console.log(elements[index])
//}

const alimentos = ["pan", "agua", "tortilla", "galletas"];


for (let index = 0; index < alimentos.length; index++) {
    const alimento = alimentos[index];
   // console.log(alimento);
} */

function iterateArrays(list) {
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        console.log(element, index);
    }
}
iterateArrays("gloria")

//foreach -> devuelve cada valor
const alumnos = ["Daniel", "Laura", "Javi"]
//no arrow
alumnos.forEach(
    function (element) {
        console.log("Buenas tardes ", element)
    })
//arrow
alumnos.forEach(element => console.log("Buenas tardes ", element));

alumnos.forEach((alumno, i) => {
    console.log(`Buenas tardes ${alumno} #${i}`);
  });

//for in
// con objeto
let batman= {
    nombre: "Bruce",
    apellidos: "Wayne", 
    localizacion: "Gotham"
}
for (let key in batman) {
    console.log("Batman tiene la clave: " + key + " con valor: " + batman[key]);
}
//return
//Batman tiene la clave nombre con valor: Bruce
//Batman tiene la clave apellidos con valor: Wayne
//Batman tiene la clave localizacion con valor: Gotham
//Batman tiene la clave profesion con valor: Multimillonario