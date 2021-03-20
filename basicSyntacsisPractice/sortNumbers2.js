function sortNumbers (firstNumber, secondNumber, thirdNumber) {
    const arr = [firstNumber, secondNumber, thirdNumber];
    const sorted = arr.sort().reverse();
    console.log(sorted.join('\n'));
}

sortNumbers (2, 1, 3);