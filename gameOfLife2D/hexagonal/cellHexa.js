class CellHexa extends Cell2D {

    constructor(x, y, alive, parentGrid) {
        super(x, y, alive, parentGrid);
    }

    computeCoordX(size) {
        let coordX;
        if ((this.y % 2) == 0) {
            coordX = (sqrt(3) / 2) * size + this.x * ((sqrt(3) / 2) * size);
        } else {
            coordX = (sqrt(3) / 4) * size + this.x * ((sqrt(3) / 2) * size);
        }
        return coordX;
    }

    computeCoordY(size) {
        let coordY = size / 2 + this.y * (3 / 4) * size;
        return coordY;
    }

    impactNeighbours(whichValue) {
        let x = this.x;
        let y = this.y;
        let Xmoins1 = (x == 0 ? (this.parentGrid.numX - 1) : x - 1);
        let Xplus1 = (x == (this.parentGrid.numX - 1) ? 0 : x + 1);
        let Ymoins1 = (y == 0 ? (this.parentGrid.numY - 1) : y - 1);
        let Yplus1 = (y == (this.parentGrid.numY - 1) ? 0 : y + 1);

        this.parentGrid.grid[x][Ymoins1].nbOfNeighbours += whichValue;
        this.parentGrid.grid[x][Yplus1].nbOfNeighbours += whichValue;
        this.parentGrid.grid[Xmoins1][y].nbOfNeighbours += whichValue;
        this.parentGrid.grid[Xplus1][y].nbOfNeighbours += whichValue;

        if (y % 2 == 0) {
            this.parentGrid.grid[Xplus1][Ymoins1].nbOfNeighbours += whichValue;
            this.parentGrid.grid[Xplus1][Yplus1].nbOfNeighbours += whichValue;
        } else {
            this.parentGrid.grid[Xmoins1][Ymoins1].nbOfNeighbours += whichValue;
            this.parentGrid.grid[Xmoins1][Yplus1].nbOfNeighbours += whichValue;
        }

    }


}