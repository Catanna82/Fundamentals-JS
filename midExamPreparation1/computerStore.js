function computerStore(params) {
    let price = 0;
    let totalPrice = 0;
    let taxes;

    for (let i = 0; i < params.length; i++) {
        let current = params[i];
        while (current !== 'special' && current !== 'regular') {
            if (current <= 0) {
                console.log(`Invalid price!`);
                break;
            } else {
                price += Number(current);
            }
            break;
        }
        if (current === 'special') {
            totalPrice = price * 1.2 * 0.9;
            taxes = price * 20 / 100;
        } else {
            totalPrice = price * 1.2;
            taxes = price * 20 / 100;
        }
    }
    if (totalPrice === 0) {
        console.log(`Invalid order!`);
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${price.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}


computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
]

);