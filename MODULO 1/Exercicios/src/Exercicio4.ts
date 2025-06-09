// 🧩 Exercício 4 – Promise.all
// Crie três Promises que se resolvem com diferentes mensagens após 1, 2 e 3 segundos, respectivamente. Use Promise.all para capturar todas as mensagens ao final.

const promise1 = new Promise<number>((resolve, reject) => {
    setTimeout(()=>{
        resolve(1);
    }, 3000);
});

const promise2 = new Promise<number>((resolve, reject)=> {
    setTimeout(()=>{
        resolve(2);
    },3000);
});

const promise3 = new Promise<number>((resolve, reject) =>{
    setTimeout(() => {
       resolve(3) 
    }, 3000);
});

const arrayPromisses: Promise<number>[] = [promise1, promise2, promise3];

console.log(Promise.all(arrayPromisses));