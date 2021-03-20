function fuelMoney(distance, passengers, price) {
    
    let fuelConsumption = 7; // 7L / 100km - without passengers
    let onePersonConsumption = 0.1 * passengers // 100 ml - for each passenger
    let neefFuel = (distance / 100) * fuelConsumption;
    let total = (neefFuel + onePersonConsumption) * price;

    console.log(`Needed money for that trip is ${total}lv.`);
}

fuelMoney (90, 14, 2.88);