const createPromt = require("prompt-sync");
const promt = createPromt();

//WHILE

let answer = 'N';

// while(answer !== "S"){
//     answer = promt('Você quer sair do programa? (S | N) ');
// }

// do {
//     answer = promt('Você quer sair do programa? (S | N) ');
// } while(answer !== "S");

// let counter = 0;
// const limit = 10;

// while(counter < limit){
//     console.log(counter);
// }

const numbers = [1, 2, 3, 4, 6, 7, 8];

console.log(`Lista original: ${numbers.join(", ")}`);

// const double = numbers.map(function(number){
//     return number * 2;
// });

const double = numbers.map((number) => number * 2);

console.log(`Lista duplicada: ${double.join(", ")}`);

console.log("MAP");
//MAP EXECUTA E TRANSFORMA
numbers.map((numero, indice) => {
    console.log("nmero: ", numero);
    console.log("Indice ", indice);
});
console.log();
//FOREACH SÓ EXECUTAS
console.log("FOREACH")
numbers.forEach((number) => {
    console.log(`- ${number}`);
});

//Filtra
const numerosPares = numbers.filter((item) => {
    const ehPar = item % 2 === 0;
    return ehPar;
});

console.log();
console.log("FILTER");
console.log(numerosPares);