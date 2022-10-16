2.1

const runTimeOut = async () => {
    const promise = await new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })
    console.log('Time out!')
};

runTimeOut();


//2.1

async function getCharacters () {
    const data = await fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(characters => 
    console.log(characters));
}

getCharacters();

// const getCharacters = async () => {
//     try {
//         const data = await fetch(`https://rickandmortyapi.com/api/character`) 
//         const res = await data.json();
//         console.log(res)
// } catch (error) {
//     console.log(error)
// }}
// getCharacters();
