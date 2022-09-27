//Iteración #1  

    let myFavoriteHero = "Hulk";
    let x = 50;
    let h = 5;
    let y = 10;
    let z = (h + y);

//Iteración #2

    let character = {name: 'Jack Sparrow', age: 10};
    character.age = 25;

    let firstName = 'Jon'; 
    let	lastName = 'Snow'; 
    let age = 24; 
    let presentation = ("Soy " + firstName + " " + lastName + ", tengo " + age + " años y me gustan los lobos.");

    const toy1 = {name: 'Buss myYear', price: 19};
    const toy2 = {name: 'Rallo mcKing', price: 29};
    const totalToyPrice = (toy1.price + toy2.price);
    //console.log(totalToyPrice)

    let globalBasePrice = 10000;
    const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
    const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
    globalBasePrice = 25000;
    car1.finalPrice = car1.basePrice + globalBasePrice;
    car2.finalPrice = car2.basePrice + globalBasePrice;

//Iteración #3

    let product = 10*5;
    console.log(product);

    let division = 10/2;
    console.log(division);

    let rest = 15 % 9;
    console.log(rest); 

//Iteración #5

    const number1 = 10;
    const number2 = 20;
    const number3 = 2;

    // ejemplo
    if(number1 === 10){
        console.log('number1 es estrictamente igual a 10')
    }

    if (number2 / number1) {
    console.log("number2 dividido entre number1 es igual a 2");
    }

    if (number1 !== number2) {
    console.log("number1 es estrictamente distinto a number2");
    }

    if (number3 != number1) {
    console.log("number3 es distinto number1");
    }

    if (number3*5 == number1) {
    console.log("number3 por 5 es igual a number1");
    }

    if ((number3*5 == number1) && (number1*2 == number2)) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
    }

    if ((number2/2 ==number1) || (number1/5 == number3)) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
    }

//Iteración #6

    for (let i=0; i<=9; i++) {
        console.log(i);
    }

    for (let k=0; k<=9; k++) {
        if (k % 2 == 0) {
            console.log(k)
    }}


    for (let j=0; j<=10; j++) {
        if (j<10) {
            console.log (j + "....Intentando dormir")
        }
        else  {
            console.log (j + "....Dormida!")
        }}




