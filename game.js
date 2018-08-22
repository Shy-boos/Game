var buttons=[];
function setup(){
scale(0.1, 0.1);
//createCanvas(window.innerWidth, window.innerHeight);
createCanvas(800,800);
background(0);
fill(255);
var x=40
class button {
constructor (x,y,w,h)
{
this.x=x;
this.y=y;
this.h=h;
this.w=w;
}
show ()
{rect(this.x,this.y,this.w,this.h)}
}
fill(255);
buttons[0]= new button(640,640,49,49)
buttons[1]= new button(590,640,49,49)
buttons[2]= new button(540,640,49,49)

buttons[3]= new button(640,690,49,49)
buttons[4]= new button(590,690,49,49)
buttons[5]= new button(540,690,49,49)

//
buttons[6]= new button(640,740,49,49)
buttons[7]= new button(590,740,49,49)
buttons[8]= new button(540,740,49,49)


stroke(230)
fill(0,0)
ellipse(575+x,675+x,175)

}
function draw(){

control();
buttons.forEach(button=>button.show())
fill(255);
noStroke();
rect(mouseX,mouseY,8,8,255);




}

class kropek {this.x=0;this.y;}



function control (kropek.x,kropek.y){
  
  for(let i=0; i<buttons.length; i++){
if(colision(buttons[i].x,buttons[i].y,buttons[i].x + buttons[i].w,buttons[i].y+buttons[i].h)){
    if(i==0){
    kropek.x=kropek.x+1
    kropek.y=kropek.y+
    }
  }
  }
  
}
function colision(Xmin,Xmax,Ymin,Ymax)
{
  
   if(Xmax>mouseX && Xmin < mouseX){
      if(Ymax>mouseY && Ymin<mouseY){
      console.log('hdh')
      return true;
      
      }
   }
   else return false;
}