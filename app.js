const http = require('http');
const express = require('express');
const app = express();
const io = require('socket.io')(http);

/*
app.get('/', function (req, res){
  res.end("Chat iniciado");
});
*/

const server = http.createServer(app);

// Conf del Servidor
app.set('port', 3000);
app.use(express.static(__dirname+ "/public"));

//Inicializacion del Servidor
server.listen(app.get('port'), function () {
  console.log('El servidor iniciado');
});

//Logica de los Sockets
var sockets = io.listen(server);

sockets.on('connection', function (socket){
  console.log('Nuevo cliente conectado');

  socket.on('mensaje-del-cliente', function (data) {
    sockets.emit('mensaje-del-servidor', data);
  });
});
