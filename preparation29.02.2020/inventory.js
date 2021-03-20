function inventory(journal) {
    let list = journal.shift().split(', ');
    let command = journal.shift().split(' - ');
    while (command[0] !== 'Craft!') {
        let index = list.indexOf(command[1]);;
        switch (command[0]) {
            case 'Collect':
                if (index < 0) {
                    list.push(command[1]);
                }
                break;
            case 'Drop':
                if (index >= 0) {
                    list.splice(index, 1);
                }
                break;
            case 'Combine Items':
                let newCommand = command[1].split(':');
                let oldItem = newCommand[0];
                let newItem = newCommand[1];
                let newIndex = list.indexOf(oldItem);
                if (newIndex >= 0) {
                    list.splice(newIndex + 1, 0, newItem);
                }
                break;
            case 'Renew':
                if (index >= 0) {
                    let renewItem = list.indexOf(command[1]);
                    if (renewItem >= 0) {
                        list1 = list.splice(index, 1)
                        list = list.concat(list1);
                    }
                }
                break;
        }
        command = journal.shift().split(' - ');
    }
    console.log(list.join(', '));
}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]

);