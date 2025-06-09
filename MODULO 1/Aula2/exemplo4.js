const promptSync = require("prompt-sync");
const prompt = promptSync();

const cor = prompt('Qual a cor do semáforo?');

switch(cor){
    case "verde":
        console.log("Pode prosseguir, sinal verde");
        break;
    case "amarelo":
        console.log("Va parando o carro, o sinal está amarelo");
        break;
    case "vermelho":
        console.log("Sinal vermelho você precisa parar");
        break;
    default:
        console.log("Cor invalida");
        break;
}