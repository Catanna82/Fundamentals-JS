function starEnigma(params) {
    let n = Number(params.shift());

    let attacked = [];
    let destroyed = [];
    for (let i = 0; i < n; i++) {
        let counter = params[i].match(/(s|t|a|r)/gi) && params[i].match(/(s|t|a|r)/gi).length;
        let current = params[i].split('').map(v => {
            return String.fromCharCode(v.charCodeAt() - counter);
        }).join('');

        let reg = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[A|D])![^@\-!:>]*->(?<soldierCount>\d+)/g;
        let valid = reg.exec(current);
        if (valid !== null) {
            if (valid.groups.type === 'A') {
                attacked.push(`-> ${valid.groups.planet}`);
            } else {
                destroyed.push(`-> ${valid.groups.planet}`);
            }
        }
    }
    attacked = attacked.sort((a, b) => a.localeCompare(b));
    destroyed = destroyed.sort((a, b) => a.localeCompare(b));
    attacked.unshift(`Attacked planets: ${attacked.length}`);
    console.log(attacked.join('\n'));
    destroyed.unshift(`Destroyed planets: ${destroyed.length}`);
    console.log(destroyed.join('\n'));
}

// starEnigma(['2', 'STCDoghudd4=63333$D$0A53333',
//     'EHfsytsnhf?8555&I&2C9555SR']
// );

starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]
);