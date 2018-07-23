var myGrid;

var framecompt = 0;
var running = false;
var count = 0;

var textPlay = "PAUSE";

// Parameters
var globalSize = 40;
var slowSize = 2;
var withInter = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  noSmooth();

  background(100);
  stroke(150);
  strokeWeight(0.5);

  myGrid = new GridHexa(globalSize, globalSize, (height / (globalSize+0.5))*(2/sqrt(3)));
  myGrid.initialize();
  myGrid.drawGrid();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  myGrid.cellSize = height / globalSize;
}

function draw() {
  displayInfos();
  let fpsControl = frameCount % slowSize;
  if (running && fpsControl == 0) {
    background(100);
    stroke(150);
    strokeWeight(0.5);
    if (withInter) {
      runSimWithInter();
    } else {
      runSimNoInter();
    }
  }
}

function displayInfos() {
  noStroke();
  fill(100);
  rect(height, 0, width - height, height);
  fill(255);
  textSize(height / 12);
  text(textPlay, height + 40, (height / 10));
  text("Iteration : " + floor(count / 2), height + 40, 2 * (height / 10));
}


function runSimWithInter() {
  if (count % 2 == 0) {
    myGrid.drawGrid();
    myGrid.prepareEvolution();
    count = count + 1;
  } else {
    myGrid.drawFutureGrid();
    myGrid.commitEvolution();
    count = count + 1;
  }
}

function runSimNoInter() {
  myGrid.drawGrid();
  myGrid.prepareEvolution();
  myGrid.commitEvolution();
  count = count + 2;
}


function keyPressed() {
  if (keyCode === ENTER && !running) {
    running = true;
    textPlay = "PLAY";
  } else if (keyCode === ENTER && running) {
    running = false;
    textPlay = "PAUSE";
  }
}

function mouseClicked() {
  myGrid.readClick();
  myGrid.drawGrid();
}