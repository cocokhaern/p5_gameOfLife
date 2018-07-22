class CellSquare extends Cell2D {

    constructor(x, y, state) {
        super(x, y, state);
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

}