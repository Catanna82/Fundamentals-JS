function sumFurstLast (data) {
let firstElement = Number(data[0]);
let lastElement = Number(data.pop());

return firstElement + lastElement

}

console.log (sumFurstLast(['5', '10']));
console.log (sumFurstLast(['20', '30', '40']));

