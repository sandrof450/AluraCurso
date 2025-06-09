//Um programa que receba o nome de um aluno e suas duas 
//notas e se ele fez ou não o TP(trabalho pratico)
//
// Regras
//- As notas do aluno precisam estar entre 0 a 10
//- Se a nota desse aluno for menor que 5, então ele esta reprovado
//- Se a nota estiver entre 5 e 7
//      - Se tiver feito TP: Aprovado
//      - Se não: esta reprovado
//- O programa exibe uma mensagem ao fim da execução dizendo a média 
//  e o resultado final        


const promptSync = require("prompt-sync");
const prompt = promptSync();

const name = prompt('Qual é seu nome? ');
const nota_01 = Number(prompt('Digite a sua nota: '));
const nota_02 = Number(prompt('Digite a sua nota: '));

const media = (nota_01 + nota_02) / 2;

const TP = prompt('Foi realizado o TP? (S | N)').toLowerCase();

if((nota_01 >= 0 && nota_01 <= 10) || (nota_02 >= 0 && nota_02 <= 10)){
    if(media < 5){
        console.log("Você foi reprovado");
    }
    if(media >= 5 && media <= 7){
        console.log(TP == "s" ? "Aprovado": "Reprovado");
    }
}else {
    console.log("As notas devem estar entre 0 a 10");
}

console.log(`${name} sua média: ${media}`);