function hardWords(input) {
  let text = input.shift();
  let words = input.shift().sort((a, b) => b.length - a.length);

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let startString = '_'.repeat(word.length);
    let index = text.indexOf(startString);
    if (index !== -1) {
      text = text.replace(startString, word, index);
    }
  }
  console.log(text);
}

hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  [
    'pie',
    'bring',
    'glad',
    'During',
    'amazing',
    'pharmacist',
    'sprained'
  ]
]
);