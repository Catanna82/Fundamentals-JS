function sumOfEvenNumbers (numbers) {
    let evenResult = 0;
    let oddResult = 0;
    
    for (let i = 0; i < numbers.length ; i++) {
        let num = Number (numbers[i])
        if (num % 2 === 0) {
            evenResult += num;
        } else {
            oddResult += num
        }
    }
    console.log (evenResult - oddResult);
    }
    sumOfEvenNumbers ([3,5,7,9])