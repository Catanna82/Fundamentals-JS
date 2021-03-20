function equalArrays (firstArray, secondArray) {
    for (let i = 0; i < firstArray.length; i++){
        let newString = firstArray[i];
        for (let j = 0; j < secondArray.length; j++) {
            if (secondArray[j] === newString) {
                console.log(secondArray[j]);
            }
        }
    }
}

equalArrays (['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']

)

//for (const el of firstArray) {
//    let isCommon = secondArray.includes(el);
//    if (isCommon){
//        console.log(el);
//    }
//}