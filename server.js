const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  io.on('connection', (socket) => {
    // socket.on('send-message',(room,message)=>{
    //     console.log(message)
    
    //     if(room===""){
    //         socket.broadcast.emit('receive-message',message)
    //     }else{
    //         socket.to(room).emit("receive-message",message)
    //         console.log(socket.id);
    //     }
    // })
    socket.on('join-room',room_q=>{
        socket.join(room_q);
        console.log(`User joined room ${room_q} and its socket id is ${socket.id}`);
    })
  });
server.listen(8000, () => {
  console.log('listening on *:3000');
});