const promptSync = require("prompt-sync");
const prompt = promptSync();

const nome = prompt('Qual seu nome? ')

const fez_provas = prompt("Você fez as provas? (S | N) ");

if(fez_provas == "S") {
    console.log("Fez provaz: ", fez_provas);

    const nota_01 = Number(prompt('Digite a nota 01: '));
    const nota_02 = Number(prompt('Digite a nota 02: '));

    const media = (nota_01 + nota_02) / 2;

    console.log(`Olá, ${nome}. Sua média é ${media}`);
}