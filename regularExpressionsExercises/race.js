function race(params) {
    let participants = params.shift().split(', ').map(v => ({
        name: v,
        score: 0
    }));
    let command = params.shift();

    while (command !== 'end of race') {
        let regName = /[A-Za-z]/g
        let regScore = /[0-9]/g
        let name = command.match(regName).join('');
        let result = command.match(regScore).reduce((a, c) => {
            a += Number(c);
            return a;
        }, 0);
        let index = participants.findIndex(x => x.name === name);
        if (index !== -1) {
            participants[index].score += result;
        }
        command = params.shift();
    }
    let sorted = participants.sort((a, b) => b.score - a.score);
    console.log(`1st place: ${sorted[0].name}`);
    console.log(`2nd place: ${sorted[1].name}`);
    console.log(`3rd place: ${sorted[2].name}`);

}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);