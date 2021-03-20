function gladiatorInventory(data) {
    let inventory = data.shift().split(' ');

    for (let i = 0; i < data.length; i++) {
        let command = data[i].split(' ');
        let index;
        switch (command[0]) {
            case 'Buy':
                if (!inventory.includes(command[1])) {
                    inventory.push(command[1]);
                }
                break;
            case 'Trash':
                index = inventory.indexOf(command[1]);
                if (index !== -1) {
                    inventory = inventory.slice(0, index)
                        .concat(inventory.slice(index + 1));
                }
                break;
            case 'Repair':
                index = inventory.indexOf(command[1]);
                if (index !== -1) {
                    let repair1 = inventory.slice(0, index);
                    let repair2 = inventory.slice(index + 1);
                    inventory = repair1.concat(repair2).concat([command[1]]);
                }
                break;
            case 'Upgrade':
                let upgrade = command[1].split('-');
                index = inventory.indexOf(upgrade[0]);
                if (index !== -1) {
                    let sliced1 = inventory.slice(0, index + 1);
                    let sliced2 = inventory.slice(index + 1);
                    sliced1.push(upgrade.join(':'));
                    inventory = sliced1.concat(sliced2);
                }
                break;
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']

);