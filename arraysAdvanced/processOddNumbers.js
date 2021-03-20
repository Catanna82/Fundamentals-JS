function processOddNumbers (numArr) {

    console.log (numArr.filter((v, i) => (i % 2) == 1)
    .map(x => x * 2)
    .reverse()
    .join(' '));

}

processOddNumbers ([3, 0, 10, 4, 7, 3]);