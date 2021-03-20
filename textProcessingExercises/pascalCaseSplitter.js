function pascalSplitter(text) {
    let word = '';
    let result = [];
    for (let i = 0; i < text.length; i++) {
        let el = text[i];
        let nextEl = text[i + 1];
        if (nextEl === undefined) {
            word += el;
            result.push(word);
        } else if (nextEl.charCodeAt() > 65 && nextEl.charCodeAt() < 90) {
            word += el;
            result.push(word);
            word = '';
        } else {
            word += el;
        }
    }
    console.log(result.join(', '));
}

pascalSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalSplitter('HoldTheDoor');