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
        console.log (element, index);
    }
}
iterateArrays("gloria")
