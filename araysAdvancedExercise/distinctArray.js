function distinct (numArr) {
    let newArr = numArr.filter((x, i) => {
        let slicedArr = numArr.slice(0, i);
        return !slicedArr.includes(x);
    })
    console.log(newArr.join(' '));
}

distinct ([7, 8, 9, 7, 2, 3, 4, 1, 2])

