function name(params) {
    let count = Number(params.shift());

    for (let i = 0; i < count; i++) {
        let reg = /^!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[A-Za-z]{8,})\]$/g;
        let element = params[i];
        let matches = reg.exec(element);
        if (matches !== null) {
            let output = matches.groups.message.split('').reduce((x, y) => {
                x.push(y.charCodeAt());
                return x;
            }, [`${matches.groups.command}:`]);
            console.log(output.join(' '));
        } else {
            console.log('The message is invalid');
        }
    }
}

name(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]']);

console.log('--------------');

name([
    '3',
    'go:[outside]',
    '!drive!:YourCarToACarWash',
    '!Watch!:[LordofTheRings]'
]);

console.log('-------------');

name([
    '3',
    '!play!:[TheNewSong]',
    '!Ride!:[Bike]',
    '!Watch!:[LordofTheRings]'
]);