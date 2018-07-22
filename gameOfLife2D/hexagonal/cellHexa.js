class CellHexa extends Cell2D {

    constructor(x, y, state) {
        super(x, y, state);
    }

    drawCell(size) {
        if (this.state == true) {
            fill(0);
        } else {
            fill(255);
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
            fill(0);
        } else if (this.state == true && this.futureState == false) {
            fill(255, 0, 255);
        } else if (this.state == false && this.futureState == true) {
            fill(0, 255, 0);
        } else {
            fill(255);
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