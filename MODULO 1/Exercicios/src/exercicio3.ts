// 🧩 Exercício 3 – Rejeição de Promise
// Crie uma função chamada verificarNumero que recebe um número. Se for par, resolve a Promise com "Número par", caso contrário, rejeita com "Número ímpar".

function verificarNumero(number: number){
    return new Promise((resolve, reject) => {
        const ehPar = number % 2 == 0;
        if(ehPar)
            resolve(number);
        else{
            reject(number);
        }
    }).then((result) => {
        console.log("Numero par: ", result);
    }).catch((error) => {
        console.log("Numero impar: ", error);
    })
}
verificarNumero(1);
verificarNumero(2);
verificarNumero(3);
verificarNumero(4);
verificarNumero(5);
verificarNumero(6);