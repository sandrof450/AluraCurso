// 3_insert.js
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

// Função para excluir um produto pelo id_produto
async function excluirProdutoPorId(idProduto) {
  try {
    await client.connect();
    console.log('Conectado ao PostgreSQL');

    const query = 'DELETE FROM vendas.produtos WHERE id_produto = $1 RETURNING *';
    const res = await client.query(query, [idProduto]);

    if (res.rowCount === 0) {
      console.log(`Nenhum produto encontrado com o ID ${idProduto}.`);
    } else {
      console.log(`Produto com ID ${idProduto} excluído com sucesso.`);
      console.log('Produto excluído:', res.rows[0]);
    }

  } catch (err) {
    console.error('Erro ao excluir produto:', err);
  } finally {
    await client.end();
    console.log('Conexão encerrada.');
    rl.close();
  }
}

// Pega o nome digitado pelo usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função principal
rl.question('Digite o ID do produto que deseja excluir: ', (input) => {
  const idProduto = parseInt(input);

  if (isNaN(idProduto)) {
    console.log('ID inválido. Digite um número inteiro.');
    rl.close();
    return;
  }

  excluirProdutoPorId(idProduto);
});
