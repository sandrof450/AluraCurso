import axios from "axios";


//Promisse precisar utilizar o then para quando 
// terminar faz alguma coisa. Mas as outras 
// coisa continuam rodando
const user = axios.get("").then((result) => {
    console.log(result.data);
    console.log(result.data);
}).catch((error) => {
    console.log(error.Message);
});

console.log("PEGOU");