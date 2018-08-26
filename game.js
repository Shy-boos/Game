var buttons = [];
var wojsko;
var grid = [];
var cell;
var v = 3;
var pozycja;

class cel {
  constructor(i, j, r = 200, g = 200, b = 200) {
    this.i = i;
    this.j = j;
    this.r = r;
    this.g = g;
    this.b = b;
    //this.draw();
  }
  draw() {
    stroke(0);
    fill(this.r, this.g, this.b);
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
    stroke(0);
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

  for (let ii = 4; ii < 7; ii++) {
    for (let jj = 4; jj < 6; jj++) {
      //grid[ii][jj].color=color(10, 10, 210);
      grid[ii][jj].r = 10;
      grid[ii][jj].g = 10;
      grid[ii][jj].b = 210;
    }
  }

  for (let x = 0; x < grid.length; x++) {
    // console.log(grid[x]);
    for (let y = 0; y < grid[x].length; y++) {
      grid[x][y].draw();
    }
  }
}

function draw() {
  // background(255);
  stroke(0);
  var x = wojsko.pozycjaX;
  var y = wojsko.pozycjaY;

  grid[x][y].r = 0;
  grid[x][y].g = 255;
  grid[x][y].b = 0;

  grid[x][y].draw();
  if (grid[x][y].r === 10 && grid[x][y].g === 10 && grid[x][y].b === 210) {
    wojsko.spedMult = 0.007;
    console.log("c");
  } else {
    wojsko.spedMult = 0.025;
  }
  if (x > 0) {
    grid[x - 1][y].draw();
  }
  if (x < grid.length) grid[x + 1][y].draw();
  if (x > 0 && y > 0) grid[x - 1][y - 1].draw();
  if (y > 0) grid[x][y - 1].draw();
  if (x < grid.length && y > 0) grid[x + 1][y - 1].draw();
  if (x > 0 && y < grid[0].length) grid[x - 1][y + 1].draw();
  if (x < grid.length && y < grid[0].length) {
    grid[x + 1][y + 1].draw();
  }
  if (y < grid[0].length) {
    grid[x][y + 1].draw();
  }

  control();
  buttons.forEach(button => button.show());
  fill(0);
  noStroke();
  rect(wojsko.x, wojsko.y, 5, 5, 255);

  //console.log(x, y);
  //
  // Did Leave Cell?
  //
  if (
    colision(
      grid[x][y].i,
      grid[x][y].j,
      grid[x][y].i + 10,
      grid[x][y].j + 10,
      wojsko.x + 2,
      wojsko.y + 2
    )
  ) {
  } else {
    //
    // Kierunki
    //
    if (isGridColliding(x - 1, y, wojsko.x, wojsko.y)) {
      // Left
      wojsko.pozycjaX = x - 1;
    } else if (isGridColliding(x + 1, y, wojsko.x, wojsko.y)) {
      // Right
      wojsko.pozycjaX = x + 1;
    } else if (isGridColliding(x, y - 1, wojsko.x, wojsko.y)) {
      // Top
      wojsko.pozycjaY = y - 1;
    } else if (isGridColliding(x, y + 1, wojsko.x, wojsko.y)) {
      // Down
      wojsko.pozycjaY = y + 1;
    }

    //
    // Skosy
    //
    else if (isGridColliding(x - 1, y - 1, wojsko.x, wojsko.y)) {
      // Left-Top
      wojsko.pozycjaX = x - 1;
      wojsko.pozycjaY = y - 1;
    } else if (isGridColliding(x + 1, y - 1, wojsko.x, wojsko.y)) {
      // Right-Top
      wojsko.pozycjaX = x + 1;
      wojsko.pozycjaY = y - 1;
    } else if (isGridColliding(x - 1, y + 1, wojsko.x, wojsko.y)) {
      // Left-Down
      wojsko.pozycjaX = x - 1;
      wojsko.pozycjaY = y + 1;
    } else if (isGridColliding(x + 1, y + 1, wojsko.x, wojsko.y)) {
      // Right-Down
      wojsko.pozycjaX = x + 1;
      wojsko.pozycjaY = y + 1;
    }

    //
  }
} // Draw

class kropek {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.pozycjaX = 0;
    this.pozycjaY = 0;
    this.spedMult = 0.025;
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

      // Prędkość Wojska
      // Wojska Przysipieszą gdy FPS jest mało
      // zowlnią gdy jest ich dóżo
      //let spedMult = 0.025; // Mnożnik Prędkości
      let spedMult = wojsko.spedMult;
      let speed = (1000 / frameRate()) * spedMult;

      if (i == 0) {
        wojsko.x = wojsko.x + 1 * speed;
        wojsko.y = wojsko.y - 1 * speed;
      } else if (i == 1) {
        wojsko.y = wojsko.y - 1 * speed;
      } else if (i == 2) {
        wojsko.x = wojsko.x - 1 * speed;
        wojsko.y = wojsko.y - 1 * speed;
      } else if (i == 3) {
        wojsko.x = wojsko.x + 1 * speed;
      } else if (i == 4) {
        wojsko.x = wojsko.x - 0 * speed;
        wojsko.y = wojsko.y + 0 * speed;
      } else if (i == 5) {
        wojsko.x = wojsko.x - 1 * speed;
      } else if (i == 6) {
        wojsko.x = wojsko.x + 1 * speed;
        wojsko.y = wojsko.y + 1 * speed;
      } else if (i == 7) {
        wojsko.y = wojsko.y + 1 * speed;
      } else if (i == 8) {
        wojsko.x = wojsko.x - 1 * speed;
        wojsko.y = wojsko.y + 1 * speed;
      }
    } else buttons[i].active = false;
  }
}
function colision(Xmin, Ymin, Xmax, Ymax, pozX = mouseX, pozY = mouseY) {
  if (Xmax > pozX && Xmin < pozX) {
    if (Ymax > pozY && Ymin < pozY) {
      return true;
    }
  } else {
    return false;
  }
}
