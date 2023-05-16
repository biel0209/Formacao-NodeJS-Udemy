const Sequelize = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define('pergunta', {
  titulo: {
    type: Sequelize.STRING,
    aloowNull: false
  },
  descricao: {
    type: Sequelize.TEXT,
    aloowNull: false
  }
});

Pergunta.sync({force: false}).then(() => {
  console.log('Tabela pergunta criada com sucesso!');
});