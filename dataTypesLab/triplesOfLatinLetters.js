function tripleLatin(num) {
    let firstLetterCode = 'a'.charCodeAt(0);
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                let combination = String.fromCharCode(firstLetterCode + i, firstLetterCode + j, firstLetterCode + k);
                console.log(combination)
            }
        }
    }
}

tripleLatin (3);