function palindromIntegers (arr) {
    function isPalindrome (text) {
        let len = text.length;
        let isPalindromeVal = true;
        for (let i = 0; i < Math.floor (text.length / 2); i++) {
            if (text[i] !== text[len - 1 - i]) {
                isPalindromeVal = false;
                break;
            }
        }
        return isPalindromeVal;
    }
    for (const num of arr) {
        console.log (isPalindrome (num.toString ()));
    }
}
palindromIntegers([123,323,421,121]);
palindromIntegers ([32,2,232,1010]);