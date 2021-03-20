function sumOfEvenNumbers (numbers) {
let result = 0;

for (let i = 0; i < numbers.length ; i++) {
    let num = Number (numbers[i])
    if (num % 2 === 0) {
        result += num;
    }
}
console.log (result);
}
sumOfEvenNumbers (['3','5','7','9'])
