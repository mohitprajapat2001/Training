console.log("Hello World");
document.getElementById("p1").innerHTML = "<p>I am p tag in script</p>";
document.querySelector(".heading1").style.color = "red";
// document.querySelector(".heading2").style.visibility = "hidden";
document.querySelector(".heading3").style.fontSize = "10px";
document.querySelector(".heading2").style.background = "red";
function func(){
var v= prompt("Who are you?");  
alert("I am "+v);  
  
}  
setTimeout(function(){  
    alert("Welcome to Javascript after 2 seconds")  
    },2000);