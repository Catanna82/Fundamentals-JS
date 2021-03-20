function wordsTracker(arr) {
    let searchWords = arr.shift().split(' ');
    let words = {}
    for (let word of searchWords) {
        words[word] = 0;
    }
    for (let word of arr) {
        if (words.hasOwnProperty(word)) {
            words[word]++;
        }
    }
    Object.keys(words)
        .sort((a, b) => words[b] - words[a])
        .forEach(x => console.log(`${x} - ${words[x]}`));
}

wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);