function reverceArrayOfStrings (inputString) {
    let revercedString = [];
    for (let i = inputString.length-1; i >= 0; i--) {
        revercedString += inputString[i] + ' ';
    }
    console.log (revercedString);
}
reverceArrayOfStrings (['a', 'b', 'c', 'd', 'e'])