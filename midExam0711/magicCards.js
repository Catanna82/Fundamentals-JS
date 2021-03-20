function magicCards(arr) {
    let cards = arr.shift().split(':');
    let command = arr.shift();
    let cardDeck = [];

    while (command !== 'Ready') {
        command = command.split(' ');
        let index = cardDeck.indexOf(command[1]);
        switch (command[0]) {
            case 'Add':
                if (cards.includes(command[1])) {
                    cardDeck.push(command[1]);
                } else {
                    console.log(`Card not found.`);
                }
                break;
            case 'Insert':
                if (cards.includes(command[1]) && Number(command[2]) <= cardDeck.length && Number(command[2]) >= 0) {
                    cardDeck.splice(Number(command[2]), 0, command[1]);
                } else {
                    console.log(`Error!`);
                }
                break;
            case 'Remove':
                if (cards.includes(command[1]) && cardDeck.includes(command[1])) {
                    cardDeck.splice(index, 1);
                } else {
                    console.log(`Card not found.`);
                }
                break;
            case 'Swap':
                let swaped = cardDeck[index];
                let newIndex = cardDeck.indexOf(command[2]);
                let swaped1 = cardDeck[newIndex];
                cardDeck[index] = swaped1;
                cardDeck[newIndex] = swaped;
                break;
            case 'Shuffle':
                cardDeck = cardDeck.reverse();
                break;
        }
        command = arr.shift();
    }
    console.log(cardDeck.join(' '));
}

magicCards(["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
"Add Moonfire",
"Add Pounce",
"Add Bite",
"Add Wrath",
"Insert Claw 0",
"Swap Claw Moonfire",
"Remove Bite",
"Shuffle deck",
"Ready"])

    ;
