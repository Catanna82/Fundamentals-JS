function reversedChars (char1, char2, char3) {
    // let newChar = [char1, char2, char3];
    // console.log (newChar.reverse().join(' '));
    let newChar = char1 + char2 + char3;
    console.log (newChar.split('').reverse().join(' '));
}
reversedChars ('A', 'B', 'C');
reversedChars ('1', 'L', '&');