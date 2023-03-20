const but=document.querySelector('#b3')
but.addEventListener('click',bar)
let ans=[]
function bar(){
    console.log("Button is clicked")
    let a=document.querySelector('#b1')
    let b=document.querySelector('#b2')
    let val=a.value
    let arr=["Machine Learning","Java","C++","SQL","Python","Web Development"]
    if (a.value=="") {
        b.innerHTML=""
        b.innerHTML+='<h3>No results found</h3>';
    } else {
        if(ans.length==0){
            let count=0;
            for (let index = 0; index < arr.length; index++) {
                var c=arr[index].toLowerCase();
                if(c.includes(a.value) && a.value!=""){
                    b.innerHTML+='<a href="">' +arr[index] +"</a>";
                    count+=1;
                }
            }
            if(count==0){b.innerHTML+='<h3>No results found</h3>';}
            ans.push(val)
        }else{
            if(val!=ans[0] && a.value!=""){
                b.innerHTML="";
                let count=0;
                for (let index = 0; index < arr.length; index++) {
                    var c=arr[index].toLowerCase();
                    if(c.includes(a.value)){
                        b.innerHTML+='<a href="" class="a3">' +arr[index] +"</a>";
                        count+=1;
                    }
                }
                if(count==0){b.innerHTML+='<h3>No results found</h3>';}
                ans.pop()
                ans.push(val)
            }
        }
    }
    console.log(ans)
    // let d=document.getElementsByClassName("a3")
    b.style.display='block';
}


let s1=document.querySelector('.trigonometry');

let s2=document.querySelector('.vector');

let s3=document.querySelector('.algebra');

let s4=document.querySelector('.arithmetic');

let s5=document.querySelector('.coordinate');

let s6=document.querySelector('.geometry');
s4.addEventListener('click',run1);
s5.addEventListener('click',run1);
s6.addEventListener('click',run1);

s1.addEventListener('click',runtrig);
s2.addEventListener('click',runvect);
s3.addEventListener('click',runalgeb);
var scode=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="maths.css">

</head>
<body>
    <div class="navbar">
        <img src="./logo.png" alt="Quizzer Logo" class="logo" />
  
        <a href="img.html">Home</a>
  
        <div class="dropdown">
          <button class="dropbtn">Topic</button>
          <div class="dropdown-content">
            <a href="maths.html">Mathematics</a>
            <a href="science.html">Science</a>
            <a href="computer.html">Computer</a>
            <a href="english.html">English</a>
            <a href="humanities.html">Humanities</a>
            <a href="general.html">General Knowledge</a>
          </div>
        </div>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contacts</a>
  
        <button class="searchbtn" id="b3" type="submit"></button>
        <div class="a1">
          <!-- class="searchentry" -->
          <input id="b1" type="search" placeholder="Search" aria-label="Search" />
          <div id="b2" class="a2"></div>
        </div>
      </div>

      <div style="background-color: pink; height: 60px;"> 
      <h1 style="font-size: 250%; text-align: center;text-decoration: underline;"> Rules For Quiz</h1>

      </div>
  
      <div style="background-color: aliceblue; height: 500px; padding-left: 4%;">
         
   <ul> 
    
    <br><br><br>
    <li style="font-size: 200%;">Each question will be of two minutes.</li>
    <br><br>

   <li style="font-size: 200%;">Total of 10 questions will be present.</li>
   <br><br>

   <li style="font-size: 200%;">Each correct answer gives +5 marks.</li>
   <br><br>

   <li style="font-size: 200%;">Each wrong answer or unanswered question gives 0 marks.</li>
   <br><br><br><br><br>



</ul>
    <form action="/que_ml" method="post">
     <button style=" background-color: aqua;
     border-color: aquamarine;
     box-shadow: #ddd;
     font-size: 100%;
     padding-left:2%; padding-right:2%; font-size: 120%; border-color: black;
     "> Start Quiz</button>

</form>
      </div>

      <div class="bottom">



      </div>
      <div class="bottom2">
        <h3 style="color: rgb(255, 255, 255); font-size: 15px;padding-top: 10px; display: inline-block;">© 2023 ENDEAVOR
          OPERATING COMPANY, LLC.
          ALL RIGHTS RESERVED. IMG IS AN ENDEAVOR COMPANY.</h3>
        <a href="contact.html" class="bt">Contacts</a>
        <a href="about.html" class="bt">About Us</a>
    
      </div>


</body>
</html>`

// console.log(scode);
function runtrig(){
    document.body.innerHTML=scode;

}

function runvect(){
let scode1=scode.replace(`<form action="/que_ml" method="post">`,`<form action="/que_java" method="post">`)
document.body.innerHTML=scode1;
}

function runalgeb(){
  let scode2=scode.replace(`<form action="/que_ml" method="post">`,`<form action="/que_cpp" method="post">`)
    document.body.innerHTML=scode2;
}


function run1(){
    document.body.innerHTML=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="maths.css">
    
    </head>
    <body>
        <div class="navbar">
            <img src="./logo.png" alt="Quizzer Logo" class="logo" />
      
            <a href="img.html">Home</a>
      
            <div class="dropdown">
              <button class="dropbtn">Topic</button>
              <div class="dropdown-content">
                <a href="maths.html">Mathematics</a>
                <a href="science.html">Science</a>
                <a href="computer.html">Computer</a>
                <a href="english.html">English</a>
                <a href="humanities.html">Humanities</a>
                <a href="general.html">General Knowledge</a>
              </div>
            </div>
            <a href="#news">About Us</a>
            <a href="#contacts">Contacts</a>
      
            <button class="searchbtn" id="b3" type="submit"></button>
            <div class="a1">
              <!-- class="searchentry" -->
              <input id="b1" type="search" placeholder="Search" aria-label="Search" />
              <div id="b2" class="a2"></div>
            </div>
          </div>
    
          <div style="background-color: pink; height: 60px;"> 
          <h1 style="font-size: 250%; text-align: center;text-decoration: underline;"> Rules For Quiz</h1>
    
          </div>
      
          <div style="background-color: aliceblue; height: 500px; padding-left: 4%;">
             
       <ul> 
        
        <br><br><br>
        <li style="font-size: 200%;">Each question will be of two minutes.</li>
        <br><br>
    
       <li style="font-size: 200%;">Total of 10 questions will be present.</li>
       <br><br>
    
       <li style="font-size: 200%;">Each correct answer gives +5 marks.</li>
       <br><br>
    
       <li style="font-size: 200%;">Each wrong answer or unanswered question gives 0 marks.</li>
       <br><br><br><br><br>
    
    
    
    </ul>
        
         <button style=" background-color: aqua;
         border-color: aquamarine;
         box-shadow: #ddd;
         font-size: 100%;
         padding-left:2%; padding-right:2%; font-size: 120%; border-color: black;
         "> <a href="notquiz.html" style="text-decoration: none;
         color: black;"> Start Quiz </a></button>
    
    
          </div>
    
    
    </body>
    </html>`

}