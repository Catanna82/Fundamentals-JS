function shopingList(list) {
    let shopList = list.shift().split('!');
    let commandList = list.shift();

    while (commandList !== 'Go Shopping!') {
        commandList = commandList.split(' ')
        let command = commandList[0];
        let product = commandList[1];
        let index = shopList.indexOf(product);
        switch (command) {
            case 'Urgent':
                if (index < 0) {
                    shopList.unshift(product);
                }
                break;
            case 'Unnecessary':
                if (index > 0) {
                let unnList = shopList.splice(index,1);
                }
                break;
            case 'Correct':
                let oldItem = product;
                let newItem = commandList[2];
                let newIndex = shopList.indexOf(oldItem);
                if (newIndex >= 0) {
                    shopList[index] = newItem;
                }
                break;
            case 'Rearrange':
                if (index >= 0) {
                    let rearList = shopList.splice(index,1);
                    shopList = shopList.concat(rearList);
                }
                break;
            }

            commandList = list.shift();
    }
    console.log(shopList.join(', '));
}

shopingList([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Water ',
    'Correct Pepper Onion',
    'Rearrange Salt',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
  ]
);