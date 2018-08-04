class Cell2D {

    constructor(x, y, alive, parentGrid) {
        this.x = x;
        this.y = y;
        this.alive = alive;
        this.nbOfNeighbours = 0;
        this.parentGrid = parentGrid;
    }


    evolveCell() {
        // console.log(`  evolveCell : x=${this.x}, y=${this.y}, alive=${this.alive}, nbNeig=${this.nbOfNeighbours} `);
        if (this.alive) {
            if (this.nbOfNeighbours < options.minNeighToLive || this.nbOfNeighbours > options.maxNeighToLive) {
                this.flagIsChanging();
            }
        } else {
            if (this.nbOfNeighbours >= options.minNeighToBorn && this.nbOfNeighbours <= options.maxNeighToBorn) {
                this.flagIsChanging();
            }
        }
    }

    switchCell() {
        this.alive = !this.alive;
        if (this.alive) {
            this.impactNeighbours(1);
        } else {
            this.impactNeighbours(-1);
        }

        // console.log(`  switchCell AFTER : x=${this.x}, y=${this.y}, alive=${this.alive}, nbNeig=${this.nbOfNeighbours} `);
    }

    changeNeighbours(whichValue) {
        this.nbOfNeighbours = this.nbOfNeighbours + whichValue;
    }

    flagIsChanging() {
        this.parentGrid.changingCells.push(this);
    }

}