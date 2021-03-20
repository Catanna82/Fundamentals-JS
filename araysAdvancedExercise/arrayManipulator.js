function arrayManipulator(numbers, commands) {
let isPrint = false;

    for (let i = 0; i < commands.length; i++) {
        let element = commands[i].split(' ');
        let index = Number(element[1]);
        switch (element[0]) {
            case 'add':
                numbers.splice(index, 0, Number(element[2]));
                break;
            case 'addMany':
                element.shift();
                element.shift();
                element = element.map(Number);
                for (let a = 0; a < element.length; a++) {
                    numbers.splice(index++, 0, element[a]);
                }
                break;
            case 'contains':
                console.log(numbers.indexOf(Number(element[1])));
                break;
            case 'remove':
                numbers.splice(index, 1);
                break;
            case 'shift':
                for (let a = 0; a < index; a++) {
                    let current = numbers.shift();
                    numbers.push(current);
                }
                break;
            case 'sumPairs':
                let result = [];
                while (numbers.length > 0) {
                    let first = Number(numbers.shift());
                    let second = Number(numbers.shift()) || 0;
                    result.push(first + second);
                }
                numbers = result;
                break;
            case 'print':
                isPrint = true;
                break;
        }
        if (isPrint) {
            console.log(`[ ${numbers.join(', ')} ]`);
            break;
        }
    }
}

arrayManipulator (
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
    
    );