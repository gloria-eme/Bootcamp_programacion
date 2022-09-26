let user = ("");


function isLogged(user) {
    if (user) {
    console.log("bienvenido " + user);
    }
    if (typeof user !== "string") {
    console.log("debes escribir un nombre");
    }}
   

isLogged(3);
