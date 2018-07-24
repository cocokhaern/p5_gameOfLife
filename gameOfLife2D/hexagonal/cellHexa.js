class CellHexa extends Cell2D {

    constructor(x, y, state) {
        super(x, y, state);
    }

    drawCell(size) {
        if (this.state == true) {
            fill(theme.fullColor);
        } else {
            fill(theme.emptyColor);
        }
        let coordY = size/2 + this.y * (3 / 4) * size;
        let coordX;
        if ((this.y % 2) == 0) {
            coordX = (sqrt(3) / 2) * size + this.x * ((sqrt(3) / 2) * size);
        } else {
            coordX = (sqrt(3) / 4) * size + this.x * ((sqrt(3) / 2) * size);
        }
        Utils.polygon(coordX, coordY, size/2, 6);
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

        let coordY = size/2 + this.y * (3 / 4) * size;
        let coordX;
        if ((this.y % 2) == 0) {
            coordX = (sqrt(3) / 2) * size + this.x * ((sqrt(3) / 2) * size);
        } else {
            coordX = (sqrt(3) / 4) * size + this.x * ((sqrt(3) / 2) * size);
        }
        Utils.polygon(coordX, coordY, size/2, 6);
    }

}