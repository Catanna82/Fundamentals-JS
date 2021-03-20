function furniture(params) {
    // input = params.join(' ');
    let total = 0;
    let result = [];
    let price;
    let quantity;
    let command = params.shift();
    result.push(`Bought furniture:`);
    while (command !== 'Purchase') {
        let pattern = /\>{2}(?<name>[A-Za-z]+)\<{2}(?<price>[\d]+(\.[\d]+)?)!(?<quantity>[\d]+)/g;
        let valid = pattern.exec(command);
        if (valid !== null) {
            let names = valid.groups['name'];
            result.push(names);
            price = Number(valid.groups['price']);
            quantity = Number(valid.groups['quantity']);
            total += price * quantity;
        }
        command = params.shift();
    }
    result.push(`Total money spend: ${total.toFixed(2)}`);
    console.log(result.join('\n'));
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);