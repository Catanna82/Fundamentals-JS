function mirrorWords(text) {
    let str = text[0];
    let reg = /([@#])[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g;
    let matches = str.match(reg);
    let result = [];
    if (matches === null) {
        console.log('No word pairs found!');
        console.log('No mirror words!');
    } else {
        for (let el of matches) {
            let words = el.split(el[0]).filter(x => x !== '');
            let isMirror = words[0] === words[1].split('').reverse().join('');
            if (isMirror) {
                result.push(`${words[0]} <=> ${words[1]}`);
            }
        }
        if (result.length !== 0) {
            console.log(`${matches.length} word pairs found!`);
            console.log('The mirror words are:');
            console.log(`${result.join(', ')}`);
        } else {
            console.log(`${matches.length} word pairs found!`);
            console.log('No mirror words!');
        }
    }
}


mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);

console.log('-------------');

mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);

console.log('-------------');

mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);