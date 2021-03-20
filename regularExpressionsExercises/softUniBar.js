function softUniBar(params) {
    let total = 0;
    let command = params.shift();

    while (command !== 'end of shift') {
        let regName = /%(?<name>[A-Z][a-z]+)%/g.exec(command);
        let regProduct = /<(?<product>\w+)>/g.exec(command);
        let regCount = /\|(?<count>[0-9]+)\|/g.exec(command);
        let regPrice = /(?<price>[0-9]+(\.[0-9]+)?)\$/g.exec(command);
        if (regName !== null && regProduct !== null && regCount !== null && regPrice !== null) {
            let currCost = Number(regCount.groups.count) * Number(regPrice.groups.price);
            total += currCost;
            console.log(`${regName.groups.name}: ${regProduct.groups.product} - ${currCost.toFixed(2)}`);
        }
        command = params.shift();
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}

// softUniBar([
//     '%George%<Croissant>|2|10.3$',
//     '%Peter%<Gum>|1|1.3$',
//     '%Maria%<Cola>|1|2.4$',
//     'end of shift'
// ]);

  softUniBar([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
  ]);