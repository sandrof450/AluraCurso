import axios from "axios";

const promise = axios.get("https://jsonplaceholder.typicode.com/todos/1");

console.log("Preparando a requisição");
 
promise.then((result) => {
    console.log(result.data);
}).catch((error) => {
    console.log(error.Message)
});

console.log("Fim da execução");


// try{
//     console.log("Preparando requisição")
//     const promise = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
//     console.log(promise);
//     console.log("Fim da execução");
// }catch(error: any){
//     console.log(error.message)
// }

export{};