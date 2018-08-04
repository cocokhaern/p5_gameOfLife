class CellHexa extends Cell2D {

    constructor(x, y, alive, parentGrid) {
        super(x, y, alive, parentGrid);
    }

    drawCell(size) {
        if (this.alive) {
            fill(theme.fullColor);
        } else {
            fill(theme.emptyColor);
        }
        let coordY = size / 2 + this.y * (3 / 4) * size;
        let coordX;
        if ((this.y % 2) == 0) {
            coordX = (sqrt(3) / 2) * size + this.x * ((sqrt(3) / 2) * size);
        } else {
            coordX = (sqrt(3) / 4) * size + this.x * ((sqrt(3) / 2) * size);
        }
        Utils.polygon(coordX, coordY, size / 2, 6);
    }

    drawFutureCell(size) {
        if (this.alive) {
            fill(theme.bornColor);
        } else {
            fill(theme.deadColor);
        }

        let coordY = size / 2 + this.y * (3 / 4) * size;
        let coordX;
        if ((this.y % 2) == 0) {
            coordX = (sqrt(3) / 2) * size + this.x * ((sqrt(3) / 2) * size);
        } else {
            coordX = (sqrt(3) / 4) * size + this.x * ((sqrt(3) / 2) * size);
        }
        Utils.polygon(coordX, coordY, size / 2, 6);
    }

    impactNeighbours(whichValue) {
        let x = this.x;
        let y = this.y;
        let Xmoins1 = (x == 0 ? (this.parentGrid.numX - 1) : x - 1);
        let Xplus1 = (x == (this.parentGrid.numX - 1) ? 0 : x + 1);
        let Ymoins1 = (y == 0 ? (this.parentGrid.numY - 1) : y - 1);
        let Yplus1 = (y == (this.parentGrid.numY - 1) ? 0 : y + 1);

        this.parentGrid.grid[x][Ymoins1].changeNeighbours(whichValue);
        this.parentGrid.grid[x][Yplus1].changeNeighbours(whichValue);
        this.parentGrid.grid[Xmoins1][y].changeNeighbours(whichValue);
        this.parentGrid.grid[Xplus1][y].changeNeighbours(whichValue);

        if (y % 2 == 0) {
            this.parentGrid.grid[Xplus1][Ymoins1].changeNeighbours(whichValue);
            this.parentGrid.grid[Xplus1][Yplus1].changeNeighbours(whichValue);
        } else {
            this.parentGrid.grid[Xmoins1][Ymoins1].changeNeighbours(whichValue);
            this.parentGrid.grid[Xmoins1][Yplus1].changeNeighbours(whichValue);
        }

    }


}