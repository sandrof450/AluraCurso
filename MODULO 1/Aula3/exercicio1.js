const createPrompt = require("prompt-sync");
const prompt = createPrompt();

let numbers = [];

for(let i = 0; i < 5; i++){
    numbers.push(Number(prompt("Digite um número: ")));
}

numbers.shift();
numbers.indexOf
console.log(numbers);