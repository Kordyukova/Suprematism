var circle = document.getElementById("circle");
var colors=['#f00','#0f0','#00f','#ff0'];
var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame
window.requestAnimationFrame = requestAnimationFrame;
var w=10;
var idColorleft=0;
var idColorright=1;
var idColortop=2;
var idColorbtm=3;
function animate(){
  w+=10;
  circle.style.borderWidth=w+"px";
  if(w>60){
    w=10;
    idColorleft=idColorleft>3?0:(idColorleft+1);
    idColorright=idColorright>3?0:(idColorright+1);
    idColortop=idColortop>3?0:(idColortop+1);
    idColorbtm=idColorbtm>3?0:(idColorbtm+1);
    var newCircle=document.createElement("div");
    newCircle.className="circle";
    circle.style.borderLeftColor=colors[idColorleft];
    circle.style.borderTopColor=colors[idColortop];
    circle.style.borderRightColor=colors[idColorright];
    circle.style.borderBottomColor=colors[idColorbtm];
    circle.appendChild(newCircle);
    circle=newCircle;
  }
  requestAnimationFrame(animate);
}

//animate();
circle.addEventListener('mouseover',animate);
circle.addEventListener('click',function(){
  document.removeChild(circle);
});
