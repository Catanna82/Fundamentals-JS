function sumDigits (digit) {
    let sum = 0;
    let a = digit.toString().split('');

    for (let number = 0; number < a.length; number++) {
        let newNumber = Number (a[number]);
        sum += newNumber;
    }
    console.log(sum);
}
sumDigits (245678);