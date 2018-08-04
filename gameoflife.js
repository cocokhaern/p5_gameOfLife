class GameOfLife {

  constructor(options) {
    this.options = options;
    this.count = 0;
    this.running = false;
    this.myGrid;
  }

  initializeGame() {
    this.myGrid = this.getNewGrid();
    this.myGrid.initialize();
    this.myGrid.drawChangingGrid();
  }

  getNewGrid() {
    let globSize = this.options.globalSize;
    switch (this.options.gridType) {
      case "hexa":
        return new GridHexa(globSize, globSize, (height / (globSize + 0.5)) * (2 / sqrt(3)));
      case "original":
        return new GridSquare(globSize, globSize, height / globSize);
      default:
        console.error(`Error on type of grid in general options : ${this.options.gridType}`);
        break;
    }
  }

  displayInfos() {
    noStroke();
    fill(theme.bgColor);
    rect(height, 0, width - height, height);
    fill(255);
    textSize(height / 12);
    let textPlay = (this.running ? "PLAY" : "PAUSE");
    text(textPlay, height + 40, (height / 10));
    text("Iteration : " + floor(this.count / 2), height + 40, 2 * (height / 10));
  }


  runSimWithInter() {
    if (this.count % 2 == 0) {
      this.myGrid.drawChangingGrid();
      this.count = this.count + 1;
    } else {
      this.myGrid.prepareEvolution();
      this.myGrid.commitEvolution();
      this.myGrid.drawFutureGrid();
      this.count = this.count + 1;
    }
  }

  runSimNoInter() {
    this.myGrid.prepareEvolution();
    this.myGrid.commitEvolution();
    this.myGrid.drawChangingGrid();
    this.count = this.count + 2;
  }
}