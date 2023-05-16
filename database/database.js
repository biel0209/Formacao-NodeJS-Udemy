const Sequelize = require('sequelize');

// Criando a conexão com o banco de dados MySQL
const connection = new Sequelize('guia_perguntas', 'root', '11441928',{
  host: 'localhost',
  dialect: 'mysql',
  logging: false
})


module.exports = connection; // Exportando a conexão com o banco de dados MySQL