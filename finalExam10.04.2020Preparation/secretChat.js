function secretChat(params) {

    let text = params.shift();
    let lines;
    let index;
    while ((lines = params.shift()) !== 'Reveal') {
        let [command, letter, repl] = lines.split(':|:');
        switch (command) {
            case 'InsertSpace':
                index = Number(letter);
                let firstLine = text.slice(0, index);
                let secondLine = text.slice(index);
                text = firstLine.concat(' ', secondLine);
                console.log(text);
                break;
            case 'Reverse':
                if (text.includes(letter)) {
                    text = text.replace(letter, '');
                    let reversed = letter.split('').reverse().join('');
                    text = text.concat(reversed);
                    console.log(text);
                } else {
                    console.log('error');
                }
                break;
            case 'ChangeAll':
                text = text.split(letter).join(repl);
                console.log(text);
                break;
        }

    }
    console.log(`You have a new text message: ${text}`);
}


secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
console.log('----------------------------------');
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);