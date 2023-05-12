const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // setando o ejs como view engine
app.use(express.static('public')); // setando a pasta public como estática

app.get('/:nome/:lang', (req, res) => {
  let nome = "Marcus Gabriel";
  let lang = "JavaScript";
  let exibirMsg = true;
  let produtos = ['carro', 'moto', 'caminhão', 'avião', 'helicoptero'];
  res.render('index',{
    nome: req.params.nome,
    lang: req.params.lang,
    msg: exibirMsg,
    produtos: produtos
  });
});;

app.listen(8080, () => {
  console.log('Servidor executando na porta 3000');
});