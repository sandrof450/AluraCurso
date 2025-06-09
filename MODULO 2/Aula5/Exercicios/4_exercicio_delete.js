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
async function excluirClientePorId(idCliente) {
  try {
    await client.connect();
    console.log('Conectado ao PostgreSQL');

    const query = 'DELETE FROM vendas.clientes where id_cliente = $1 RETURNING *';
    const res = await client.query(query, [idCliente]);

    if (res.rowCount === 0) {
      console.log(`Nenhum cliente encontrado com o ID ${idCliente}.`);
    } else {
      console.log(`Cliente com ID ${idCliente} excluído com sucesso.`);
      console.log('Cliente excluído:', res.rows[0]);
    }

  } catch (err) {
    console.error('Erro ao excluir cliente:', err);
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
rl.question('Digite o ID do cliente que deseja excluir: ', (input) => {
  const idCliente = parseInt(input);

  if (isNaN(idCliente)) {
    console.log('ID inválido. Digite um número inteiro.');
    rl.close();
    return;
  }

  excluirClientePorId(idCliente);
});
