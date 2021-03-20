function addAndSubtract (a, b, c) {
    function sum (a, b) {
        return a + b;
    }
    function subtract (a, b) {
        return a - b;
    }
    let sumRes = sum (a, b);
    let result = subtract (sumRes, c);
    console.log (result);
}
addAndSubtract (23, 6, 10);
addAndSubtract (1, 17, 30);
addAndSubtract (42, 58, 100);