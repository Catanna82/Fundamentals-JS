function name(params) {
    let str = params.shift();
    let line;
    while ((line = params.shift()) !== 'Finish') {
        line = line.split(' ');
        switch (line[0]) {
            case 'Replace':
                str = str.split(line[1]).join(line[2]);
                console.log(str);
                break;
            case 'Cut':
                if (str[Number(line[1])] !== undefined && str[Number(line[2])] !== undefined) {
                    str = str.slice(0, Number(line[1])).concat(str.slice(Number(line[2]) + 1));
                    console.log(str);
                } else {
                    console.log('Invalid indices!');
                }
                break;
            case 'Make':
                if (line[1] === 'Upper') {
                    str = str.toUpperCase();
                } else if (line[1] === 'Lower') {
                    str = str.toLowerCase();
                }
                console.log(str);
                break;
            case 'Check':
                if (str.includes(line[1])) {
                    console.log(`Message contains ${line[1]}`);
                } else {
                    console.log(`Message doesn't contain ${line[1]}`);
                }
                break;
            case 'Sum':
                if (str[Number(line[1])] !== undefined && str[Number(line[2])] !== undefined) {
                    let sum = str.slice(Number(line[1]), Number(line[2]) + 1).split('').reduce((x, y) => {
                        return x + y.charCodeAt();
                    }, 0);
                    console.log(sum);
                } else {
                    console.log('Invalid indices!');
                }
                break;
        }
    }
}

name(["ILikeSharan",
    "Replace a e",
    "Make Upper",
    "Check SHEREN",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"]);
