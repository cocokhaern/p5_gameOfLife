class GridSquare extends Grid2D {

    constructor(numX, numY, cellSize) {
        super(numX, numY, cellSize);
    }

    initialize() {
        for (let x = 0; x < this.numX; x++) {
            this.grid[x] = [];
            for (let y = 0; y < this.numY; y++) {
                this.grid[x][y] = new CellSquare(x, y, false, this);
            }
        }
    }

    readClick() {
        let cellX = ceil(mouseX / this.cellSize);
        let cellY = ceil(mouseY / this.cellSize);
        this.grid[cellX - 1][cellY - 1].switchCell();
    }

    initializeBuffers() {
        this.bufLivingCell.rectMode(CENTER);
        this.bufLivingCell.fill(theme.livingColor);
        this.bufLivingCell.stroke(theme.strokeColor);
        this.bufLivingCell.strokeWeight(theme.strokeSize);
        this.bufLivingCell.rect(this.cellSize / 2, this.cellSize / 2, this.cellSize, this.cellSize);

        this.bufEmptyCell.rectMode(CENTER);
        this.bufEmptyCell.fill(theme.emptyColor);
        this.bufEmptyCell.stroke(theme.strokeColor);
        this.bufEmptyCell.strokeWeight(theme.strokeSize);
        this.bufEmptyCell.rect(this.cellSize / 2, this.cellSize / 2, this.cellSize, this.cellSize);

        this.bufBornCell.rectMode(CENTER);
        this.bufBornCell.fill(theme.bornColor);
        this.bufBornCell.stroke(theme.strokeColor);
        this.bufBornCell.strokeWeight(theme.strokeSize);
        this.bufBornCell.rect(this.cellSize / 2, this.cellSize / 2, this.cellSize, this.cellSize);

        this.bufDeadCell.rectMode(CENTER);
        this.bufDeadCell.fill(theme.deadColor);
        this.bufDeadCell.stroke(theme.strokeColor);
        this.bufDeadCell.strokeWeight(theme.strokeSize);
        this.bufDeadCell.rect(this.cellSize / 2, this.cellSize / 2, this.cellSize, this.cellSize);

        this.drawAllGrid(this.bufBackgroundGrid);

    }
}