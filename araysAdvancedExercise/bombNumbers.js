function bombNumbers(numbers, bombs) {
    let bomb = bombs[0];
    let explosion = Math.abs(bombs[1]);

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === bomb) {
            if (i - explosion < 0) {
                numbers.splice(0, 1 + explosion + i);
                i = 0;
            } else {
                numbers.splice(i - explosion, 1 + explosion + explosion);
                i = i - explosion - 1;
            }
        }
    }

    let sum = 0;
    numbers.map(Number);
    for (let element of numbers) {
        sum += element;
    }
    console.log(sum);
    //console.log(numbers);
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    
);