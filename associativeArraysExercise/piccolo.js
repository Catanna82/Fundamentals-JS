function picolo(params) {

    let parkingInfo = new Set();

    for (const el of params) {
        let [command, number] = el.split(', ');
        switch (command) {
            case 'IN':
                parkingInfo.add(number);
                break;
            case 'OUT':
                if (parkingInfo.has(number)) {
                    parkingInfo.delete(number);
                }
                break;
        }
    }
    let result = Array.from(parkingInfo);
    if (result.length > 0) {
        let sorted = result.sort();
        console.log(sorted.join('\n'));
    } else {
        console.log(`Parking Lot is Empty`);
    }
}

picolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']

);