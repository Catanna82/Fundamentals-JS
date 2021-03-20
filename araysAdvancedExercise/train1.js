function train (arr) {

    let wagons = arr.shift().split(' ').map(Number);
    let capacity = arr.shift();

while (arr.length > 0) {
    let command = arr.shift().split(' ');

    if (command.length === 1) {
        command = Number(command);
        wagons = addPassengers(wagons, command);
    }

    if (command.length > 1) {
        let numberForAdd = Number(command[1]);
        wagons.push(numberForAdd);
    }
}
console.log(wagons.join(' '));

function addPassengers (arr, numOfPassengers) {
    for (let i = 0; i < arr.length; i++) {
        let currentWagonSize = capacity - arr[i];
        if (numOfPassengers <= currentWagonSize) {
            arr[i] += numOfPassengers;
            break;
        }
    }
    return arr;
}

}
train (['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']

)
