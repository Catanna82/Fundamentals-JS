function odd(params) {
    let oddOccur = params.split(' ');
    let result = {};

    for (const el of oddOccur) {
        let language = el.toLowerCase()

        if (result.hasOwnProperty(language)) {
            result[language] += 1;
        } else {
            result[language] = 1;
        }
    }
    function compare([wordA, timesA], [wordB, timesB]) {
        let avgA = timesA;
        let avgB = timesB;
        return avgB - avgA;
    }
    let sorted = Object.entries(result).sort(compare);
    let myResult = [];
    for (const [language, times] of sorted) {
        if (times % 2 !== 0) {
            myResult.push(language);
        }
    }
    console.log(myResult.join(' '));

}

odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');