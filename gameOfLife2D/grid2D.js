class Grid2D {

    constructor(numX, numY, cellSize) {
        this.numX = numX;
        this.numY = numY;
        this.cellSize = cellSize;
        this.grid = [];
        this.changingCells = [];
        this.survivingCells = [];

        this.bufBackgroundGrid = createGraphics(numX * cellSize, numY * cellSize);
        this.bufBackgroundGrid.noSmooth();
        this.bufBackgroundGrid.noStroke();
        this.bufBackgroundGrid.imageMode(CENTER);

        this.bufGrid = createGraphics(numX * cellSize, numY * cellSize);
        this.bufGrid.noSmooth();
        this.bufGrid.noStroke();
        this.bufGrid.imageMode(CENTER);

        this.bufLivingCell = createGraphics(cellSize, cellSize);
        this.bufLivingCell.noSmooth();
        this.bufLivingCell.noStroke();

        this.bufEmptyCell = createGraphics(cellSize, cellSize);
        this.bufEmptyCell.noSmooth();
        this.bufEmptyCell.noStroke();

        this.bufBornCell = createGraphics(cellSize, cellSize);
        this.bufBornCell.noSmooth();
        this.bufBornCell.noStroke();

        this.bufDeadCell = createGraphics(cellSize, cellSize);
        this.bufDeadCell.noSmooth();
        this.bufDeadCell.noStroke();
    }

    prepareEvolution() {
        this.changingCells = [];
        this.survivingCells = [];
        this.grid.forEach(ligne => ligne.forEach(cell => cell.evolveCell()));
    }

    commitEvolution() {
        // console.log(this.changingCells);
        this.changingCells.forEach(cell => cell.switchCell());
    }

    drawLivingGrid(buffer) {
        this.changingCells.forEach(cell => {
            if (cell.alive) {
                cell.drawCell(this.cellSize, buffer);
            }
        });
        this.survivingCells.forEach(cell => cell.drawCell(this.cellSize, buffer));
    }

    drawFutureGrid(buffer) {
        this.changingCells.forEach(cell => cell.drawFutureCell(this.cellSize, buffer));
    }

    drawAllGrid(buffer) {
        this.grid.forEach(ligne => ligne.forEach(cell => cell.drawCell(this.cellSize, buffer)));
    }

    populateRandom(percentFull) {
        this.grid.forEach(ligne => ligne.forEach(cell => {
            if (random(100) <= percentFull) {
                cell.flagIsChanging();
            }
        }));
        this.commitEvolution();
    }


    populateDebug() {
        this.grid[15][15].flagIsChanging();
        this.grid[15][16].flagIsChanging();
        this.grid[16][15].flagIsChanging();
        this.grid[15][14].flagIsChanging();
        this.grid[14][15].flagIsChanging();
        this.grid[18][18].flagIsChanging();
        this.grid[18][16].flagIsChanging();
        this.grid[18][15].flagIsChanging();
        this.grid[18][14].flagIsChanging();
        this.grid[14][18].flagIsChanging();
        this.grid[15][18].flagIsChanging();
        this.grid[16][18].flagIsChanging();
        this.grid[17][17].flagIsChanging();
        this.grid[18][19].flagIsChanging();
        this.grid[13][13].flagIsChanging();
        this.grid[13][18].flagIsChanging();
        this.grid[13][15].flagIsChanging();
        this.grid[12][13].flagIsChanging();
        this.grid[18][20].flagIsChanging();
        this.grid[25][25].flagIsChanging();
        this.grid[25][26].flagIsChanging();
        this.grid[26][25].flagIsChanging();
        this.grid[25][24].flagIsChanging();
        this.grid[24][25].flagIsChanging();
        this.grid[28][28].flagIsChanging();
        this.grid[28][26].flagIsChanging();
        this.grid[28][25].flagIsChanging();
        this.grid[28][24].flagIsChanging();
        this.grid[24][28].flagIsChanging();
        this.grid[25][28].flagIsChanging();
        this.grid[26][28].flagIsChanging();
        this.grid[27][27].flagIsChanging();
        this.grid[28][29].flagIsChanging();
        this.grid[23][23].flagIsChanging();
        this.grid[23][28].flagIsChanging();
        this.grid[23][25].flagIsChanging();
        this.grid[22][23].flagIsChanging();
        this.grid[28][20].flagIsChanging();

        this.grid[1][1].flagIsChanging();
        this.grid[2][1].flagIsChanging();
        this.grid[3][1].flagIsChanging();

        this.commitEvolution();
    }

}