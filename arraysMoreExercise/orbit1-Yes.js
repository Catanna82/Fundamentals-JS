function orbit(input) {
    let row = input[0];
    let col = input[1];
    let startRow = input[2];
    let startCol = input [3];
    let matrix = [];

    for (let i = 0; i < row; i++) {
        matrix.push([]);
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            matrix[i][j] = Math.max(Math.abs(i - startRow), Math.abs(j - startCol)) + 1;
        }
    }

    console.log(matrix.map(v => v.join(' ')).join('\n'));

}

orbit ([5, 5, 2, 2])