function mergeArrays (firstArray, secondArray) {
    let newArray = ''
    for (let i = 0; i < firstArray.length; i++){
        if (i % 2 === 0 && i !== firstArray.length - 1){
            newArray += Number (firstArray[i]) + Number (secondArray[i]) + ' ' + '-' + ' ';
        } else if (i % 2 !== 0 && i !== firstArray.length - 1){
            newArray += firstArray [i] + secondArray [i] + ' ' + '-' + ' ';
        } else if (i % 2 === 0 && i === firstArray.length - 1){
            newArray += Number(firstArray[i]) + Number (secondArray[i]);
        } else if (i % 2 !== 0 && i === firstArray.length - 1){
            newArray += firstArray [i] + secondArray [i];
        }
    }
    console.log(newArray);
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])
// решение от лекцията
function mergeArr(firstArr, secondArr) {
    let result = [];
    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 === 0){
        let sum = Number (firstArr[i]) + Number (secondArr[i]);
        result.push(sum);
    } else {
        result.push(firstArr[i] + secondArr[i]);
    }
}
console.log(result.join(' - '));
}
mergeArr(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])