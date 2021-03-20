function flightShedule(arr) {
    let specificSectorFlights = arr.shift();
    let statuses = arr.shift();
    let updated = {};
    let stats = {};


    for (let el of specificSectorFlights) {
        let [number, destination] = el.split(' ');
        updated[destination] = number;
    }
    for (let el of statuses) {
        let [number, command] = el.split(' ');
        if (!stats.hasOwnProperty(command)) {
            stats[command] = [];
            stats[command].push(number);
        } else {
            if(!stats[command].includes(number)) {
                stats[command].push(number);
            }
        }
    }
let flightsLeft = Object.values(stats);
 
    console.log(`Destination: ${updated.destination}, Status: ${stats.command} `);

}

flightShedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]
);