function vacation (number, type, day) {
    let total = 0;
    switch (day) {
        case 'Friday':
            if (type ===  'Students'){
                total = number * 8.45;
            } else if (type === 'Business') {
                total = number * 10.90;
            } else if (type === 'Regular') {
                total = number * 15.00;
            }            
            break;
        case 'Saturday':
            if (type ===  'Students'){
                total = number * 9.80;
            } else if (type === 'Business') {
                total = number * 15.60;
            } else if (type === 'Regular') {
                total = number * 20.00;
            }
            break;
        case 'Sunday':
            if (type ===  'Students'){
                total = number * 10.46;
            } else if (type === 'Business') {
                total = number * 16.00;
            } else if (type === 'Regular') {
                total = number * 22.50;
            }    
            break;
    }
    if (number >= 30 && type === 'Students') {
        total *= 0.85;
    }
    if (number >= 100 && type === 'Business') {
        total -= 156.00;
    }
    if ((number >= 10 && number <= 20) && type === 'Regular'){
        total *= 0.95;
    }
    console.log('Total price: '+ total.toFixed(2));
}
vacation (30,
    "Students",
    "Sunday"
    );
vacation (40,
    "Regular",
    "Saturday"
    );