function firstAndLast (arr) {

    let k = arr.shift();
    let firstK = arr.slice(0,k);
    let lastK = arr.slice(arr.length-k);

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}

firstAndLast ([2, 7, 8, 9]);
firstAndLast ([3, 6, 7, 8, 9]);