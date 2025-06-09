const createPrompt = require("prompt-sync");
const prompt = createPrompt();

const person = {
    name: prompt("Digite seu nome: "),
    age: Number(prompt("Digite sua idade: ")),
    height: Number(prompt("Digite sua altura: ")),
    profissao: prompt("Digite sua profissão: "),
}

function exibirPessoas(person, callback = console.log()){
    console.log(`Olá, pessoa. Aqui estão suas informações
        - Nome: ${person.name}
        - Idade: ${person.age}
        - Altura ${person.height}
        - Profissão: ${person.profissao}`)
}
function executaPraCadaUm(list){
    for(let i = 0; i < list.length; i++){
        const item = list[i];
        
        callback(item);
    };
}


executaPraCadaUm(person, exibirPessoas);