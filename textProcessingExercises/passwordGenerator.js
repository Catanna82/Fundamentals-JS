function generator(params) {
    let result = params.shift().concat(params.shift()).split('');
    let word = params.shift();
    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let vowelsIndexes = [];
    result.forEach((x, index) => {
        if (vowels.includes(x)) {
            vowelsIndexes.push(index);
        }
    })
    let i = 0;
    for (let index of vowelsIndexes) {
        if (i === word.length) {
            i = 0;
        }
        result[index] = word[i++].toUpperCase();
    }
    console.log(`Your generated password is ${result.reverse().join('')}`);
}

generator(['ilovepizza', 'ihatevegetables', 'orange']);

generator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);

generator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);