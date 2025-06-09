const createPrompt = require("prompt-sync");
const prompt = createPrompt();

// const nome_aluno_01 = prompt("Informe o seu nome: ");
// const nome_aluno_02 = prompt("Informe o seu nome: ");

//Arrays
const alunos = ['Lucas', 'Anna', 'Fernanda'];

//Adicionar itens ao final do array
alunos.push("Ellie");
alunos.shift();//Remover o primeiro item
alunos.unshift("João");//Adiciona itens no começo da lista

alunos.pop(); //Remove o ultimo item

const indexOfJoao = alunos.indexOf("João");//Recupera o indice de uma lista;

if(indexOfJoao === -1){
    console.log(`Achei o joão, ele está no indece: ${indexOfJoao}`)
}

alunos.reverse();//Inverte a ordem dos itens da lista

// console.log(alunos);
// console.log(alunos[alunos.length - 1]);
// console.log("IndexOfJoao: ", indexOfJoao);


//For

for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}

