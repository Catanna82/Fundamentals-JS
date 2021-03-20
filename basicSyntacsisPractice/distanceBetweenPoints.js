function distance (x, y, x1, y1) {

    let distance = ((x1 - x) * (x1 - x)) + ((y1 - y) * (y1 - y));
    console.log (Math.sqrt(distance));
}

distance(2.34, 15.66, -13.55, -2.9985);