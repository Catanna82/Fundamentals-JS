function spiralMatrix(n) {
    const matrix = [];
    let counter = 1;
    let startRow = 0;
    let endRow = n -1;
    let startCol = 0;
    let endCol = n-1;

    for (let i = 0; i < n; i++) {
        matrix.push(new Array(n).fill(0));
    }
    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            matrix[startRow][col] = counter++;
        }
        startRow++;
        for (let row = startRow; row <= endRow; row++) {
            matrix[row][endCol] = counter++;
        }
        endCol--;
        for (let col = endCol; col >= startCol; col--) {
            matrix[endRow][col] = counter++;
        }
        endRow--;
        for (let row = endRow; row >= startRow; row--) {
            matrix[row][startCol] = counter++;
        }
        startCol++
    }
    return (matrix.map(v => v.join(' '))).join('\n ');

}

console.log(spiralMatrix(6));