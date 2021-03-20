function sortNumbers (firstNumber, secondNumber, thirdNumber) {
   for (let i = 0; i <= 3; i++){
       if (firstNumber > secondNumber && firstNumber > thirdNumber) {
           console.log(firstNumber);
       }
       for (let j = 0; j <= 3; j++){
           if (secondNumber > firstNumber && secondNumber  > thirdNumber) {
               console.log(thirdNumber);
           }
           for (let k = 0; k <= 3; k++){
               if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
                   console.log(thirdNumber);
               }
           }
       }
   }
}
sortNumbers (2, 1, 3);
