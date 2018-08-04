class Grid2D {

    constructor(numX, numY, cellSize) {
        this.numX = numX;
        this.numY = numY;
        this.cellSize = cellSize;
        this.grid = [];
        this.changingCells = [];
    }

    prepareEvolution() {
        this.changingCells = [];
        this.grid.forEach(ligne => ligne.forEach(cell => cell.evolveCell()));
    }

    commitEvolution() {
        this.changingCells.forEach(cell => cell.switchCell());
    }

    drawGridInit() {
        this.grid.forEach(ligne => ligne.forEach(cell => cell.drawCell(this.cellSize)));
    }

    drawChangingGrid() {
        // console.log(this.changingCells);
        this.changingCells.forEach(cell => cell.drawCell(this.cellSize));
    }

    drawAllGrid() {
        this.grid.forEach(ligne => ligne.forEach(cell => cell.drawCell(this.cellSize)));
    }

    drawFutureGrid() {
        this.changingCells.forEach(cell => cell.drawFutureCell(this.cellSize));
    }

}