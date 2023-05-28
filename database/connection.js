const Sequelize = require('sequelize');

const connection = new Sequelize('blog', 'root', '11441928', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = connection;