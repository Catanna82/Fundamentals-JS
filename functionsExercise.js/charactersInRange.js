function charactersInRange (start, end) {
let startVal = start.charCodeAt(0);
let endVal = end.charCodeAt(0);
if (startVal > endVal) {
    let temp = startVal;
    startVal = endVal;
    endVal = temp;
}
let res = ' ';
for (let i = startVal + 1; i < endVal; i++) {
    res += (String.fromCharCode(i)) + ' '
}
console.log(res);
}
charactersInRange ('a', 'd');
charactersInRange ('#', ':');
charactersInRange ('C', '#');