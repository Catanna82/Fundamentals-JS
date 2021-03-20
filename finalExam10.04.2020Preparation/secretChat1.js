function secretChat(params) {
    let actions = {
        InsertSpace({ text, letter }) {
            let index = Number(letter);
            let firstLine = text.slice(0, index);
            let secondLine = text.slice(index);
            text = firstLine.concat(' ', secondLine);
            console.log(text);
            return text;
        },
        Reverse({ text, letter }) {
            if (text.includes(letter)) {
                text = text.replace(letter, '');
                let reversed = letter.split('').reverse().join('');
                text = text.concat(reversed);
                console.log(text);
            } else {
                console.log('error');
            }
            return text;
        },
        ChangeAll({ text, letter, repl }) {
            text = text.split(letter).join(repl);
            console.log(text);
            return text;
        }
    }

    let text = params.shift();
    let lines;

    while ((lines = params.shift()) !== 'Reveal') {
        let [command, letter, repl] = lines.split(':|:');
        text = actions[command]({text, letter, repl});
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