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
async function insertCliente(clientes) {
  try {
    await client.connect();
    console.log('Conexão bem-sucedida ao PostgreSQL!');

    const query = `
      insert into VENDAS.clientes (id_cliente, NOME, EMAIL, TELEFONE, ENDERECO, CPF)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [
      clientes.id_cliente,
      clientes.nome,
      clientes.email,
      clientes.telefone,
      clientes.endereco,
      clientes.cpf
    ];

    const res = await client.query(query, values);
    console.log('Cliente inserido com sucesso:');
    console.log(res.rows[0]);
  } catch (err) {
    console.error('Erro ao inserir cliente:', err);
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
  rl.question('Digite o ID do cliente: ', (id) => {
    rl.question('Digite o nome do cliente: ', (nome) => {
      rl.question('Digite o email do cliente: ', (email) => {
        rl.question('Digite o telefone do cliente: ', (telefone) => {
          rl.question('Digite o endereço do cliente (opcional): ', (endereco) => {
            rl.question('Digite o cpf do cliente: ', (cpf) => {
              const cliente = {
                id_cliente: parseInt(id),
                nome,
                email: email || null,
                telefone: telefone,
                endereco: endereco ? parseInt(endereco) : null,
                cpf: cpf
              };
              insertCliente(cliente);
            });
          });
        });
      });
    });
  });
}

main();
