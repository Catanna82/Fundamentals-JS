function memoryGame(params) {
    let sequence = params.shift().split(' ');
    let element = params.shift();
    let moves = 0
    while (element !== 'end') {
        moves++;
        let [x, y] = element.split(' ').map(Number);
        if (x === y || x < 0 || y < 0
            || x >= sequence.length
            || y >= sequence.length) {
            let add = `-${moves}a`;
            sequence.splice((sequence.length / 2), 0, add, add);
            console.log(`Invalid input! Adding additional elements to the board`);
            element = params.shift();
            continue;
        }
        if (sequence[x] === sequence[y]) {
            let el = sequence[x];
            sequence.splice(x, 1);
            let index = sequence.indexOf(el)
            sequence.splice(index, 1);
            console.log(`Congrats! You have found matching elements - ${el}!`);
        } else {
            console.log(`Try again!`);
        }
        if (sequence.length === 0) {
            console.log(`You have won in ${moves} turns! `);
            break;
        }
        element = params.shift();
    }
    if (sequence.length > 0) {
        console.log(`Sorry you lose :(\n${sequence.join(' ')}`)
    }

}

memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
);