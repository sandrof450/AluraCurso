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

// Função para inserir um produto
async function insertProduct(produto) {
  try {
    await client.connect();
    console.log('Conexão bem-sucedida ao PostgreSQL!');

    const query = `
      INSERT INTO vendas.produtos (id_produto, nome, descricao, preco, id_categoria)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [
      produto.id_produto,
      produto.nome,
      produto.descricao,
      produto.preco,
      produto.id_categoria
    ];

    const res = await client.query(query, values);
    console.log('Produto inserido com sucesso:');
    console.log(res.rows[0]);
  } catch (err) {
    console.error('Erro ao inserir produto:', err);
  } finally {
    await client.end();
    rl.close();
    console.log('Conexão encerrada.');
  }
}

// Pega o nome digitado pelo usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função principal
function main() {
  rl.question('Digite o ID do produto: ', (id) => {
    rl.question('Digite o nome do produto: ', (nome) => {
      rl.question('Digite a descrição do produto (opcional): ', (descricao) => {
        rl.question('Digite o preço do produto: ', (preco) => {
          rl.question('Digite o ID da categoria (opcional): ', (id_categoria) => {
            const produto = {
              id_produto: parseInt(id),
              nome,
              descricao: descricao || null,
              preco: parseFloat(preco),
              id_categoria: id_categoria ? parseInt(id_categoria) : null
            };
            insertProduct(produto);
          });
        });
      });
    });
  });
}

main();
