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

// Função para atualizar a descrição do produto
async function atualizarDescricao(idProduto, novaDescricao) {
  try {
    await client.connect();
    console.log('Conectado ao PostgreSQL');

    const query = `
      UPDATE vendas.produtos
      SET descricao = $1
      WHERE id_produto = $2
      RETURNING *;
    `;

    const res = await client.query(query, [novaDescricao, idProduto]);

    if (res.rows.length > 0) {
      console.log('Produto atualizado com sucesso:');
      console.log(res.rows[0]);
    } else {
      console.log('Nenhum produto encontrado com o ID fornecido.');
    }
  } catch (err) {
    console.error('Erro ao atualizar o produto:', err);
  } finally {
    await client.end();
    rl.close();
  }
}

// Pega o nome digitado pelo usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta ao usuário o ID e a nova descrição
rl.question('Digite o ID do produto: ', (idInput) => {
  const idProduto = parseInt(idInput);
  if (isNaN(idProduto)) {
    console.error('ID inválido. Digite um número.');
    rl.close();
    return;
  }

  rl.question('Digite a nova descrição: ', (novaDescricao) => {
    atualizarDescricao(idProduto, novaDescricao);
  });
});
