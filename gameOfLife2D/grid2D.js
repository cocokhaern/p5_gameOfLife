class Grid2D {

    constructor(numX, numY, cellSize) {
        this.numX = numX;
        this.numY = numY;
        this.cellSize = cellSize;
        this.grid = [];
    }

    prepareEvolution() {
        this.grid.forEach(ligne => ligne.forEach(cell => cell.evolveCell(this.howManyNeighbours(cell.x, cell.y))));
    }

    commitEvolution() {
        this.grid.forEach(ligne => ligne.forEach(cell => cell.commit()));
    }

    drawGrid() {
        this.grid.forEach(ligne => ligne.forEach(cell => cell.drawCell(this.cellSize)));
    }

    drawFutureGrid() {
        this.grid.forEach(ligne => ligne.forEach(cell => cell.drawFutureCell(this.cellSize)));
    }


}