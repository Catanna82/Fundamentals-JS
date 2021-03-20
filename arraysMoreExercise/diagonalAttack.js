function diagonalAttack(data) {
    const myArr = data.map(v => v.split(' ').map(Number));

    let sumMain = 0;
    let sumSecondary = 0;
    const size = myArr.length;
    for(let i = 0; i < size; i++) {
        sumMain += myArr[i][i];
        sumSecondary += myArr[i][size - 1 - i];
    }
    if (sumMain === sumSecondary) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j ++) {
                if (i !== j && j !== size - 1 - i) {
                    myArr[i][j] = sumMain;
                }
            }
        }
    }
    console.log(myArr.map(v => v.join(' ')).join('\n'));
}

diagonalAttack(
    ['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
    
);
