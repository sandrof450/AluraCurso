// 🔹 Exercício 1 – Corrida de Requisições
// Crie duas Promises que se resolvem em tempos diferentes (ex.: uma em 2 segundos, outra em 4 segundos). 
// Use Promise.race para identificar qual foi a primeira a resolver e exiba o resultado no console.

const promise1 = new Promise<string>((resolve, reject) => {
    setTimeout(()=> {
        return resolve("Promise 1");
    }, 5000);
});

const promise2 = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
       return resolve("Promise 2") ;
    }, 4000);
});

const arrayPromise: Promise<string>[] = [promise1, promise2]

Promise.race(arrayPromise).then((result) => {
    console.log(`${result} terminou primeiro`);
})