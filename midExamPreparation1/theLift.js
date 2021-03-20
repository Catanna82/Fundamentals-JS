function theLift(data) {
    let passingers = Number(data[0]);
    let wagons = data[1].split(' ').map(Number);

    while (passingers !== 0 && isFreeSpots(wagons)) {

        wagons = wagons.map(w => {
            let n = 4 - w; //number of people in the wagon
            if (n > passingers) {
                n = passingers;
            }
            passingers -= n;
            w += n;
            return w;
        });

    }
    function isFreeSpots(array) {
        return array.filter(x => x < 4).length > 0;
    };
    if (isFreeSpots(wagons)) {
        console.log(`The lift has empty spots!`);
    }
    if (passingers > 0) {
        console.log(`There isn't enough space! ${passingers} people in a queue!`);
    }
    console.log(wagons.join(' '));
}

theLift([
    "20",
    "0 0 0 0 0"
   ]
   
);