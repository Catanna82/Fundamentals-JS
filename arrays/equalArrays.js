function equalArrays (firstArray, secondArray) {
    let index =  0;
    let newNumber = secondArray[index];
    let sum = 0;
    let isEqual = true;
    for (let i = 0; i < firstArray.length; i++){
        if (newNumber !== firstArray[i]){
            isEqual = false;
            break;
        } else {
            sum += Number(firstArray[i]);
            index++;
            newNumber = secondArray[index];
        }
    }
    if (!isEqual) {
        console.log(`Arrays are not identical. Found difference at ${index} index`)
    } else {
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}

equalArrays (['10','20','30'], ['10','20','30'])