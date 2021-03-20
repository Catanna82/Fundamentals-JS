function myArray(data) {
    const columnSums = (new Array(data[0].length)).fill(0);
    const rowSums = (new Array(data.length)).fill(0);
    for (let i = 0; i < data.length; i++) { // row
        for (let j = 0; j < data[i].length; j++) { // column
            columnSums[j] += data[i][j];
            rowSums[i] += data[i][j];
        }
    }
    const result = columnSums.concat(rowSums).every(v => v === columnSums[0]);
    console.log(result);
};

myArray(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   
);
