function spiralMatrix (rows, columns) {
    rows = Number(rows);
    columns = Number(columns);
    let totalArray = [];
    for (let i = 0; i < rows; i++) {
        totalArray.push((new Array(columns)).fill(0));
    }
    let digit = 0;
    let type = 'row'; // 'row', 'col'
    let index = 0; // index of <type>
    let startIndex = 0;
    let endIndex = columns - 2;
    let step = 1; // +- 1
    let count = 0; // total number of rows + columns filled

    while (digit < rows * columns) {
        if (step > 0) {
            // loop +
            for (let i = startIndex; i <= endIndex; i += step) {
                digit++;
                let rowIndex = 0;
                let columnIndex = 0;
                if (type === 'row') {
                    rowIndex = index;
                    columnIndex = i;
                } else if (type === 'col') {
                    rowIndex = i;
                    columnIndex = index;
                }
                totalArray[rowIndex][columnIndex] = digit;
            }
        } else {
            // loop -
            for (let i = startIndex; i >= endIndex; i += step) {
                digit++;
                let rowIndex = 0;
                let columnIndex = 0;
                if (type === 'row') {
                    rowIndex = index;
                    columnIndex = i;
                } else if (type === 'col') {
                    rowIndex = i;
                    columnIndex = index;
                }
                totalArray[rowIndex][columnIndex] = digit;
            }
        }
        count++;
    
        if (type === 'row') {
            type = 'col';
        } else if (type === 'col') {
            type = 'row';
        }
        if (count % 2 === 0) {
            step *= -1;
            if (step > 0) {
                // startIndex < endIndex
                index = Math.ceil(count / 4);
                startIndex = Math.ceil(count / 4);
                endIndex = columns - 2 - Math.ceil(count / 4);
                if (rows === columns && startIndex > endIndex) {
                    endIndex = startIndex;
                }
            } else {
                // endIndex < startIndex
                index = endIndex + 1;
                startIndex = endIndex + 1 - (rows - columns);
                endIndex = Math.ceil(count / 4);
            }
        } else {
            if (step > 0) {
                index = endIndex + 1;
                endIndex = endIndex + (rows - columns);
            } else {
                index = endIndex - 1;
                startIndex = startIndex + (rows - columns);
                // endIndex = endIndex + Math.ceil(count / 4) * (rows - columns);
            }
        }
    }

    console.log(totalArray.join('\n'));
};

spiralMatrix (8, 5);
