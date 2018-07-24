var gameoflife;

// General Options
options.globalSize = 80;
options.slowSize = 2;
options.withInter = true;

var theme;

function setup() {
  gameoflife = new GameOfLife(options);
  createCanvas(windowWidth, windowHeight);

 theme = {
    bgColor: color(70, 70, 70),
    strokeColor: color(0, 0, 0),
    bornColor: color(0, 255, 0),
    deadColor: color(255, 0, 255),
    fullColor: color(255, 255, 255),
    emptyColor: color(0, 0, 0)
  };

  frameRate(60);
  noSmooth();
  background(theme.bgColor);
  stroke(theme.strokeColor);
  strokeWeight(0.5);

  gameoflife.initializeGame();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  gameoflife.grid.cellSize = height / globalSize;
}

function draw() {
  gameoflife.displayInfos();
  let fpsControl = frameCount % options.slowSize;
  if (gameoflife.running && fpsControl == 0) {
    background(theme.bgColor);
    stroke(theme.strokeColor);
    strokeWeight(0.5);
    if (options.withInter) {
      gameoflife.runSimWithInter();
    } else {
      gameoflife.runSimNoInter();
    }
  }
}


function keyPressed() {
  if (keyCode === ENTER && !gameoflife.running) {
    gameoflife.running = true;
  } else if (keyCode === ENTER && gameoflife.running) {
    gameoflife.running = false;
  }
}

function mouseClicked() {
  gameoflife.grid.readClick();
  gameoflife.grid.drawGrid();
}