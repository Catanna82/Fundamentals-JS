function binaryToDecimal(binary) {
    // 010111= 1*2^0+1*2^1+1*2^2+1*2^3+0*2^4+1*2^5+0*2^6
    let decimal = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
        decimal += binary[i] * Math.pow(2, binary.length - 1 - i);
    }
    console.log(decimal);
}

binaryToDecimal('11110000');