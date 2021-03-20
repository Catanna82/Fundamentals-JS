function positiveNegativeNumbers (dataArr) {
    let result = [];

    for (const num of dataArr) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    for (const num of result) {
        console.log(num);
    }
}
positiveNegativeNumbers([7, -2, 8, 9]);
positiveNegativeNumbers([3, -2, 0, -1]);
