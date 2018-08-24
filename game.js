var buttons = [];
var wojsko;
var grid = [];
var cell;
var v = 3;
class cel {
  constructor(i, j, r = 255, g = 255, b = 255) {
    this.i = i;
    this.j = j;
    this.r = r;
    this.g = g;
    this.b = b;
    this.color = color(this.r, this.g, this.b);
    this.draw();
  }
  draw() {
    // stroke(0);
    fill(this.color);
    // fill(255);
    rect(this.i, this.j, 10, 10);
  }
}

class button {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.active = false;
  }
  show() {
    if (this.active) fill(0, 255, 0, 200);
    else fill(255, 200);

    rect(this.x, this.y, this.w, this.h);
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  black = color(0);
  // createCanvas(800, 800);

  //background(0);

  fill(255);
  wojsko = new kropek();

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
  var ellipseX = 40;
  ellipse(575 + ellipseX, 675 + ellipseX, 175);

  let x = 0;
  let y = 0;
  for (var i = 0; i < width; i = i + 10) {
    grid[x] = [];

    for (var j = 0; j < height; j = j + 10) {
      var wynik = i + j;
      grid[x][y] = new cel(i, j);
      y = y + 1;
    }
    x = x + 1;
    y = 0;
  }
}

function draw() {
  // background(255);
  console.log(frameRate());
  stroke(0);
  for (let x = 0; x < grid.length; x++) {
    // console.log(grid[x]);
    for (let y = 0; y < grid[x].length; y++) {
      grid[x][y].draw();
    }
  }

  control();
  buttons.forEach(button => button.show());
  fill(0);
  noStroke();
  rect(wojsko.x, wojsko.y, 5, 5, 255);
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
