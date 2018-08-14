var gameoflife;
var myCanvas

function setup() {
  let maxDimension = min(10 * windowWidth / 12, windowHeight);
  myCanvas = createCanvas(10 * windowWidth / 12, windowHeight);
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

  start();
};


function start() {
  myCanvas.clear();
  gameoflife = new GameOfLife(options);
  pauseButton.style.display = 'none';
  playButton.style.display = 'inline';
  gameoflife.initializeGame();
}

function windowResized() {
  let maxDimension = min(10 * windowWidth / 12, windowHeight);
  resizeCanvas(maxDimension, maxDimension);

  gameoflife.myGrid.cellSize = height / options.globalSize;
  gameoflife.myGrid.initializeBuffers();
  gameoflife.printBufferBackground();
};

function draw() {
  let fpsControl = frameCount % options.slowFactor;
  if (gameoflife.running && fpsControl == 0) {
    if (options.withInterState) {
      gameoflife.runSimWithInter();
    } else {
      gameoflife.runSimNoInter();
    }
  }
};

function setPause() {
  gameoflife.running = !gameoflife.running;
  switchPlayPause();
};

// function mouseClicked() {
//   gameoflife.grid.readClick();
//   gameoflife.grid.drawGrid();
// }