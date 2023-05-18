const Sequelize = require('sequelize');

//Criando a conexão com o banco de dados MySQL local
const connection = new Sequelize('guia_perguntas', 'root', '11441928',{
  host: 'localhost',
  dialect: 'mysql',
  logging: false
})

// // Criando a conexão com o banco de dados MySQL na planet scale
// const connection = new Sequelize('bd01-perguntas-respostas', 'k8meyoelct9vxgryl0bs', 'pscale_pw_BzccLaKkBBmxwP8Sf0Gxdazrlq4b4EyjdjWflKKNH12',{
//   host: 'aws.connect.psdb.cloud',
//   dialect: 'mysql',
//   dialectOptions: {
//     ssl: {rejectUnauthorized: true}
//   },
//   logging: false
// })


module.exports = connection; // Exportando a conexão com o banco de dados MySQL