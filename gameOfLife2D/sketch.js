var gameoflife;

function setup() {
  gameoflife = new GameOfLife(options);
  let maxDimension = min(windowWidth, windowHeight);
  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('sketch-holder');

  theme = {
    bgColor: color(0, 0, 0),
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
  noStroke();
  gameoflife.initializeGame();
}

function windowResized() {
  let maxDimension = min(windowWidth, windowHeight);
  resizeCanvas(maxDimension, maxDimension);
  // redraw();
  gameoflife.myGrid.cellSize = height / options.globalSize;
  background(theme.bgColor);
  gameoflife.myGrid.drawAllGrid();
}

function draw() {
  gameoflife.displayInfos();
  let fpsControl = frameCount % options.slowSize;
  if (gameoflife.running && fpsControl == 0) {
    if (options.withInter) {
      gameoflife.runSimWithInter();
    } else {
      gameoflife.runSimNoInter();
    }
  }
}


function setPause() {
  gameoflife.running = !gameoflife.running;
}

// function mouseClicked() {
//   gameoflife.grid.readClick();
//   gameoflife.grid.drawGrid();
// }