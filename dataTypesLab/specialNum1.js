function isPrime(n) {

    for (let i = 1; i <= n; i++) {
        isSpecial(i)
            ? console.log(i + ' -> True')
            : console.log(i + ' -> False');
    }

    function isSpecial(number) {
        let sum = 0;
        while (number > 0) {
            sum += number % 10;
            number = parseInt(number / 10);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            return true;
        } else {
            return false;
        }
    }

}
isPrime(81);