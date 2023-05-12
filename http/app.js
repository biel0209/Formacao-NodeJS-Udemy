var http = require("http")

http.createServer(function(req, resp){
  resp.end("<h1>Bem vindo ao meu servidor local!<h1>")
}).listen(8181)

console.log("Servidor rodando...")
