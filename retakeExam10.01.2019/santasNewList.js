function santasNewList(params) {
    let children = [];
    // [
    //     {name: 'abxc', amount = 0},
    //     {name: 'defa', amount = 0},
    //     {name: 'fyj', amount = 0}
    // ]
    let presents = [];
    let command;
    while ((command = params.shift()) !== 'END') {
        if (command.startsWith('Remove')) {
            let [_, name] = command.split('->');
            let indexRem = children.findIndex(x => x.name === name);
            if (indexRem !== -1) {
                children.splice(indexRem, 1);
            }
        } else {
            let [name, typePresents, amount] = command.split('->');
            amount = Number(amount);
            let indexChild = children.findIndex(x => x.name === name);
            let indexPres = presents.findIndex(x => x.typePresents === typePresents);
            if (indexChild === -1) {
                children.push({ name, amount });
            } else {
                children[indexChild].amount += amount;
            }
            if (indexPres === -1) {
                presents.push({ typePresents, amount });
            } else {
                presents[indexPres].amount += amount;
            }
        }
    }

    let sortedChildren = children.sort((a, b) => {
       return (b.amount - a.amount) || (a.name.localeCompare(b.name));
    });

    console.log('Children:');

    for (let el of sortedChildren) {
        console.log(`${el.name} -> ${el.amount}`);
    };

    console.log('Presents:');

    for (let el of presents) {
        console.log(`${el.typePresents} -> ${el.amount}`);
    }
}

santasNewList(['Sammy->Candy->12', 'Annie->Candy->12', 'Dannie->Candy->12', 'END']);

console.log('-------------------');

santasNewList([
    'Marty->Toys->5',
    'Sam->Candy->20',
    'Leo->Candy->10',
    'Leo->Toys->1',
    'Katy->Clothes->4',
    'Bobbie->Clothes->6',
    'Tanya->Phone->1',
    'Nasko->Tablet->3',
    'END'
]);

console.log('-------------------');
santasNewList([
    'Teddy->Clothes->8',
    'Johny->Toys->10',
    'Freddie->Candy->30',
    'Johny->Candy->20',
    'Carrie->Phone->1',
    'Carrie->Tablet->1',
    'Carrie->Candy->10',
    'Teddy->Toys->5',
    'Remove->Teddy',
    'END'
]);