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

// Função para buscar clientes pelo nome
async function searchClientsByName(nomeBusca) {
  try {
    await client.connect();
    console.log('Conexão bem-sucedida ao PostgreSQL!');

    // Faz a busca usando LIKE e parâmetros para evitar SQL Injection
    const query = 'SELECT * FROM vendas.clientes WHERE nome ILIKE $1';
    const values = [`%${nomeBusca}%`]; // Busca parcial

    const res = await client.query(query, values);

    if (res.rows.length === 0) {
      console.log('Nenhum cliente encontrado.');
    } else {
      console.log(`Clientes encontrados: (${res.rows.length})`);
      res.rows.forEach((cliente) => {
        console.log(`ID: ${cliente.id_cliente}`);
        console.log(`Nome: ${cliente.nome}`);
        console.log(`Email: ${cliente.email}`);
        console.log(`Telefone: ${cliente.telefone}`);
        console.log('--------------------');
      });
    }

  } catch (err) {
    console.error('Erro ao buscar clientes:', err);
  } finally {
    await client.end();
    console.log('Conexão encerrada.');
  }
}

// Pega o nome digitado pelo usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o nome do Cliente a buscar: ', (input) => {
  searchClientsByName(input);
  rl.close();
});
