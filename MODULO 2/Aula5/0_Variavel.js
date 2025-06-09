// Importa o pacote dotenv, lê as variáveis do arquivo .env e adiciona no process.env
require('dotenv').config();

// Acessa o process.env (objeto global) para buscar a variável
const pgHost = process.env.PGHOST;
// Exibe o valor de PGHOST
console.log('PGHOST:', pgHost);
