function sums (numbers) {
    let number = numbers.toString();

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < number.length; i++) {
        let element = Number(number [i]);
        if (element % 2 === 0) {
            evenSum += element;
        } else {
            oddSum += element
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}

console.log (sums(1000435));
console.log (sums(3495892137259234));