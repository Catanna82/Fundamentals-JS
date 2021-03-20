function numberModification(num) {
    let numStr = num.toString();
    let numArr = (numStr.split('').join('')).split('');
    let sum = 0;
    let divider;
    for (let j = 0; j < numArr.length; j++) {
        sum += Number(numArr[j]);
    }
    for (let i = 0; i < numArr.length; i++) {
        divider = numArr.length;
        if (sum / divider > 5) {
            break;
        } else {
            numArr.push('9');
            sum += 9;
        }
    }
    console.log(numArr.join(''));
}
numberModification(101);


