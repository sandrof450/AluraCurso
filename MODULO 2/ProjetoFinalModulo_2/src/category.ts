import createPrompt from "prompt-sync";
import { Book } from "./Book";

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

const addCategoria = async () => {
    console.log('Adicionando a categoria do livro:\n');
    const nome = prompt('Adicione uma categoria: ');

    const categoria = {
      nome: nome
    }
    
    try{
        await client.connect();
        console.log('Conexão bem-sucedida ao PostgreSQL!');

        const query = `insert into "Livraria".CATEGORIAS(NOME) VALUES($1);`
        const values = [
            categoria.nome
        ]

        const result = await client.query(query,values)
        console.log('Livro inserido com sucesso:');
        console.log(result.rows[0]);

    }catch (err) {
    console.error('Erro ao inserir o livro:', err);
  }finally {
    await client.end();
    console.log('Conexão encerrada.');
  }

}

export default addCategoria;