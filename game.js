var buttons = [];
wojsko = new kropek();

function setup() {
  //createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(800, 800);
  background(0);
  fill(255);
  var x = 40;
  class button {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.h = h;
      this.w = w;
    }
    show() {
      rect(this.x, this.y, this.w, this.h);
    }
  }
  fill(255);
  buttons[0] = new button(640, 640, 49, 49);
  buttons[1] = new button(590, 640, 49, 49);
  buttons[2] = new button(540, 640, 49, 49);

  buttons[3] = new button(640, 690, 49, 49);
  buttons[4] = new button(590, 690, 49, 49);
  buttons[5] = new button(540, 690, 49, 49);

  //
  buttons[6] = new button(640, 740, 49, 49);
  buttons[7] = new button(590, 740, 49, 49);
  buttons[8] = new button(540, 740, 49, 49);

  stroke(230);
  fill(0, 0);
  ellipse(575 + x, 675 + x, 175);
}

function draw() {
  control();
  buttons.forEach(button => button.show());
  fill(255);
  noStroke();
  rect(wojsko.x, wojsko.y, 8, 8, 255);
}

class kropek {
  constructor() {
    x = 0;
    x = 0;
    this.x = x;
    this.y = y;
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
      if (i == 0) {
        wojsko.x = wojsko.x - 1;
        wojsko.y = wojsko.y - 1;
      } else if (i == 1) {
        wojsko.y = wojsko.y - 1;
      } else if (i == 2) {
        wojsko.x = wojsko.x + 1;
        wojsko.y = wojsko.y - 1;
      } else if (i == 3) {
        wojsko.x = wojsko.x - 1;
      } else if (i == 4) {
        wojsko.x = wojsko.x + 0;
        wojsko.y = wojsko.y + 0;
      } else if (i == 5) {
        wojsko.x = wojsko.x + 1;
      } else if (i == 6) {
        wojsko.x = wojsko.x - 1;
        wojsko.y = wojsko.y + 1;
      } else if (i == 7) {
        wojsko.y = wojsko.y + 1;
      } else if (i == 8) {
        wojsko.x = wojsko.x + 1;
        wojsko.y = wojsko.y + 1;
      }
    }
  }

  function colision(Xmin, Xmax, Ymin, Ymax) {
    if (Xmax > mouseX && Xmin < mouseX) {
      if (Ymax > mouseY && Ymin < mouseY) {
        return true;
      }
    } else {
      return false;
    }
  }
}
