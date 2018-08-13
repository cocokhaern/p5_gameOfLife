class Cell2D {

    constructor(x, y, alive, parentGrid) {
        this.x = x;
        this.y = y;
        this.alive = alive;
        this.nbOfNeighbours = 0;
        this.parentGrid = parentGrid;
    }

    drawCell(size, buffer) {
        // console.log(buffer);
        if (this.alive) {
            buffer.image(this.parentGrid.bufLivingCell, this.computeCoordX(size), this.computeCoordY(size));
        } else {
            buffer.image(this.parentGrid.bufEmptyCell, this.computeCoordX(size), this.computeCoordY(size));
        }
    }

    drawFutureCell(size, buffer) {
        if (this.alive) {
            buffer.image(this.parentGrid.bufBornCell, this.computeCoordX(size), this.computeCoordY(size));
        } else {
            buffer.image(this.parentGrid.bufDeadCell, this.computeCoordX(size), this.computeCoordY(size));
        }
    }

    evolveCell() {
        // console.log(`  evolveCell : x=${this.x}, y=${this.y}, alive=${this.alive}, nbNeig=${this.nbOfNeighbours} `);
        if (this.alive) {
            if (this.nbOfNeighbours < options.minNeighToLive || this.nbOfNeighbours > options.maxNeighToLive) {
                this.flagIsChanging();
                // console.log(`  ... DIE!`);
            } else {
                this.flagIsSurviving();
                // console.log(`  ... SURVIVE!`);
            }
        } else {
            if (this.nbOfNeighbours >= options.minNeighToBorn && this.nbOfNeighbours <= options.maxNeighToBorn) {
                this.flagIsChanging();
                // console.log(`  ... BORN!`);
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

    flagIsChanging() {
        this.parentGrid.changingCells.push(this);
    }

    flagIsSurviving() {
        this.parentGrid.survivingCells.push(this);
    }
}