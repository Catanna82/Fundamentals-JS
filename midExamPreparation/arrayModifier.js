function arrayModifier(array) {

    let modifyArray = array.shift().split(' ').map(Number);
    let element = array.shift().split(' ');
    let command = element.shift();
    let index = Number(element.shift());
    let secondIndex = Number(element.shift());

    while (command !== 'end') {
        switch (command) {
            case 'swap':
                let el = modifyArray[index];
                let el2 = modifyArray[secondIndex];
                modifyArray[index] = el2;
                modifyArray[secondIndex] = el;
                break;
            case 'multiply':
                let multiply = Number(modifyArray[index]) * Number(modifyArray[secondIndex]);
                modifyArray[index] = multiply;
                break;
            case 'decrease':
                modifyArray.forEach((x, i) => modifyArray[i] -= 1);
                break;
        }
        element = array.shift().split(' ');
        command = element.shift();
        index = Number(element.shift());
        secondIndex = Number(element.shift());
    }
    console.log(modifyArray.join(', '));

}

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]
);
