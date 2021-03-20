function orders (type, number){
let total = number;
    switch (type) {
        case 'coffee' :
            total *= 1.50;
            break;
        case 'water':
            total *= 1.00;
            break;
        case 'coke':
            total *= 1.40;
            break;
        case 'snacks':
            total *= 2.00;
            break;
    }
    console.log(total.toFixed(2));
}
orders('coffee', 2);