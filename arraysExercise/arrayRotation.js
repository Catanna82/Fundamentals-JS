function arrayRotation (numbers, index) {
    let newNumbers = numbers;
    for (let i = 0; i < index; i++) {
        let element = newNumbers.shift()
        newNumbers.push(element);
    }
    console.log(newNumbers.join(' '))
}
arrayRotation ([51, 47, 32, 61, 21], 2)

