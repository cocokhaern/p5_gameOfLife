class Cell2D {

    constructor(x, y, state) {
        this.x = x;
        this.y = y;
        this.state = state;
        this.futureState = false;
    }


    evolveCell(nbVoisins) {
        if (this.state == false) {
            if (nbVoisins == 2) {
                this.futureState = true;
            }
        } else {
            if (nbVoisins >= 3 && nbVoisins <= 4) {
                this.futureState = true;
            }
        }
    }

    switchCell() {
        if (this.state == false) {
            this.state = true;
        } else {
            this.state = false;
        }
    }

    commit() {
        this.state = this.futureState;
        this.futureState = false;
    }

}