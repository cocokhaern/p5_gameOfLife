class GridSquare extends Grid2D {

    constructor(numX, numY, cellSize) {
        super(numX, numY, cellSize);
    }

    initialize() {
        for (let x = 0; x < this.numX; x++) {
            this.grid[x] = [];
            for (let y = 0; y < this.numY; y++) {
                this.grid[x][y] = new CellSquare(x, y, false);
            }
        }
        this.grid[15][15].state = true;
        this.grid[15][16].state = true;
        this.grid[16][15].state = true;
        this.grid[15][14].state = true;
        this.grid[14][15].state = true;
        this.grid[18][18].state = true;
        this.grid[18][16].state = true;
        this.grid[18][15].state = true;
        this.grid[18][14].state = true;
        this.grid[14][18].state = true;
        this.grid[15][18].state = true;
        this.grid[15][18].state = true;
        this.grid[16][18].state = true;
        this.grid[17][17].state = true;
        this.grid[18][19].state = true;
        this.grid[13][13].state = true;
        this.grid[13][18].state = true;
        this.grid[13][15].state = true;
        this.grid[12][13].state = true;
        this.grid[18][20].state = true;
        this.grid[25][25].state = true;
        this.grid[25][26].state = true;
        this.grid[26][25].state = true;
        this.grid[25][24].state = true;
        this.grid[24][25].state = true;
        this.grid[28][28].state = true;
        this.grid[28][26].state = true;
        this.grid[28][25].state = true;
        this.grid[28][24].state = true;
        this.grid[24][28].state = true;
        this.grid[25][28].state = true;
        this.grid[25][28].state = true;
        this.grid[26][28].state = true;
        this.grid[27][27].state = true;
        this.grid[28][29].state = true;
        this.grid[23][23].state = true;
        this.grid[23][28].state = true;
        this.grid[23][25].state = true;
        this.grid[22][23].state = true;
        this.grid[28][20].state = true;
    }

    howManyNeighbours(nX, nY) {
        let nbVoisins = 0;
        for (let x = (nX - 1); x <= (nX + 1); x++) {
            for (let y = (nY - 1); y <= (nY + 1); y++) {
                if (x >= 0 && y >= 0 && x < this.numX && y < this.numY) {
                    if (!(x == nX && y == nY) && this.grid[x][y].state == true) {
                        nbVoisins = nbVoisins + 1;
                    }
                }
            }
        }
        return nbVoisins;
    }

    readClick() {
        let cellX = ceil(mouseX / this.cellSize);
        let cellY = ceil(mouseY / this.cellSize);
        this.grid[cellX-1][cellY-1].switchCell();
    }
}