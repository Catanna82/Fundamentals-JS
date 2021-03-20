function ladyBug (data) {
    const fieldSize = data[0];
    let positions = data[1].split(' ')
        .map((v) => {
            return parseInt(v)
        });
    const field = (new Array(fieldSize)).fill(0).map((v, i) => {
        if (positions.includes(i)) {
            return 1;
        } else {
            return 0;
        }
    });
    for (let i = 2; i < data.length; i++) {
        let [index, direction, speed] = data[i].split(' ');
        index = parseInt(index);
        speed = parseInt(speed);
        field[index] = 0;
        do {
            if (direction === 'right') {
                index += speed;
            } else if (direction === 'left') {
                index -= speed;
            }
        } while(field[index] === 1 && index < field.length);

        if (index < field.length) {
            field[index] = 1;
        }
    }
    console.log(field.join(' '));
}

ladyBug (
    [ 3, '0 1',
    '0 right 1',
    '2 right 1' ]
);
