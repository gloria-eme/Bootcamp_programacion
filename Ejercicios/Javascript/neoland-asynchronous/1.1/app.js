//Iteracion 
//1.1
const getData = async () => {
    try {
        const data = await fetch ("https://api.agify.io?name=michael");
        const dataJSON = await data.json();
        console.log(dataJSON);
        return dataJSON;
    }   catch (error) {
            console.log("Error:", error);
        }
    };

(getData());




