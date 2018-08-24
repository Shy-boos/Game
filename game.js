var buttons = [];
var wojsko;
var grid=[[],[]];
var graphics;
var cell;

function setup() {

  createCanvas(window.innerWidth, window.innerHeight);
  // createCanvas(800, 800);
  
  graphics= createGraphics(window.innerWidth, window.innerHeight);
  graphics.clear()
  
  image(graphics,0,0)
  
  //background(0);
  
  class cel {
  constructor(i,j) {
    this.i = i;
    this.j = j;
    this.draw();
  }
  draw(){
  fill(255)
  rect(i,j,10,10)}
}
  for(var i=0;i<window.innerWidth;i=i+10){
  for(var j=0;j<((window.innerHeight));j=j+10){
  var wynik=i+j;
  cell= new cel(i,j);
  }
  }
  
  fill(255);
  wojsko = new kropek();
  var x = 40;
  class button {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.h = h;
      this.w = w;
      this.active = false;
    }
    show() {
      if (this.active) fill(0, 255, 0, 100);
      else fill(255, 100);

      rect(this.x, this.y, this.w, this.h);
    }
  }
  fill(255);
  buttons[0] = new button(640 - 350, 640 - 260, 49, 49);
  buttons[1] = new button(590 - 350, 640 - 260, 49, 49);
  buttons[2] = new button(540 - 350, 640 - 260, 49, 49);

  buttons[3] = new button(640 - 350, 690 - 260, 49, 49);
  buttons[4] = new button(590 - 350, 690 - 260, 49, 49);
  buttons[5] = new button(540 - 350, 690 - 260, 49, 49);

  //
  buttons[6] = new button(640 - 350, 740 - 260, 49, 49);
  buttons[7] = new button(590 - 350, 740 - 260, 49, 49);
  buttons[8] = new button(540 - 350, 740 - 260, 49, 49);

  stroke(230);
  fill(0, 0);
  ellipse(575 + x, 675 + x, 175);
}

function draw() {
  //background(255);
  
  
  control();
  buttons.forEach(button => button.show());
  graphics.fill(0);
  graphics.noStroke();
  graphics.rect(wojsko.x, wojsko.y, 8, 8, 255);
  
}

class kropek {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
}

function control() {
  for (let i = 0; i < buttons.length; i++) {
    if (
      colision(
        buttons[i].x,
        buttons[i].y,
        buttons[i].x + buttons[i].w,
        buttons[i].y + buttons[i].h
      )
    ) {
      buttons[i].active = true;

      if (i == 0) {
        wojsko.x = wojsko.x + 1;
        wojsko.y = wojsko.y - 1;
      } else if (i == 1) {
        wojsko.y = wojsko.y - 1;
      } else if (i == 2) {
        wojsko.x = wojsko.x - 1;
        wojsko.y = wojsko.y - 1;
      } else if (i == 3) {
        wojsko.x = wojsko.x + 1;
      } else if (i == 4) {
        wojsko.x = wojsko.x - 0;
        wojsko.y = wojsko.y + 0;
      } else if (i == 5) {
        wojsko.x = wojsko.x - 1;
      } else if (i == 6) {
        wojsko.x = wojsko.x + 1;
        wojsko.y = wojsko.y + 1;
      } else if (i == 7) {
        wojsko.y = wojsko.y + 1;
      } else if (i == 8) {
        wojsko.x = wojsko.x - 1;
        wojsko.y = wojsko.y + 1;
      }
    } else buttons[i].active = false;
  }

  function colision(Xmin, Ymin, Xmax, Ymax) {
    if (Xmax > mouseX && Xmin < mouseX) {
      if (Ymax > mouseY && Ymin < mouseY) {
        return true;
      }
    } else {
      return false;
    }
  }
}
