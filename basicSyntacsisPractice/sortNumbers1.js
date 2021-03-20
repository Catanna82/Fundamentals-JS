function sortNumbers (firstNumber, secondNumber, thirdNumber) {
    let sorted1;
    let sorted2;
    let sorted3;
    if (firstNumber > secondNumber) {
        if (firstNumber > thirdNumber) {
            sorted1 = firstNumber;
            if (secondNumber > thirdNumber) {
                sorted2 = secondNumber;
                sorted3 = thirdNumber;
            } else {
                sorted2 = thirdNumber;
                sorted3 = secondNumber;
            }
        } else {
            sorted1 = thirdNumber;
        }
    }
}

sortNumbers (2, 1, 3);