function wordsTracker(params) {
    let wordsSearch = params.shift().split(' ');
    let words = new Map();

    for (let word of wordsSearch) {
        words.set(word, 0);
    }
let counter = 0;
    for (let word of params) {
        if (words.has(word)){
            counter++;
            let count = words.get(word);
            count += counter;
            words.set(word, count);
            counter = 0;
        }
    }
    let sorted = Array.from(words.entries()).sort((a, b) => b[1] - a[1]);
    for (const [keys, values] of sorted) {
        console.log(`${keys} - ${values}`);
    }
}

wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);