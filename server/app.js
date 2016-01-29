var express = require('express');
var app = express();
var path = require('path');
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 3000, function(){
  console.log('listening on localhost:3000');
});

app.use(express.static(path.join(__dirname, '../client')));

io.on('connection', function(socket){
  console.log('someone entered chatroom');
  socket.on('message', function (message) {
    console.log('message received', message);
    io.emit('message', message)
  })
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
