function heartDelivery(array) {
    let neighborhood = array.shift().split('@').map(Number);
    let command = array.shift();

    let currentPosition = 0;
    while (command !== 'Love!') {
        command = command.split(' ');
        let jump = Number(command[1])

        if (currentPosition + jump < neighborhood.length) {
            currentPosition = currentPosition + jump;
        } else {
            currentPosition = 0;
        }
        neighborhood[currentPosition] -= 2;


        if (neighborhood[currentPosition] < 0) {
            neighborhood[currentPosition] = 0;
            console.log(`Place ${currentPosition} already had Valentine's day.`)
        } else if (neighborhood[currentPosition] === 0) {
            console.log(`Place ${currentPosition} has Valentine's day.`)
        }
        command = array.shift();
    }
    let failed = neighborhood.filter(x => x !== 0);
    console.log(`Cupid's last position was ${currentPosition}.`);
    failed.length !== 0
        ? console.log(`Cupid has failed ${failed.length} places.`)
        : console.log(`Mission was successful.`);
}

heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);