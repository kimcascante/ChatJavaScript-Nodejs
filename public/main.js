$(function(){
  //console.log("Cargado!");

  //Socket iniciado
  var socket = io();


  //Variables
  var message = $('#Chat-Message');
  var chat = $('#Chat');

  message.focus();

  $('#Message-box').submit(function (e){
    e.preventDefault();
    //console.log('enviado');
    //console.log(message.val());
    //chat.append(message.val() + "<br/>");

    socket.emit('mensaje-del-cliente', message.val());

    message.val("")
  });

  socket.on('mensaje-del-servidor', function(data){
    chat.append(data + "<br/>");
  });
});
