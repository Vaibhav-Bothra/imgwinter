let aa = document.getElementById("send1")
let bb = document.getElementById("send")
let cc = document.getElementById("sms1")
let dd = document.getElementById("sms")
let ee = document.getElementById("msg")
let room;
var socket=io();
let message;
aa.addEventListener("click",()=>{
    room=cc.value
    console.log(room)
    socket.emit('join-room',room)
})


bb.addEventListener('click',()=>{
  message=dd.value;
  socket.emit("send-message",(message,room))


})

function display(message){
    ee.innerHTML+=`<div>${message}</div>`
}

socket.on('receive-message',message=>{
    display(message);
})

