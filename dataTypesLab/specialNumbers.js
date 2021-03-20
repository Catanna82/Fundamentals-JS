function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let currentSum = 0;
        let currentNum = i;
        while (currentNum > 0) {
            currentSum += currentNum % 10;
            currentNum = parseInt(currentNum /10);
        }
        if (currentSum === 5 || currentSum === 7 || currentSum === 11){
            console.log(`${i} -> True`);
        }else {
            console.log(`${i} -> False`);
        }
    }
}
specialNumbers (81);