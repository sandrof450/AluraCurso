// 🧩 Exercício 2 – Encadeamento de Promises
// Crie uma Promise que resolve com o número 5. Depois, use .then() para multiplicar esse número por 2, e em seguida por 10. Exiba o resultado final no console.

const promiseresolveNumber5 = new Promise<number>((resolve, reject) =>{
    resolve(5);
});

promiseresolveNumber5.then((result) => {
    console.log(result);
    return result * 2;
}).then((multiplicadopor2) => {
    console.log(multiplicadopor2);
    return multiplicadopor2 * 10;
}).then((resultadoFinal) => {
    console.log(resultadoFinal);
})