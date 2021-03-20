function emojiDetector(input) {
    let text = input.join(' ');
    // let regEx = /\:{2}(?<name>[A-Z][a-z]+)\:{2}|\*{2}(?<text>[A-Z][a-z]+)\*{2}/g;
    let regEx = /(\:{2}[A-Z][a-z]{2,}\:{2}|\*{2}[A-Z][a-z]{2,}\*{2})/g;
    let matches = text.match(regEx);
    let coolReg = /\d/g;
    let coolMatch = text.match(coolReg);
    let coolNum = 1;
    for (let el of coolMatch) {
        coolNum *= Number(el);
    }
    let emoji = {};
    console.log(`Cool threshold: ${coolNum}`);
    console.log(`${matches.length} emojis found in the text. The cool ones are:`);
    while (matches.length !== 0) {
        let cool = matches.shift().trim();
        let sum = 0;
        for (let el of cool) {
            if (el !== ':' && el !== '*') {
                let number = Number(el.charCodeAt());
                sum += number
                emoji[cool] = sum;
            }
        }
    }
    let coolest = Object.entries(emoji);
    for (let [name, sum] of coolest) {
        sum = Number(sum);
        if (sum > coolNum) {
            console.log(name);
        }
    }
}

emojiDetector([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
]);
console.log('-------------------------------------------');
emojiDetector([
    '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
]);
console.log('-------------------------------------------');
emojiDetector([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
]);