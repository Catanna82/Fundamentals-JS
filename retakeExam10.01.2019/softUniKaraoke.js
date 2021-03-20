function softUniKaraoke(input) {
    let participants = input.shift();
    let listOfSongs = input.shift();
    let line;
    let awards = 0
    let winner = {};
    let win = []
    while ((line = input.shift()) !== 'dawn') {
        let [name, song, list] = line.split(', ');
        if (participants.includes(name) && listOfSongs.includes(song)) {
            awards = winner.awards + 1;
            winner.names = name;
            winner.awards = awards;
            winner.list += (`--${list}`);
            if (winner.names.hasOwnProperty(name)) {
                awards += 1
                winner.names = name;
                winner.awards += awards;
                winner.list += (`--${list}`);
            }
        }
    }
    if (winner.length === 0) {
        console.log(`No awards`);
    }
console.log(winner);
}

softUniKaraoke([
    'Trifon, Vankata, Gesha',
    "Dragana - Kukavice, Bon Jovi - It's my life, Lorde - Royals",
    "Gesha, Bon Jovi - It's my life, Best Rock",
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',
    'Vankata, PHP Web, Educational 101',
    'dawn'
]);

console.log('--------------');

softUniKaraoke([
    'Gesha',
    "Bon Jovi - It's my life",
    "Gesha, Bon Jovi - It's my life, Best Rock",
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',
    'Vankata, PHP Web, Educational 101',
    'dawn'
]);

console.log('--------------');

softUniKaraoke(['Sino', 'Vasko Naidenov - Nova Godina', 'dawn']);