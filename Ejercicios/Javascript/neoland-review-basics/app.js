//Iteración 1
// Dado el siguiente javascript usa forof para recorrer el array de películas, 
// genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías.
// Ten en cuenta que las categorías no deberían repetirse. 
// Para filtrar las categorías puedes ayudarte de la función .includes()

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']}]
   
let Categories = [];   
 let mapMovies = movies.map((movie) => movie.categories);

for (let movie of movies) {
    for (let categorie of movie.categories) {
        if(Categories.includes(categorie)===false) {
             Categories.push(categorie);
    }}
}
    console.log(Categories);
    

//Iteración 2
// Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

const volumes = [];

    for (let user of users) {
       for (let waves in user.favoritesSounds) {
        volumes.push(user.favoritesSounds[waves].volume);
       }};
    
    const promed = (array) => {
        let sum = 0;
        for (let num of array) {
            sum += num;
        }
        return sum/array.length;
    }
   
    
console.log(promed(volumes))
 

//Iteracion 3
const users2 = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

const countSounds = [];
for (let user of users2) {
    for (let sound in user.favoritesSounds) {
        if (countSounds[sound]== null) {
            countSounds[sound] = 1 }
        else  {
            countSounds[sound] += countSounds[sound] 
        }}
}console.log(countSounds)

//Iteracion 4
const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
    for (let element of array) {
        if (text === element) {
        return array.indexOf(element)
    }}
};

console.log(findArrayIndex(animals, "Mosquito"));
console.log(findArrayIndex(animals, "Salamandra"));

//Iteracion 5

const rollDice = (max) => {
    const min = 1;
    return Math.floor(Math.random()* max) +1
};
console.log(rollDice(8));

//Iteracion 6
const colours = ['amarillo', 'verde', 'azul', 'morado', 'negro']

const swap = (array, param1, param2) => {
const changeParam = [];
  for (let element of array) {
   if (element !== array[param1] && element !== array[param2]) {
    changeParam.push(element)
   } else if (element == array[param1]) {
    changeParam.push(array[param2])
   } else if (element == array[param2]) {
    changeParam.push(array[param1])
   }}
   return changeParam
}
console.log(swap(colours, 3, 4 ))

// const swap = (array, param1, param2) => {
//     let position1 = array.indexOf(param1)
//     let position2 = array.indexOf(param2)
//     for (let item of array) {
//         if (param1 = array.item) {
//             changeParam.splice(position1,1,param2)
//         }
//         if (param2 == array.item) {
//             changeParam.splice(position2,1,param1)
//         }}
//  }