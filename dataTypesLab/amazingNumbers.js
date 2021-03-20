function amazingNumbers(number) {

    let num = number.toString();
    let sum = 0;
    let result;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    result = sum.toString().includes ('9') ? 'True' : 'False'

    console.log(`${number} Amazing? ${result}`);

}

amazingNumbers (1233);
//amazingNumbers (999);