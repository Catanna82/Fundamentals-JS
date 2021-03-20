function reverceArray (number, array) {
    let reverceArr = [];
    for (i = 0; i < number; i++) {
        reverceArr += array [(number-1) - i]+' ';
    }
    console.log (reverceArr);
}
reverceArray (4, [-1, 20, 99, 5])