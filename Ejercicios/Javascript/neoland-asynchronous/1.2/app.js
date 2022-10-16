//1.2
const btn = document.querySelector('button');
const input = document.querySelector('input'); 


const baseUrl = 'https://api.nationalize.io';
const getData = async(param) => {
    const data = await fetch(`${baseUrl}?name=${param}`);
    const dataJSON = await data.json();
    console.log(data);
    return dataJSON;
    }

    const clickEvent =()=>{
        btn.addEventListener ('click', () => {
          const input = document.querySelector('input').value   
          getData(input)
        })
    }
    clickEvent()

   
//1.3
// btn.addEventListener('click', async () => {
//     try {
//         const data = await getData(input.value);
//         console.log(data);
//         for (const countr of data.country) {
//          document.body.innerHTML += `
//          <p>El nombre ${input.value} tiene un ${countr.probability} por ciento de ser
//          de ser ${countr.country_id}</p>
//          ` 
//          }
//       } catch(error){
//          console.log("Error", error)
//       }
//     });
      
//1.4
// btn.addEventListener('click', async () => {
//     try {
//         const data = await getData(input.value);
//         console.log(data);
//         for (const countr of data.country) {
//             // const text = document.createElement ("p");
//         //  const btn2 = document.createElement("button");
//         const bodys = document.querySelector("body")
//         const divv = document.createElement("div")
//             divv.innerHTML += `
//          <button>El nombre ${input.value} tiene un ${countr.probability} por ciento de ser
//          de ser ${countr.country_id}</button>
//          ` 
//          bodys.appendChild(divv)
//          divv.addEventListener("click", ()=> {divv.remove()});
//         };
//       } catch(error){
//          console.log("Error", error)
//       }
//     });