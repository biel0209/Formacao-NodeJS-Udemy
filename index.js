const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const perguntaModel = require('./database/Pergunta');

// Database
connection
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados MySQL realizada com sucesso!');
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });

app.set('view engine', 'ejs'); // setando o ejs como view engine
app.use(express.static('public')); // setando a pasta public como estática

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
  res.render('index');  
});

app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  res.send("Formulário recebido!" + "Título: " + titulo + " " + "Descrição: " + 
            descricao);
});

app.listen(8080, () => {
  console.log('Servidor executando na porta 8080');
});