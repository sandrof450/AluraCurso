const { Client } = require('pg');
require('dotenv').config();
const readline = require('readline');

// Cria um cliente de conexão
const client = new Client({
  host: process.env.PGHOST,
  port: 5432,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl: true
});

// Função para buscar produtos pelo nome
async function searchProductsByID(idBusca) {
  try {
    await client.connect();
    console.log('Conexão bem-sucedida ao PostgreSQL!');

    // Faz a busca usando LIKE e parâmetros para evitar SQL Injection
    const query = 'SELECT * FROM vendas.produtos WHERE id_produto = $1';
    const values = [idBusca];
    const res = await client.query(query, values);

    if (res.rows.length === 0) {
      console.log('Nenhum produto encontrado.');
    } else {console.log('Produto(s) encontrado(s):', res.rows);}
  } catch (err) {
    console.error('Erro ao buscar produtos:', err);
  } finally {
    await client.end();
    console.log('Conexão encerrada.');
  }
}

// Pega o ID digitado pelo usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o ID do Produto a buscar: ', (input) => {
  searchProductsByID(input);
  rl.close();
});
