function mathPower (number, exponent) {
    //let result = numver ** exponent;
    // let result = Math.pow(number, exponent);
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= number;
    }
console.log(result);
}
mathPower (2, 8);