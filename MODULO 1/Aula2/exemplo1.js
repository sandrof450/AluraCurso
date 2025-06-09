//promptSync 
// Uma função que permite criar uma interface para lidar com a entrada de usuario

//require 
// importa o pacote que desejo

//Criação para entrada de usuário
const promptSync = require("prompt-sync");
const prompt = promptSync();

const nome = prompt('Qual seu nome? ')

const nota_01 = Number(prompt('Digite a nota 01: '));
const nota_02 = Number(prompt('Digite a nota 02: '));

const media = (nota_01 + nota_02) / 2;

console.log(`Olá, ${nome}. Sua média é ${media}`);