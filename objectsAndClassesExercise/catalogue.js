function catalogue(data) {
    data.sort((a, b) => a.localeCompare(b));

    let result = {};

    for (const el of data) {
        let symbol = el[0];
        let product = el.split(' : ').join(': ');
        if(result[symbol] === undefined) {
            result[symbol] = [];
        }
        result[symbol].push(`  ${product}`);
    }

    for (const el in result) {
        console.log(el);
        console.log(result[el].join('\n'));
    }

}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);