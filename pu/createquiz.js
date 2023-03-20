var sub=document.querySelector(".sub1");
sub.addEventListener('click',fun);
function fun(){
   let b=document.querySelector('#que');
   var a=document.querySelector('#chhupa1');
   var b1=document.querySelector('#chhupa2');
   var c=document.querySelector('#chhupa3');
   if(b.value=='mathematics'){
    a.style.display='block';
    b1.style.display='none';
    c.style.display='none';}


    if(b.value=='science'){
    b1.style.display='block';
    a.style.display='none';
    c.style.display='none';}


    if(b.value=='computer'){
        c.style.display='block';
        a.style.display='none';
        b1.style.display='none';}
    
}


const mongoose = require('mongoose');
const express=require('express')
const app=express();

var abcd= document.querySelector('#que');
const dbname=abcd.value;

const mongoDB="mongodb://127.0.0.1:27017/dbname";
const bodyParser = require('body-parser');
const hostname = '127.0.0.1';
const port=3000;

app.use(bodyParser.json())
app.use(express.static('pu'))
app.use(bodyParser.urlencoded({
  extended:true
}))


mongoose.connect(mongoDB).then(()=> console.log("MongoDb connected.")).catch((err)=> console.log("Mongo Error",err));

const questionSchema = new mongoose.Schema({
     qno:Number,
     
     q: {
      unique:true,
      type:String},
    a: String,
    b: String,
    c: String,
    d: String,
    ca: String,
   
});
var abc=document.querySelector('#chhupa1');
const collname= abc.value;

const question = mongoose.model(collname, questionSchema);

var question1= new question({ qno:1, q:"what is a phuudarsan", a:"chutiya",b:"gaandu",c:"loddhuuu",d:"all of them",ca:"D"});

const mongoose = require('mongoose');
const express=require('express')
const app=express();

const mongoDB="mongodb://127.0.0.1:27017/dbname";
const bodyParser = require('body-parser');
const hostname = '127.0.0.1';
const port=3000;

app.use(bodyParser.json())
app.use(express.static('pu'))
app.use(bodyParser.urlencoded({
  extended:true
}))


mongoose.connect(mongoDB).then(()=> console.log("MongoDb connected.")).catch((err)=> console.log("Mongo Error",err));

const questionSchema = new mongoose.Schema({
     qno:Number,
     
     q: {
      unique:true,
      type:String},
    a: String,
    b: String,
    c: String,
    d: String,
    ca: String,
   
});
var abc=document.querySelector(#chhupa1)
const question = mongoose.model(collname, questionSchema);

var question1= new question({ qno:1, q:"what is a sudarsan", a:"chutiya",b:"gaandu",c:"lodu",d:"all of them",ca:"D"});

question1.save();