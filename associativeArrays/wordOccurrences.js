function word(params) {
    let wordOccur = new Map();
    for (const el of params) {
        let times = 0
        if (!wordOccur.has(el)) {
            times = 1
            wordOccur.set(el, []).get(el).push(times);
        } else {
            times += 1;
            wordOccur.get(el).push(times);
        }
    }

    function compare([wordA, gradesA], [wordB, gradesB]) {
        let avgA = gradesA.length;
        let avgB = gradesB.length;
        return avgB - avgA;
    }
    let sorted = Array.from(wordOccur).sort(compare);

    for (let [word, times] of sorted) {
        let number = 0;
        for (const el of times) {
            number += el;
        }
        console.log(`${word} -> ${number} times`);
    }
}

word(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);