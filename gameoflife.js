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
    this.myGrid.initializeBuffers();
    this.myGrid.populateRandom(20);
    this.myGrid.drawLivingGrid(this.myGrid.bufGrid);

    this.printBufferBackground();
    this.printBufferGrid();
  }

  getNewGrid() {
    let globSize = this.options.globalSize;
    switch (this.options.gridType) {
      case "hexa":
        return new GridHexa(globSize, globSize, ceil((height / (globSize + 0.5)) * (2 / sqrt(3))));
      case "original":
        return new GridSquare(globSize, globSize, ceil(height / globSize));
      default:
        console.error(`Error on type of grid in general options : ${this.options.gridType}, 'original' is used by default`);
        return new GridSquare(globSize, globSize, ceil(height / globSize));
    }
  }

  runSimWithInter() {
    if (this.count % 2 == 0) {
      this.printBufferBackground();
      this.clearBufferGrid();
      this.myGrid.drawLivingGrid(this.myGrid.bufGrid);
      this.printBufferGrid();
      this.count = this.count + 1;
    } else {
      this.clearBufferGrid();
      this.myGrid.prepareEvolution();
      this.myGrid.commitEvolution();
      this.myGrid.drawFutureGrid(this.myGrid.bufGrid);
      this.printBufferGrid();
      this.count = this.count + 1;
    }
  }


  runSimNoInter() {
    this.printBufferBackground();
    this.clearBufferGrid();
    this.myGrid.prepareEvolution();
    this.myGrid.commitEvolution();
    this.myGrid.drawLivingGrid(this.myGrid.bufGrid);
    this.printBufferGrid();
    this.count = this.count + 2;
  }

  printBufferBackground() {
    image(this.myGrid.bufBackgroundGrid, 0, 0);
  }

  printBufferGrid() {
    image(this.myGrid.bufGrid, 0, 0);
  }

  clearBufferGrid() {
    this.myGrid.bufGrid.clear();
  }
}