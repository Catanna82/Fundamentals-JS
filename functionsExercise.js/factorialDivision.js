// function factorialDivision (a, b) {
//     let number = Number(a);
//     let result = 1;
//     for(let i = 2; i <= number; i++){
//        result = result * i;
//     }
// console.log((result / b).toFixed(2));
// };

// factorialDivision (5, 2);

// factorialDivision (6, 2);


function factorialDivision(x, y) {
    let factorialNumber = number => {
        if (number >= 1) return number * factorialNumber(number - 1);
        else return 1;
    }
    let result = factorialNumber(x) / factorialNumber(y);
    console.log(result.toFixed(2));
}

factorialDivision (5, 2);

factorialDivision (6, 2);