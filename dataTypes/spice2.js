function spiceMustFlow (spice){
    let day = 0;
    let income = Number(spice);
    let consumation = 0;
    let total = 0;

    for (let i = income; i >= 100 ; i -= 10){
        if (i > 26 && day > 0){
            consumation += 26;
        }
        day++;
        consumation += 26;
        total += i
    }    
    console.log(day);
    console.log(total - consumation);
    }
    
    spiceMustFlow (200);