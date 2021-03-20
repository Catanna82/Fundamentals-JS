function printElement (numbers){
    let newArray = [];
    const element = Number (numbers[numbers.length-1]);

    for (let i = 0; i < numbers.length-1; i+=element) {
        if (i === 0) {
            newArray.push(numbers[i]);
        } else {
            newArray.push(numbers[i]);
        }
    }
console.log(newArray.join(' '));
}
printElement(['1', '2', '3', '4', '5', '6']);