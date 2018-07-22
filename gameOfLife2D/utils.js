class Utils {

    static polygon(x, y, radius, npoints) {
        let angle = TWO_PI / npoints;
        let START = angle/2;
        beginShape();
        for (let a = START; a < TWO_PI+START; a += angle) {
            let sx = x + cos(a) * radius;
            let sy = y + sin(a) * radius;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }

}