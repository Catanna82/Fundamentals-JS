function carWash (data) {
    let cleaned = 0;

    for (let i = 0; i < data.length; i++){

        let activiti = data[i];
        switch (activiti) {
            case 'soap':
                cleaned += 10;
                break;
            case 'vacuum cleaner':
                cleaned *= 1.25;
                break;
            case 'mud':
                cleaned *= 0.90 
                break;
            case 'water':
                cleaned *= 1.20;
                break;
        }
    }
console.log(`The car is ${cleaned.toFixed(2)}% clean.`)
}

carWash (['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);