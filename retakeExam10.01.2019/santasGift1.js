function santasGifts(input) {
    let numberHouses = Number(input.shift());
    let houses = input.shift().split(' ');
    let santasPosition = 0;

    for (let i = 0; i < numberHouses; i++) {
        let line = input.shift().split(' ');
        let index;
        switch (line[0]) {
            case 'Forward':
                index = Number(line[1]);
                if (index >= 0 && index < numberHouses) {
                    santasPosition += index;
                    let deleted = houses.splice(santasPosition, 1);
                }
                break;
            case 'Back':
                index = Number(line[1]);
                if (index >= 0 && index < numberHouses) {
                    santasPosition -= index;
                    let removed = houses.splice(santasPosition, 1);
                }
                break;
            case 'Gift':
                index = Number(line[1]);
                if (index >= 0 && index < numberHouses) {
                    houses = houses.slice(0, index).concat(line[2]).concat(houses.slice(index));
                    santasPosition = index;
                }
                break;
            case 'Swap':
                let firstIndex = houses.indexOf(line[1]);
                let secondIndex = houses.indexOf(line[2]);
                if ((firstIndex >= 0 && secondIndex >= 0) && (firstIndex < numberHouses && secondIndex < numberHouses)) {
                    let houseSwaped = houses[firstIndex];
                    houses[firstIndex] = houses[secondIndex];
                    houses[secondIndex] = houseSwaped;
                }
                break;
        }
    }
    console.log(`Position: ${santasPosition}`);
    console.log(houses.join(', '));
}

santasGifts([
    '5',
    '255 500 54 78 98 24 30 47 69 58',
    'Forward 1',
    'Swap 54 47',
    'Gift 1 20',
    'Back 1',
    'Forward 3'
]);

console.log('---------------------');

santasGifts([
    '6',
    '50 40 25 63 78 54 66 77 24 87',
    'Forward 4',
    'Back 3',
    'Forward 3',
    'Gift 2 88',
    'Swap 50 87',
    'Forward 1'
]);
