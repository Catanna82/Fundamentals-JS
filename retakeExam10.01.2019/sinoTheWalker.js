function sinoTheWalker(input) {
    let hourStart = input.shift().split(':');
    let steps = Number(input.shift());
    let time = Number(input.shift());
    let h = Number(hourStart[0]);
    let m = Number(hourStart[1]);
    let s = Number(hourStart[2]);

    let seconds = Number(steps) * time;
    s += seconds;

    while (s > 59) {
        s -= 60;
        m += 1;
        if (m > 59) {
            m -= 60;
            h += 1;
        }
        if (h >= 23) {
            h = h - 24;
        }
    }
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    console.log(`Time Arrival: ${h}:${m}:${s}`)
}




// sinoTheWalker(['12:30:30', '90', '1']);

// console.log('----------');

sinoTheWalker(['23:49:13', '5424', '2', '']);