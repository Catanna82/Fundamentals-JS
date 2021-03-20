function activation(arr) {
    let key = arr.shift();
    let command = arr.shift();

    while (command !== 'Generate') {
        command = command.split('>>>');
        switch (command[0]) {
            case 'Contains':
                if (key.includes(command[1])) {
                    console.log(`${key} contains ${command[1]}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;
            case 'Flip':
                command[2] = Number(command[2]);
                command[3] = Number(command[3]);
                let newKey = key.split('');
                let flips = '';
                if (command[1] === 'Upper') {
                    flips = newKey.slice(command[2], command[3]).join('').toUpperCase();
                } else if (command[1] === 'Lower') {
                    flips = newKey.slice(command[2], command[3]).join('').toLowerCase();
                }
                newKey.splice(command[2], command[3] - command[2], flips);
                key = newKey.join('');
                console.log(key);
                break;
            case 'Slice':
                command[1] = Number(command[1]);
                command[2] = Number(command[2]);
                let newSliced = key.split('');
                newSliced.splice(command[1], command[2] - command[1]);
                key = newSliced.join('');
                console.log(key);
                break;
        }
        command = arr.shift();
    }
    console.log(`Your activation key is: ${key}`);
}

activation([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
]
);