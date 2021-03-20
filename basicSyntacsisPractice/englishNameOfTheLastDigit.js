function englishName (number){
    let lastNumber = Number (number);
   
    if (lastNumber % 10 === 1) {
        console.log('one');
    } else if (lastNumber % 10 === 2) {
        console.log('two');
    } else if (lastNumber % 10 === 3) {
        console.log('three');
    } else if (lastNumber % 10 === 4) {
        console.log('four');
    } else if (lastNumber % 10 === 5) {
        console.log('five');
    } else if (lastNumber % 10 === 6) {
        console.log('six');
    } else if (lastNumber % 10 === 7) {
        console.log('seven');
    } else if (lastNumber % 10 === 8) {
        console.log('eight');
    } else if (lastNumber % 10 === 9) {
        console.log('nine');
    } else if (lastNumber % 10 === 0) {
        console.log('zero')
    }
}
englishName (1);
englishName (512);
englishName (1643);