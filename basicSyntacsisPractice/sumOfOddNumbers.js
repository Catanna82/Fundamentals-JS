function sumOfOddNumbers (number) {
    let sum = 0;
    let startNumber = 1;
    let printNumbers = 0;
    while (printNumbers <= number){
        if (startNumber % 2 !== 0){
            printNumbers++;
            sum += startNumber;
            console.log(startNumber);
        }
        if (printNumbers === number) {
            break;
        }
        startNumber++;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers (5);