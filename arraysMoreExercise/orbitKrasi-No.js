function orbit(width, height, r, c) {
    const isPartInside = ({width, height}, {fromRow, toRow, fromCol, toCol}) => {
        return (fromRow >= 0 || toRow < height) && (fromCol >= 0 || toCol < width);
    };
    const isPointInside = ({width, height}, {row, col}) => {
        return (row >=0 && col >= 0 && row < height && col < width);
    };
    const array = (new Array(height)).fill([]).map(v => (new Array(width)).fill(0));
    let fromRow = r;
    let toRow = r;
    let fromCol = c;
    let toCol = c;
    let currentNumber = 1;
    while (isPartInside({width, height}, {fromRow, toRow, fromCol, toCol})) {
        for (let row = fromRow; row <= toRow; row++) {
            for (let col = fromCol; col <= toCol; col++) {
                if (isPointInside({width, height}, {row, col}) && array[row][col] === 0) {
                    array[row][col] = currentNumber;
                }
            }
        }
        currentNumber++;
        fromRow--;
        toRow++;
        fromCol--;
        toCol++;
    };
    return array.map(v => v.join(' ')).join('\n');
};

console.log(orbit(4, 4, 0, 0));