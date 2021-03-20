function numbers(array) {
    array = array.split(' ').sort((a, b) => b - a).map(Number);
    let newArr = [];
    let sum = array.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
    }, 0);
    let average = (sum / array.length).toFixed(2);
    array = array.splice(0, 5);

    for (let el of array) {
        if (el > average) {
            newArr.push(el);
        }
    }
    if (newArr.length > 0) {
        console.log(newArr.join(' '));
    } else {
        console.log(`No`);
    }

}

numbers('-1 -2 -3 -4 -5 -6')