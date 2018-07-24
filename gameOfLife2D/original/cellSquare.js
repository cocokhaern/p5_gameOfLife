class CellSquare extends Cell2D {

    constructor(x, y, state) {
        super(x, y, state);
    }

    drawCell(size) {
        if (this.state == true) {
            fill(theme.fullColor);
        } else {
            fill(theme.emptyColor);
        }
        rect(this.x * size, this.y * size, size, size);
    }

    drawFutureCell(size) {
        if (this.state == true && this.futureState == true) {
            fill(theme.fullColor);
        } else if (this.state == true && this.futureState == false) {
            fill(theme.deadColor);
        } else if (this.state == false && this.futureState == true) {
            fill(theme.bornColor);
        } else {
            fill(theme.emptyColor);
        }
        rect(this.x * size, this.y * size, size, size);
    }

}