var sub= document.querySelector("#dbname1");
// var click1=document.querySelector("#maths2");
// var click2=document.querySelector("#science2");
// var click3=document.querySelector("#computer2");
var sub2= document.querySelector("#dbinput2");
sub.addEventListener('click',fun);
sub2.addEventListener('click',fun);

// click1.addEventListener('click',fun);
// click2.addEventListener('click',fun);
// click3.addEventListener('click',fun);

// var dbname=b.value

// var dbname=b.value;
function fun(){
   
console.log("hiiiiii");
var b=document.querySelector('#dbname1');
   var a=document.querySelector('.chhupa1');
   var a1=document.querySelector('.chhupa11');
   var c=document.querySelector('.chhupa2');
   var c1=document.querySelector('.chhupa22');
   var d=document.querySelector('.chhupa3');
   var d1=document.querySelector('.chhupa33');

   if((b.value).toLowerCase()=='mathematics'){
        a.style.display='block';
        a1.style.display='block';
        c.style.display='none';
        c1.style.display='none';
        d.style.display='none';
        d1.style.display='none';
                             }



    if((b.value).toLowerCase()=='science'){
        c.style.display='block';
        c1.style.display='block';
        a.style.display='none';
        a1.style.display='none';
        d.style.display='none';
        d1.style.display='none';
                          }


    if((b.value).toLowerCase()=='computer'){
        d.style.display='block';
        d1.style.display='block';
        a.style.display='none';
        a1.style.display='none';
        c.style.display='none';
        c1.style.display='none';
                           }
    
}
// console.log(dbname);
// module.exports=dbname;

var bt1=document.querySelector('.withoutgrp');
bt1.addEventListener('click',funky);
function funky(){
let invite_c= Math.floor(Math.random()*900)+100;
console.log(invite_c);
var div1=document.querySelector('#code');
div1.innerHTML=`<br><br><br><label style="font-size:150%;">Your Invite Code For This Quiz Is:   ${invite_c} </label> <br> 
          <br><br>
<label style="font-size:150%;">Enter The Code:</label>
<input placeholder="XXX" style="font-size:130%;">
<br>
<br>
          <button id="quizchalu" type="button" style="padding:1.2%; font-size:120%; background-color: aqua;border-color: aqua;">Start Quiz</button>
          
          
          `;
console.log('funky chal rha hai');
div1.style.display='block';
}

var cc=document.getElementsByClassName("submitform");
cc.addEventListener('click',()=>{
  alert("Your Question Is Saved Into The Database!!");


})