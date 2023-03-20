const mongoose = require('mongoose');
const express = require('express')
const session = require('express-session')
const app = express()
const mongoDB1 = "mongodb://127.0.0.1:27017/signup";
const mongoDB2 = "mongodb://127.0.0.1:27017/mathematics";
const mongoDB3 = "mongodb://127.0.0.1:27017/science";
const mongoDB4 = "mongodb://127.0.0.1:27017/computer";
const bodyParser = require('body-parser');
const hostname = '127.0.0.1';
const port = 8000;
let m = Math;
const ejs = require('ejs');
const http = require('http');
const server = http.createServer(app);

const mongoDB="mongodb://127.0.0.1:27017/hero";

app.use(bodyParser.json())
app.use(express.static('pu'))
app.use(bodyParser.urlencoded({
  extended:true
}))
// .then(()=> console.log(`MongoDb connected. at this host ${hostname}`)).catch((err)=> console.log("Mongo Error",err));

// const dbSchema = new mongoose.Schema({
//   browser: String,
//  cars: String
   
// }); 




// const dbs = a.model("dbmod", dbSchema);

app.post('/createquiz', (req, res)=>{
 
  // console.log(req.body);
  console.log(`this is the dbname: ${req.body.dbname}`);
  console.log(`this is the collection name: ${req.body.cars}`);
  // console.log(req.body.cars);

  // var myData = new dbs(req.body);
  // console.log(myData);

  
  const mongoDBB1=`mongodb://127.0.0.1:27017/${req.body.dbname}`;

var b1=mongoose.createConnection(mongoDBB1);

const questionSchema2 = new mongoose.Schema({
  qno:Number,
  q:String,
  c:String,
  d:String,
 a: String,
 b: String,
 ca:String


});
var collname=`${req.body.cars}`

const question2 = b1.model(collname, questionSchema2);



question2.find({}).then((user) => {
  let count22=0;
  let newqno=0;
    count22 = user.length;
  console.log(`this is the new que no.: ${count22+1}`);

newqno=count22+1;
question2.create({qno:newqno,q:req.body.q,a:req.body.a,b:req.body.b,c:req.body.c,d:req.body.d,ca:req.body.ca})
//  question2.save();})
})
res.redirect('createquiz.html')
})

// app.get('/img.html',(req,res)=>{
//   res.redirect('../img.html')
// })
app.get('/about.html',(req,res)=>{
  res.redirect('about.html')
})
app.get('/contact.html',(req,res)=>{
  res.redirect('/createquiz.html')
})
// app.get('/img.html',(req,res)=>{
//   res.redirect('/createquiz.html')
// })

app.get('/quizz.html',(req,res)=>{
res.send({})


})





const { Server } = require("socket.io");
const io = new Server(server);


io.on('connection', (socket) => {
  socket.on('send-message',(message,room)=>{
      console.log(message)
      if(room===""){
          socket.broadcast.emit('receive-message',message)
      }else{
          socket.to(room).emit("receive-message",message)
          console.log(socket.id);
      }
  })

  socket.on('join-room',room=>{
      socket.join(room);
      console.log(`User joined room ${room} and its socket id is ${socket.id}`);
  })
});

app
app.use(bodyParser.json())
app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: true
}))
app.use(express.static('pu'))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs');

var db1 = mongoose.createConnection(mongoDB1)
var db2 = mongoose.createConnection(mongoDB2)
var db3 = mongoose.createConnection(mongoDB3)
var db4 = mongoose.createConnection(mongoDB4)

const contactSchema = new mongoose.Schema({
  username: {
    unique: true,
    type: String
  },
  password: String,
  email: {
    unique: true,
    type: String
  }
});
const qna = new mongoose.Schema({
  qno: Number,
  q: String,
  a: String,
  b: String,
  c: String,
  d: String,
  ca: String
});

mongoose.pluralize(null);
const m1 = db2.model('trigo', qna);
const m2 = db2.model('lines', qna);
const m3 = db2.model('algebra', qna);

const m4 = db3.model('bio', qna);
const m5 = db3.model('chem', qna);
const m6 = db3.model('genphy', qna);

const m7 = db4.model('ml', qna);
const m8 = db4.model('java', qna);
const m9 = db4.model('cpp', qna);


var count = 0;
var b = []
m1.find({}).then((user) => {
  count = user.length;
  for (let i = 0; i < 10; i++) {
    let a = ~~(1 + m.random() * (count - 1));
    m1.find({ qno: a }).then((user) => {
      b.push(user[0])
    });
  }
})

var count2 = 0;
var b2 = []
m2.find({}).then((user) => {
  count2 = user.length;
  for (let i = 0; i < 10; i++) {
    let a = ~~(1 + m.random() * (count2 - 1));
    m2.find({ qno: a }).then((user) => {
      b2.push(user[0])
    });
  }
})

var count3 = 0;
var b3 = []
m3.find({}).then((user) => {
  count = user.length;
  for (let i = 0; i < 10; i++) {
    var a = ~~(1 + m.random() * (count - 1));
    m3.find({ qno: a }).then((user) => {
      b3.push(user[0])
    });
  }
})

var count4 = 0;
var b4 = []
m4.find({}).then((user) => {
  count = user.length;
  for (let i = 0; i < 10; i++) {
    var a = ~~(1 + m.random() * (count - 1));
    m4.find({ qno: a }).then((user) => {
      b4.push(user[0])
    });
  }
})

var count5 = 0;
var b5 = []
m5.find({}).then((user) => {
  count = user.length;
  for (let i = 0; i < 10; i++) {
    var a = ~~(1 + m.random() * (count - 1));
    m5.find({ qno: a }).then((user) => {
      b5.push(user[0])
    });
  }
})

var count6 = 0;
var b6 = []
m6.find({}).then((user) => {
  count = user.length;
  for (let i = 0; i < 10; i++) {
    var a = ~~(1 + m.random() * (count - 1));
    m6.find({ qno: a }).then((user) => {
      b6.push(user[0])
    });
  }
})

var count7 = 0;
var b7 = []
m7.find({}).then((user) => {
  count7 = user.length;
  for (let i = 0; i < 10; i++) {
    var a = ~~(1 + m.random() * (count7 - 1));
    m7.find({ qno: a }).then((user) => {
      b7.push(user[0])
    });
  }
})

var count8 = 0;
var b8 = []
m8.find({}).then((user) => {
  count8 = user.length;
  for (let i = 0; i < 10; i++) {
    var a = ~~(1 + m.random() * (count8 - 1));
    m8.find({ qno: a }).then((user) => {
      b8.push(user[0])
    });
  }
})

var count9 = 0;
var b9 = []
m9.find({}).then((user) => {
  count9 = user.length;
  for (let i = 0; i < 10; i++) {
    var a = ~~(1 + m.random() * (count9 - 1));
    m9.find({ qno: a }).then((user) => {
      b9.push(user[0])
    });
  }
})

var ad = -1;
var score = 0;
var qnoo = 1;

const Contact = db1.model('Kittens', contactSchema);

app.post('/signup', (req, res) => {
  console.log(req.body.username)
  if (req.body.username == '' || req.body.password == '' || req.body.email == '') {
    console.log("not right");
  } else {
    Contact.create({ username: req.body.username, password: req.body.password, email: req.body.email });
    return res.redirect('login.html')
  }
})

app.post('/login', (req, res) => {
  var a = req.body.username;
  var b = req.body.password;
  Contact.find({ username: a }).then((users) => {
    if (users.length == 0) {
      res.send("The user is not defined.")
    } else {
      if (users[0].password == b) {
        req.session.loggedIn = true
        return res.redirect('img.html');
      } else {
        res.send("The password is incorrect.")
      }
    }
  })
})

app.post('/que_trigo', (req, res) => {
  let anss = Object.keys(req.body)
  if (ad != -1) {
    if (anss[0] == b[ad].ca) {
      score += 5;
    }
  }
  if (qnoo <= 10) {
    ad += 1
    console.log(score)
    res.render('trigo', { dt: qnoo, dt1: b[ad].q, dt2: b[ad].a, dt3: b[ad].b, dt4: b[ad].c, dt5: b[ad].d })
    qnoo += 1
  } else {
    ad = -1
    qnoo = 1
    return res.redirect('img.html')
  }
})

app.post('/que_lines', (req, res) => {
  let anss = Object.keys(req.body)
  if (ad != -1) {
    if (anss[0] == b2[ad].ca) {
      score += 5;
    }
  }
  if (qnoo <= 10) {
    ad += 1
    console.log(score)
    res.render('lines', { dt: qnoo, dt1: b2[ad].q, dt2: b2[ad].a, dt3: b2[ad].b, dt4: b2[ad].c, dt5: b2[ad].d })
    qnoo += 1
  } else {
    ad = -1
    qnoo = 1
    return res.redirect('img.html')
  }
})

app.post('/que_algebra', (req, res) => {
  let anss = Object.keys(req.body)
  if (ad != -1) {
    if (anss[0] == b3[ad].ca) {
      score += 5;
    }
  }
  if (qnoo <= 10) {
    ad += 1
    console.log(score)
    res.render('algebra', { dt: qnoo, dt1: b3[ad].q, dt2: b3[ad].a, dt3: b3[ad].b, dt4: b3[ad].c, dt5: b3[ad].d })
    qnoo += 1
  } else {
    ad = -1
    qnoo = 1
    return res.redirect('img.html')
  }
})


app.post('/que_bio', (req, res) => {
  let anss = Object.keys(req.body)
  if (ad != -1) {
    if (anss[0] == b4[ad].ca) {
      score += 5;
    }
  }
  if (qnoo <= 10) {
    ad += 1
    console.log(score)
    res.render('bio', { dt: qnoo, dt1: b4[ad].q, dt2: b4[ad].a, dt3: b4[ad].b, dt4: b4[ad].c, dt5: b4[ad].d })
    qnoo += 1
  } else {
    ad = -1
    qnoo = 1
    return res.redirect('img.html')
  }
})

app.post('/que_chem', (req, res) => {
  let anss = Object.keys(req.body)
  if (ad != -1) {
    if (anss[0] == b5[ad].ca) {
      score += 5;
    }
  }
  if (qnoo <= 10) {
    ad += 1
    console.log(score)
    res.render('chem', { dt: qnoo, dt1: b5[ad].q, dt2: b5[ad].a, dt3: b5[ad].b, dt4: b5[ad].c, dt5: b5[ad].d })
    qnoo += 1
  } else {
    ad = -1
    qnoo = 1
    return res.redirect('img.html')
  }
})

app.post('/que_genphy', (req, res) => {
  let anss = Object.keys(req.body)
  if (ad != -1) {
    if (anss[0] == b6[ad].ca) {
      score += 5;
    }
  }
  if (qnoo <= 10) {
    ad += 1
    console.log(score)
    res.render('genphy', { dt: qnoo, dt1: b6[ad].q, dt2: b6[ad].a, dt3: b6[ad].b, dt4: b6[ad].c, dt5: b6[ad].d })
    qnoo += 1
  } else {
    ad = -1
    qnoo = 1
    return res.redirect('img.html')
  }
})

app.post('/que_cpp', (req, res) => {
  let anss = Object.keys(req.body)
  if (ad != -1) {
    if (anss[0] == b9[ad].ca) {
      score += 5;
    }
  }
  if (qnoo <= 10) {
    ad += 1
    console.log(score)
    res.render('cpp', { dt: qnoo, dt1: b9[ad].q, dt2: b9[ad].a, dt3: b9[ad].b, dt4: b9[ad].c, dt5: b9[ad].d })
    qnoo += 1
  } else {
    ad = -1
    qnoo = 1
    return res.redirect('img.html')
  }
})

app.post('/que_java', (req, res) => {
  let anss = Object.keys(req.body)
  if (ad != -1) {
    if (anss[0] == b8[ad].ca) {
      score += 5;
    }
  }
  if (qnoo <= 10) {
    ad += 1
    console.log(score)
    res.render('java', { dt: qnoo, dt1: b8[ad].q, dt2: b8[ad].a, dt3: b8[ad].b, dt4: b8[ad].c, dt5: b8[ad].d })
    qnoo += 1
  } else {
    ad = -1
    qnoo = 1
    return res.redirect('img.html')
  }
})

app.post('/que_ml', (req, res) => {
  let anss = Object.keys(req.body)
  if (ad != -1) {
    if (anss[0] == b7[ad].ca) {
      score += 5;
    }
  }
  if (qnoo <= 10) {
    ad += 1
    console.log(score)
    res.render('ml', { dt: qnoo, dt1: b7[ad].q, dt2: b7[ad].a, dt3: b7[ad].b, dt4: b7[ad].c, dt5: b7[ad].d })
    qnoo += 1
  } else {
    ad = -1
    qnoo = 1
    return res.redirect('img.html')
  }
})


app.get('/', (req, res) => {
  return res.redirect('login.html');
})

app.get('/signup', (req, res) => {
  return res.redirect('signup.html');
})

app.get('/maths', (req, res) => {
  if(!req.session.loggedIn){
    return res.redirect('login.html')
  }
  return res.redirect('maths.html');
})

app.get('/science', (req, res) => {
  if(!req.session.loggedIn){
    return res.redirect('login.html')
  }
  return res.redirect('science.html');
})

app.get('/computer', (req, res) => {
  if(!req.session.loggedIn){
    return res.redirect('login.html')
  }
  return res.redirect('computer.html');
})

app.get('/english', (req, res) => {
  if(!req.session.loggedIn){
    return res.redirect('login.html')
  }
  return res.redirect('english.html');
})

app.get('/humanities', (req, res) => {
  if(!req.session.loggedIn){
    return res.redirect('login.html')
  }
  return res.redirect('humanities.html');
})

app.get('/general', (req, res) => {
  if(!req.session.loggedIn){
    return res.redirect('login.html')
  }
  return res.redirect('general.html');
})

app.get('/img', (req, res) => {
  if(!req.session.loggedIn){
    return res.redirect('login.html')
  }
  return res.redirect('/login?error=1');
})

app.get('/lobby',(req,res)=>{
  return res.redirect('lobby.html');
})

// app.get('/login',(req,res)=>{
//   return res.redirect('img.html');
// })

server.listen(8000, () => {
  
console.log(`Server is running on port : 5000 http://${hostname}:${port}`);
});