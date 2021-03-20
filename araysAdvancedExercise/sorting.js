function sorting(numArr) {

    numArr = numArr.sort((a, b) => a - b);

    let newArr = [];

    while (numArr.length > 0) {
        let firstNum = numArr.pop();
        let secondNum = numArr.shift();
        newArr.push(firstNum, secondNum);
    }

console.log(newArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);