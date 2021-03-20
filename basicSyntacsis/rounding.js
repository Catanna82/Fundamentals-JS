function solution (firstNumber, secondNumber) {
    if (secondNumber > 15) {
        secondNumber = 15;
    }
    console.log (parseFloat(firstNumber.toFixed(secondNumber)));
}
solution (3.1415926535897932384626433832795, 2);
solution (10.5, 3)