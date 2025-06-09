import createPrompt from "prompt-sync";
import { Book } from "./Book";
import addCategoria from "./category";

const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  host: process.env.PGHOST,
  port: 5432,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl: true
});


const prompt = createPrompt();

const adicionaLivro = async () => {
  /////////////////////////INSERÇÃO DO LIVRO/////////////////////////
  const title = prompt(`Digite o titulo do livro: `);
  const summary = prompt(`Digite o summary do livro ${title}: `);
  const year = Number(prompt(`Digite o ano do livro ${title}: `));
  const pages = Number(prompt(`Digite o número de páginas do livro ${title}: `));
  const isbn = prompt(`Caso queira digite o isbn do livro ${title}: `);
  const category = Number(prompt(`Informe o codigo da categoria do livro ${title}: `));
  const editora = Number(prompt(`Informe o codigo da editora do livro ${title}: `));
  const autor = Number(prompt(`Informe o codigo do autor do livro ${title}: `));

  const book = {
    title: title,
    year: year,
    summary:summary,
    pages: pages,
    isbn: isbn,
    category: category,
    editora: editora,
    autor: autor
  }

  try{
    await client.connect();
    console.log('Conexão bem-sucedida ao PostgreSQL!');

    const query = `insert into "Livraria".livros (TITULO, RESUMO, ANO, PAGINAS, ISBN, ID_CATEGORIA, ID_EDITORA, ID_AUTOR)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;`;

    const values = [
      book.title,
      book.summary,
      book.year,
      book.pages,
      book.isbn,
      book.category,
      book.editora,
      book.autor
    ];

    const result = await client.query(query, values);
    console.log('Livro inserido com sucesso:');
    console.log(result.rows[0]);
    
  }catch (err) {
    console.error('Erro ao inserir o livro:', err);
  }finally {
    await client.end();
    console.log('Conexão encerrada.');
  }
}

const main = async ()=> {
  addCategoria();
  adicionaLivro();
}

main();