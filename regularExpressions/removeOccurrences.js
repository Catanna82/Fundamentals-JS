function removeOccurr(word, text) {
    while (text.includes(word)) {
        text = text.split(word).join('');
    }
    console.log(text);
}

removeOccurr('ice',
'kicegiciceeb');