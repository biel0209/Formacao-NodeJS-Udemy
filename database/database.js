const Sequelize = require('sequelize');

// Criando a conexão com o banco de dados MySQL local
// const connection = new Sequelize('guia_perguntas', 'root', '11441928',{
//   host: 'localhost',
//   dialect: 'mysql',
//   logging: false
// })

// Criando a conexão com o banco de dados MySQL na planet scale
const connection = new Sequelize('bd01-perguntas-respostas', 'akc8mbwzafgr6p6vyo4c', 'pscale_pw_sV69DRh5wNT0kAkyJwyhFmOAN8c91dTGGuiMgsgqGnD',{
  host: 'aws.connect.psdb.cloud',
  dialect: 'mysql',
  dialectOptions: {
    ssl: {rejectUnauthorized: true}
  },
  logging: false
})


module.exports = connection; // Exportando a conexão com o banco de dados MySQL