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

async function testConnection() {
  try {
    await client.connect();
    console.log('Conexão bem-sucedida ao PostgreSQL!');

    const res = await client.query('SELECT NOW()');
    console.log('Horário atual no servidor:', res.rows[0].now);
  } catch (err) {
    console.error('Erro ao conectar:', err);
  } finally {
    await client.end();
    console.log('Conexão encerrada.');
  }
}

testConnection();
