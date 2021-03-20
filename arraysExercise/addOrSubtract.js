function addOrSubstract (array) {
let firstSum = 0;
for (const el of array) {
    firstSum += el;
}
for (let i = 0; i < array.length; i++){
    let element = array [i];
        if (element % 2 == 0) {
            array[i] += i;
        } else {
            array[i] -= i;
        }
}
let secondSum = 0;
for (const el of array) {
    secondSum += el;
}
console.log (array);
console.log(firstSum);
console.log(secondSum);
}
addOrSubstract ([-5, 11, 3, 0, 2])