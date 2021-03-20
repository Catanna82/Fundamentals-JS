function lettersChange(params) {
    let str = params.split(' ').filter(x => x.length);
    let alphabet = {
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10,
        K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18,
        S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26,
    };
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let element = str[i];
        let firstChar = element[0];
        let lastChar = element[element.length - 1];
        let number = Number(element.substring(1, element.length - 1));
        let num;
        if (firstChar === firstChar.toUpperCase()) {
            num = alphabet[firstChar];
            number /= num;
        } else {
            num = alphabet[firstChar.toUpperCase()]
            number *= num;
        }
        if (lastChar === lastChar.toUpperCase()) {
            num = alphabet[lastChar];
            number -= num;
        } else {
            num = alphabet[lastChar.toUpperCase()];
            number += num;
        }
        result.push(number);
    }
    let total = result.reduce((a, b) => a + b)
    console.log(total.toFixed(2));
}


lettersChange('A12b s17G');

lettersChange('P34562Z q2576f   H456z');

lettersChange('a1A');
