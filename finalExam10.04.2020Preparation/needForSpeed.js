function needForSpeed(params) {
    let n = Number(params.shift());
    let line;
    let cars = {};
    for (let i = 0; i < n; i++) {
        let [model, distance, fuel] = params.shift().split('|');
        cars[model] = { distance, fuel };
    }
    while ((line = params.shift()) !== 'Stop') {
        line = line.split(' : ');
        switch (line[0]) {
            case 'Drive':
                if (Number(cars[line[1]].fuel) < Number(line[3])) {
                    console.log('Not enough fuel to make that ride');
                } else {
                    cars[line[1]].fuel = Number(cars[line[1]].fuel) - Number(line[3]);
                    cars[line[1]].distance = Number(cars[line[1]].distance) + Number(line[2]);
                    console.log(`${line[1]} driven for ${Number(line[2])} kilometers. ${Number(line[3])} liters of fuel consumed.`);
                }
                if (Number(cars[line[1]].distance) >= 100000) {
                    console.log(`Time to sell the ${line[1]}!`);
                    delete cars[line[1]];
                }
                break;
            case 'Refuel':
                if ((Number(cars[line[1]].fuel) + Number(line[2])) > 75) {
                    console.log(`${line[1]} refueled with ${75 - Number(cars[line[1]].fuel)} liters`);
                    cars[line[1]].fuel = 75;
                } else {
                    cars[line[1]].fuel = Number(cars[line[1]].fuel) + Number(line[2]);
                    console.log(`${line[1]} refueled with ${line[2]} liters`);
                }
                break;
                case 'Revert':
                    cars[line[1]].distance = Number(cars[line[1]].distance) - Number(line[2]);
                    if (cars[line[1]].distance < '10000') {
                        cars[line[1]].distance = 10000;
                    } else {
                        console.log(`${line[1]} mileage decreased by ${line[2]} kilometers`);
                    }
                break;
        }
    }
    let sorted = Object.entries(cars).sort(compareCars);
    function compareCars(a, b) {
        let result = b[1].distance - a[1].distance;
        if (result === 0) {
            result = a[0].localeCompare(b[0]);
        }
        return result;
    }
    for (let cars of sorted) {
        console.log(`${cars[0]} -> Mileage: ${Number(cars[1].distance)} kms, Fuel in the tank: ${Number(cars[1].fuel)} lt.`);
    }
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);

console.log('----------------');

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]);