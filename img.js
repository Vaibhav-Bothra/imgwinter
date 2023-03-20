const but = document.querySelector('#b3')
const joinq = document.querySelector(".join_q")

var socket = io();

var room_q;
var username_q;
let user = document.getElementById("username_q")
let room = document.getElementById("room_q")
// joinq.addEventListener("click",()=>{
//     username_q = user.value;
//     room_q = room.value;
//     socket.emit('join-room',room_q)
// })
console.log(room_q);

// socket.on('receive-message',room_q,message=>{
//     var e = document.getElementById('msg')
//     e.innerHTML+=`<h3>${message}</h3>`;
// })


but.addEventListener('click', bar)
let ans = []
function bar() {
    console.log("Button is clicked")
    let a = document.querySelector('#b1')
    let b = document.querySelector('#b2')
    let val = a.value
    let arr = ["Mathematics", "Science", "Computer", "General Knowledge", "Humanities", "English"]
    if (a.value == "") {
        b.innerHTML = ""
        b.innerHTML += '<h3>No results found</h3>';
    } else {
        if (ans.length == 0) {
            let count = 0;
            for (let index = 0; index < arr.length; index++) {
                var c = arr[index].toLowerCase();
                if (c.includes(a.value) && a.value != "") {
                    b.innerHTML += '<a href="">' + arr[index] + "</a>";
                    count += 1;
                }
            }
            if (count == 0) { b.innerHTML += '<h3>No results found</h3>'; }
            ans.push(val)
        } else {
            if (val != ans[0] && a.value != "") {
                b.innerHTML = "";
                let count = 0;
                for (let index = 0; index < arr.length; index++) {
                    var c = arr[index].toLowerCase();
                    if (c.includes(a.value)) {
                        b.innerHTML += '<a href="" class="a3">' + arr[index] + "</a>";
                        count += 1;
                    }
                }
                if (count == 0) { b.innerHTML += '<h3>No results found</h3>'; }
                ans.pop()
                ans.push(val)
            }
        }
    }
    console.log(ans)
    // let d=document.getElementsByClassName("a3")
    b.style.display = 'block';
}