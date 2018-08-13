var gameoflife;

function setup() {
  gameoflife = new GameOfLife(options);
  let maxDimension = min(10 * windowWidth / 12, windowHeight);
  var myCanvas = createCanvas(10 * windowWidth / 12, windowHeight);
  myCanvas.parent('sketch-holder');

  theme = {
    bgColor: color(0, 0, 0),
    strokeColor: color(15, 15, 15),
    bornColor: color(200, 200, 200),
    deadColor: color(70, 70, 70),
    livingColor: color(255, 255, 255),
    emptyColor: color(30, 30, 30),
    strokeSize: 1,
  };
  imageMode(CORNER);
  frameRate(60);
  noSmooth();
  noStroke();
  // background(theme.bgColor);
  gameoflife.initializeGame();
}

function windowResized() {
  let maxDimension = min(10 * windowWidth / 12, windowHeight);
  resizeCanvas(maxDimension, maxDimension);

  gameoflife.myGrid.cellSize = height / options.globalSize;
  background(theme.bgColor);
  gameoflife.myGrid.drawAllGrid();
}

function draw() {
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