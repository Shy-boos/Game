function isGridColliding(x, y, wojskoX, wojskoY) {
  // Did leave Grid Test
  if (x < 0) {
    return false;
  } else if (x > grid.length - 1) {
    return false;
  } else if (y < 0) {
    return false;
  } else if (y > grid[0].length - 1) {
    return false;
  }

  let condition = colision(
    grid[x][y].i,
    grid[x][y].j,
    grid[x][y].i + 10,
    grid[x][y].j + 10,
    wojskoX + 2,
    wojskoY + 2
  );
  return condition;
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
