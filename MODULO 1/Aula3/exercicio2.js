/**
 * - Usar o forEach para exibir a lista de numeros do primeiro exercicio
 * - Usar o map para multiplicar numeros
 * - Usar o map para retornar uma nova lista de numeros em caixa alta (.toUpperCase)
 * - Usar o filter para retornar valores maiores do que 4
 * - Usar o filter para retornar os valores pares
 */

const createPrompt = require("prompt-sync");
const prompt = createPrompt();

let numbers = [];

for(let i = 0; i < 5; i++){
    numbers.push(Number(prompt("Digite um número: ")));
}

numbers.shift();
numbers.indexOf

console.log("Números digitados: ")
numbers.forEach((number) => console.log(number));
console.log();

console.log("Números dobrados: ");
const numberDoubles = numbers.map((number) => number * 2);
numberDoubles.forEach((numberDouble) => console.log(numberDouble));
console.log();


console.log("Números em caixa alta: ");
const numbersCaixaAlta = numbers.map((number) => number.toString().toUpperCase());
numbersCaixaAlta.forEach((numberCaixaAlta) => console.log(numberCaixaAlta));
console.log();

console.log("Números maiores do que 4: ");
const numbersMaiorQueQuatro = numbers.filter((number) => {
    if (number > 4){
        return number;  
    };
});
numbersMaiorQueQuatro.forEach((numberMaiorQueQuatro) => console.log(numberMaiorQueQuatro));
console.log();

console.log("Números pares: ");
const numbersPares = numbers.filter((number) => {
    if((number % 2) === 0){
        return number;
    };
});
numbersPares.forEach((numberPar) => {
    console.log(numberPar);
})