const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta');

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
  Pergunta.findAll({ raw: true, order:[
    ['id', 'DESC'] // ASC = Crescente || DESC = Decrescente
  ] }).then(perguntas => {
    res.render('index',{
      perguntas: perguntas
    });  
  });
});

app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.get('/pergunta/:id/:order?', (req, res) => {
  let id = req.params.id;
  let order = req.params.order;
  Pergunta.findOne({ // busca uma pergunta no banco de dados
    where: {id: id}
  }).then(pergunta => {
    if (pergunta != undefined) { // pergunta encontrada
      if (order == 'order-az') {
        order = ['corpo', 'ASC'];
      }else if (order == 'order-za') {
        order = ['corpo', 'DESC'];
      }else if (order == 'order-recent') {
        order = ['id', 'DESC'];
      }else if (order == 'order-old') {
        order = ['id', 'ASC']
      }else{
        order = ['id', 'DESC'];
      }
      Resposta.findAll({ // busca todas as respostas da pergunta
        where: {perguntaId: pergunta.id},
        order:[order]
      }).then(resposta => {
        res.render('pergunta', {
          pergunta: pergunta,
          respostas: resposta
        });
      })
    }else{ // pergunta não encontrada
      res.redirect('/');
    }
  });
});

app.post('/salvarpergunta', (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  Pergunta.create({ // cria uma pergunta no banco de dados
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect('/'); // redireciona para a página inicial
  });
});

app.post('/salvaresposta', (req, res) => {
  let corpo = req.body.corpo;
  let perguntaId = req.body.pergunta;
  Resposta.create({ // cria uma resposta no banco de dados
    corpo: corpo,
    perguntaId: perguntaId
  }).then(() => {
    res.redirect('/pergunta/' + perguntaId); // redireciona para a página inicial
  });
});

app.get('/:order', (req, res) => {
  let order = req.params.order
  if (order == 'order-az') {
    order = ['titulo', 'ASC'];
  }else if (order == 'order-za') {
    order = ['titulo', 'DESC'];
  }else if (order == 'order-recent') {
    order = ['id', 'DESC'];
  }else if (order == 'order-old') {
    order = ['id', 'ASC']
  }
  Pergunta.findAll({ raw: true, order:[order] })
  .then(perguntas => {
    res.render('index',{
      perguntas: perguntas
    });  
  });
});

app.listen(8080, () => {
  console.log('Servidor executando na porta 8080');
});