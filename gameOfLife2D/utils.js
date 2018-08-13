class Utils {

    static polygon(bufferG, x, y, radius, npoints) {
        let angle = TWO_PI / npoints;
        let START = angle / 2;
        bufferG.beginShape();
        for (let a = START; a < TWO_PI + START; a += angle) {
            let sx = x + cos(a) * radius;
            let sy = y + sin(a) * radius;
            bufferG.vertex(sx, sy);
        }
        bufferG.endShape(CLOSE);
    }

}