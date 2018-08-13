class GridHexa extends Grid2D {

    constructor(numX, numY, cellSize) {
        super(numX, numY, cellSize);
    }

    initialize() {
        for (let x = 0; x < this.numX; x++) {
            this.grid[x] = [];
            for (let y = 0; y < this.numY; y++) {
                this.grid[x][y] = new CellHexa(x, y, false, this);
            }
        }
    }

    readClick() {
        let cellX = ceil(mouseX / this.cellSize);
        let cellY = ceil(mouseY / this.cellSize);
        if (cellX >= 0 && cellY >= 0 && cellX < this.numX && cellY < this.numY) {
            this.grid[cellX - 1][cellY - 1].switchCell();
        }
    }

    initializeBuffers() {
        this.bufLivingCell.fill(theme.livingColor);
        this.bufLivingCell.stroke(theme.strokeColor);
        this.bufLivingCell.strokeWeight(theme.strokeSize);
        Utils.polygon(this.bufLivingCell, this.cellSize / 2, this.cellSize / 2, this.cellSize / 2, 6);

        this.bufEmptyCell.fill(theme.emptyColor);
        this.bufEmptyCell.stroke(theme.strokeColor);
        this.bufEmptyCell.strokeWeight(theme.strokeSize);
        Utils.polygon(this.bufEmptyCell, this.cellSize / 2, this.cellSize / 2, this.cellSize / 2, 6);

        this.bufBornCell.fill(theme.bornColor);
        this.bufBornCell.stroke(theme.strokeColor);
        this.bufBornCell.strokeWeight(theme.strokeSize);
        Utils.polygon(this.bufBornCell, this.cellSize / 2, this.cellSize / 2, this.cellSize / 2, 6);

        this.bufDeadCell.fill(theme.deadColor);
        this.bufDeadCell.stroke(theme.strokeColor);
        this.bufDeadCell.strokeWeight(theme.strokeSize);
        Utils.polygon(this.bufDeadCell, this.cellSize / 2, this.cellSize / 2, this.cellSize / 2, 6);

        this.drawAllGrid(this.bufBackgroundGrid);
    }
}