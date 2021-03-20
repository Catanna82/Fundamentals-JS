function orbit([columns, rows, x, y]) {
    let newOrbit = [];
    for (let i = 0; i < rows; i++) {
        newOrbit.push((new Array(columns)).fill(0));
    }
    let digit = 1;
    let startRow = y;
    let endRow = y;
    let startCol = x;
    let endCol = x;
    while (startRow >= 0 || startCol >= 0 || endRow < rows || endCol < columns) {
        for (let i = startRow; i <= endRow; i++) {
            for (let j = startCol; j <= endCol; j++) {
                if (i >= 0 && j >= 0 && i < rows && j < columns && newOrbit[i][j] === 0) {
                    newOrbit[i][j] = digit;
                }
                
            }
        }
        startRow = y - digit;
        endRow = y + digit;
        startCol = x - digit;
        endCol = x + digit;
        digit++;
    }
    console.log(newOrbit.map(v => v.join(' ')).join('\n'));
}

orbit([5, 5, 2, 2]);
