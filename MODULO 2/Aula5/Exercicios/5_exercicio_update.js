// 3_insert.js
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

// Função para atualizar o telefone do cliente
async function atualizarTelefone(idCliente, novoTelefone) {
  try {
    await client.connect();
    console.log('Conectado ao PostgreSQL');

    const query = `
      UPDATE vendas.clientes
      SET telefone = $1
      WHERE id_cliente = $2
      RETURNING *;
    `;

    const res = await client.query(query, [novoTelefone, idCliente]);

    if (res.rows.length > 0) {
      console.log('Cliente atualizado com sucesso:');
      console.log(res.rows[0]);
    } else {
      console.log('Nenhum cliente encontrado com o ID fornecido.');
    }
  } catch (err) {
    console.error('Erro ao atualizar o cliente:', err);
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

// Pergunta ao usuário o ID e a novo telefone
rl.question('Digite o ID do cliente: ', (idInput) => {
  const idCliente = parseInt(idInput);
  if (isNaN(idCliente)) {
    console.error('ID inválido. Digite um número.');
    rl.close();
    return;
  }

  rl.question('Digite a novo telefone: ', (novoTelefone) => {
    if (isNaN(novoTelefone)) {
      console.error('Telefone inválido. Digite apenas números.');
      rl.close();
      return;
    }
    atualizarTelefone(idCliente, novoTelefone);
  });
});

