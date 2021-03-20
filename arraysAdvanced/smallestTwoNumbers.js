function smallestTwoNumbers (numArr) {

    let sortNumbers = numArr.sort((a, b) => a - b)
    .slice(0, 2)
    .join(' ');
 console.log(sortNumbers);

}

smallestTwoNumbers ([3, 0, 10, 4, 7, 3])