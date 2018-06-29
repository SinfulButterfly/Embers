var x=5;
if (x==5){
document.write(x)
;}
var y=3;
if (y==1){
document.write("\n first if\n");}
else if(y==2)
{document.write("\n second if\n");}
else {document.write("else")}
for (y=0;y<=3;y++){
switch(y)
{
   case 1:
   document.write(" first switch " );
   break;
   case 2:
   document.write(" second switch ");
   break;
   default:
   document.write(" else switch ");
}
}
hifunc("Lilo");
var result=confirm("Wanna leave?");
if (result=="true"){alert("thanks");}
else{alert("leave this place");}
function hifunc(name)
{alert("Hi,"+name);}
var sins={
amount:100,
severity:"100%",
Unforgivness:"100%",
reasonstolive:0,}
alert(sins.amount);
function sis(amount,time){
    this.amount=amount;
    this.time=time;
    }
var person=new sis(1,"few");
function persons(age,sins){
    this.age=age;
    this.sins=sins;
    this.sincalculation=function(age){
    this.age=age;
    }
   }
/*var pers=persons(100,100);
pers.sincalculation(1);
alert(pers.sins);*/
var n=prompt("Enter da numba");
alert("it's square root is " + Math.sqrt(n));
var d = new Date();
function allert(){alert("<3\n" + d);}
setInterval(allert,1000000000);

var a = document.getElementById("demo");
a.innerHTML = "Hello World!";
  var p = document.createElement("p");
  var node = document.createTextNode("Some new text");
  //adding the text to the paragraph
  p.appendChild(node);
  var div = document.getElementById("demo");
  div.appendChild(p);
var pos=0;
var box = document.getElementById('box');
function move() {
  if(pos >= 150) {
    clearInterval(t);
  }
  else {
    pos += 1;
    box.style.left = pos+"px";
  }
}
var t=setInterval(move,5);

var btn=document.getElementById("butt");
function lis(){alert(Math.random());btn.removeEventListener("click",lis);}
btn.addEventListener("click",lis);

var images = [
   "http://www.sololearn.com/uploads/slider/1.jpg",
   "http://www.sololearn.com/uploads/slider/2.jpg",
   "http://www.sololearn.com/uploads/slider/3.jpg"
];
var num=0;
function next(){
    var slider=document.getElementById("slider")
    num++;
    if(num>=images.length){num=0}
    slider.src=images[num];
    }