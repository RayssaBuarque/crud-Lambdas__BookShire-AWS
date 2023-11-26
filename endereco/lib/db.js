const mysql = require('mysql');

// Configurações do MySQL
const config = {
  host      : '*********************', // link do host
  user      : '*****', // user
  password  : '********', //password
  database  : 'bookshire',
  port      : 3306
};

// Criando conexão com MySQL
const conn = mysql.createConnection(config);

module.exports = { conn }
