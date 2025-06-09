import createPrompt from "prompt-sync";
const prompt = createPrompt();
import { recebeLivro, avaliarLivro } from "./functions";

const titulo = prompt(`Digite o titulo do livro: `);
const ano = Number(prompt(`Digite o ano do livro "${titulo}": `));

recebeLivro(titulo, ano);
console.log(avaliarLivro(ano));