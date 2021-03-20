function steamAccount(data) {
    // разделяме масива на парчета;
    // join не по ' ', а със ',';
    // обработваме парчетата едно по едно със switch;
    // всичката логика описваме в while цикъл;
    let games = data.shift().split(' ');

    for (let i = 0; i < data.length; i++) {
        let arr = data[i].split(' ');
        if (arr[0] === 'Play!') {
            break;
        }
        switch (arr[0]) {
            case 'Install':
                if (!games.includes(arr[1])) {
                    games.push(arr[1]);
                }
                break;
            case 'Uninstall':
                if (games.includes(arr[1])) {
                    const currentIndex = games.findIndex((v) => v === arr[1]);
                    let first = games.slice(0, currentIndex);
                    let last = games.slice(currentIndex + 1);
                    games = first.concat(last);
                }
                break;
            case 'Update':
                if (games.includes(arr[1])) {
                    const currentIndex = games.findIndex((v) => v === arr[1]);
                    let first = games.slice(0, currentIndex);
                    let last = games.slice(currentIndex + 1);
                    games = first.concat(last);
                    games.push(arr[1]);
                }
                break;
            case 'Expansion':
                const [game, expansion] = arr[1].split('-');
                if (games.includes(game)) {
                    const currentIndex = games.findIndex((v) => v === game);
                    let first = games.slice(0, currentIndex + 1);
                    let last = games.slice(currentIndex + 1);
                    games = first.concat([`${game}:${expansion}`]).concat(last);
                }
                break;
        }
    }
    console.log(games.join(' '));
};

steamAccount(
    ['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']
    
);
