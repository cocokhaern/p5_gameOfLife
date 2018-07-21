class Cell {

    constructor(x, y, state) {
        this.x = x;
        this.y = y;
        this.state = state;
        this.futureState = false;
    }

    drawCell(size) {
        if (this.state == true) {
            fill(0);
        } else {
            fill(255);
        }
        rect(this.x * size, this.y * size, size, size);
    }

    drawFutureCell(size) {
        if (this.state == true && this.futureState == true) {
            fill(0);
        } else if (this.state == true && this.futureState == false) {
            fill(255, 0, 255);
        } else if (this.state == false && this.futureState == true) {
            fill(0, 255, 0);
        } else {
            fill(255);
        }
        rect(this.x * size, this.y * size, size, size);
    }

    evolveCell(nbVoisins) {
        if (this.state == false) {
            if (nbVoisins == 3) {
                this.futureState = true;
            }
        } else {
            if (nbVoisins >= 2 && nbVoisins <= 3) {
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