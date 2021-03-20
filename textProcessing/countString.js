function countString(text, word) {
    let textWords = text.split(' ');
    let counter = 0;
    for (const el of textWords) {
        if(el ===word) {
            counter++;
        }
    }
    console.log(counter);
}

countString("This is a word and it also is a sentence",
"is"
)