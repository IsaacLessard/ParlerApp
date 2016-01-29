var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');

app.use(express.static(path.join(__dirname, '../client')));

io.on('connection', function(socket){
  console.log("someone entered the chat room!");
});
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});
server.listen(3000, function(){
  console.log('listening on localhost:3000');
});
