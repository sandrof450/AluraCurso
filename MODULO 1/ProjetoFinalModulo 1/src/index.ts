import createPrompt from "prompt-sync";
import { Book } from "./Book";
import {BookCategory} from './enumBookCategory';
import fs from 'fs'//file system


const prompt = createPrompt();
const books: Book[] = [];
let option = "s";

function validaCategory(value: string): boolean{
  return Object.values(BookCategory).includes(value as BookCategory);
}

async function createFileJSON(value: Book[]){
  fs.writeFileSync("books.json", JSON.stringify(value), {encoding: "utf-8"});
}

function readFileJSON(): Book[]{
  if(!fs.existsSync("books.json")){
    return [];
  }

  const booksBuffer = fs.readFileSync("books.json", {encoding: "utf-8"});
  const booksRead = JSON.parse(booksBuffer.toString()) as Book[];
  return booksRead;
}

const existsBook = readFileJSON();
books.push(...existsBook);

console.log("CADASTRO DE LIVROS")
while(option == "s"){
  option =  prompt(`Você deseja cadastrar um livro? [Sim(S) | Não(N)]`).toLowerCase();

  if(option == "s"){
    const title = prompt(`Digite o titulo do livro: `);
    const summary = prompt(`Digite o summary do livro ${title}: `);
    const year = Number(prompt(`Digite o ano do livro ${title}: `));
    const pages = Number(prompt(`Digite o número de páginas do livro ${title}: `));
    const isbn = prompt(`Caso queira digite o isbn do livro ${title}: `);
    const category = prompt(`Informe a categoria do livro ${title}: `);
    let categoryEnum: BookCategory = "Outros" as BookCategory;

    if(validaCategory(category)){
      categoryEnum = category as BookCategory;
    }
    else{
      categoryEnum = "Outro" as BookCategory;
    }
    books.push({
      title: title,
      year: year,
      summary:summary,
      pages: pages,
      isbn: isbn,
      category: categoryEnum
    });
  }
}


createFileJSON(books)
  .then(result => console.log("Criação do arquivo ", result))
  .catch(error => console.log(error.message));

const listarPorCategory = {
  "Romance":[] as Book[],
  "Fantasia":[] as Book[],
  "FiccaoCientifica":[] as Book[],
  "Biografia":[] as Book[],
  "Historia":[] as Book[],
  "Tecnologia":[] as Book[],
  "Outro":[] as Book[],
};

books.map((item) => {
  switch(item.category){
    case BookCategory.Romance:
      listarPorCategory.Romance.push(item);
      break;
    case BookCategory.Fantasia:
      listarPorCategory.Fantasia.push(item);
      break;
    case BookCategory.FiccaoCientifica:
      listarPorCategory.FiccaoCientifica.push(item);
      break;
    case BookCategory.Biografia:
      listarPorCategory.Biografia.push(item);
      break;
    case BookCategory.Historia:
      listarPorCategory.Historia.push(item);
      break;
    case BookCategory.Tecnologia:
      listarPorCategory.Tecnologia.push(item);
      break;
    case BookCategory.Outro:
      listarPorCategory.Outro.push(item);
      break;
  }

});


console.log(listarPorCategory);
