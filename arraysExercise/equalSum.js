function equalSum (array) {
    //обхождаме всеки един елемент на масива
    //намираме сумите от ляво и дясно
    //ako 'i' == 0  или i е последния индекс - сбора е 0
    //сравняваме
    //принтираме индекса или 'no'
    let isIndex = false;
    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        if ( i !== 0){
            for (let j = 0; j < i; j++) {
                leftSum += array [j];
            }
        }
        if (i !== array.length - 1){
            for (let r = i + 1; r < array.length; r++) {
                rightSum += array [r];
            }
        }
        if (leftSum === rightSum) {
            isIndex = true;
            console.log (i);
        }
    }
    if (!isIndex) {
        console.log ('no')
    }
}
equalSum([1, 2, 3, 3]);