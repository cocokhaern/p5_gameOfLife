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

        this.commitEvolution();
    }

    readClick() {
        let cellX = ceil(mouseX / this.cellSize);
        let cellY = ceil(mouseY / this.cellSize);
        this.grid[cellX - 1][cellY - 1].switchCell();
    }
}