function searchNumber(firstNumbers, secondNumbers) {

    let newNumbersArr = firstNumbers.slice(0, secondNumbers[0]);
    let finalNumbersArr = newNumbersArr.slice(secondNumbers[1]);

    let counter = 0;

for (const element of finalNumbersArr) {
    if (element == secondNumbers[2]) {
         counter++;
     }
}
    console.log(`Number ${secondNumbers[2]} occurs ${counter} times.`);
}

searchNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    );