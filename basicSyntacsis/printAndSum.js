function printAndSum (firstNumber, secondNumber) {
    let sum = 0;
    let print = " ";
       for (let i = firstNumber; i <= secondNumber; i++){
        print += i + " "
        sum += i;
    }
    console.log(print);
    console.log(`Sum: ` + sum);
}
printAndSum (50, 60);
// print += `${i} ` - може и по този начин