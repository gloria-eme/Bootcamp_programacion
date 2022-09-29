//Iteración 1
function sum(numberOne , numberTwo) {
    if (numberOne>numberTwo) {
        console.log(numberOne)
    } else if (numberTwo>numberOne) {
        console.log(numberTwo)
    }
    else {
        console.log(`parece que ${numberOne} y ${numberTwo} son iguales`)
    }}
  
sum (4, 4)

//Iteración 2
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

const findLongestWord = (array) => {
    let theLongestWord ="";
    for (item of array) {
        if (item.length > theLongestWord.length) {
            theLongestWord = item;
        } else if (item.length==theLongestWord.length) {
            theLongestWord!=theLongestWord;
        }}
    return (theLongestWord)
}
let longesitem = findLongestWord(avengers);
console.log(longesitem)

//Iteración 3

const numbers = [1, 2, 3, 5, 45, 37, 58];

const sumAll = (numbers) => {
    let sum = 0;
    for (number of numbers) 
        sum += number;
    
    /*con el for tradicional
    let sum = 0;
    for (let i=0; i<param.length; i++) {
    sum += param[i];
    }*/
    return(sum) 
}
let theSum = sumAll(numbers);
console.log(theSum);

//Iteración 4
const numbers2 = [12, 21, 38, 5, 45, 37, 6];
const average = (numbers) => {
    let sum = 0;
    for (number of numbers) {
        sum += number;
    } 
    let promed = sum/numbers.length;
    return promed;
} 
let thePromed = average(numbers2);
console.log(thePromed);

//Iteración 5
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

const averageWord = (array) => {
    let finalNumber = 0;  
    for (let item of array) {
        if (typeof(item)==="number") {
            finalNumber  += item;
        }
        else {
            finalNumber += item.length;
        }}  
    return finalNumber;
}
console.log(averageWord(mixedElements));

//Iteración 6
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

const removeDuplicates = (param) => {
    let noDuplicates = [];
    for (let word of param) {
        if (noDuplicates.includes(word)==false) {
            noDuplicates.push(word);
        }}
        return noDuplicates;
    }
  console.log(removeDuplicates(duplicates))








   


//Iteración 3

//const numbers = [1, 2, 3, 5, 45, 37, 58];

