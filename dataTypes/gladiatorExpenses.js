function gladiatorExpenses (lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let total = 0;
    let trashedShield = 0;

    for (let lostGame = 1; lostGame <= lostFightCount; lostGame++) {
        if (lostGame % 6 === 0) {
            total += shieldPrice + helmetPrice + swordPrice;
            trashedShield++;
        } else if (lostGame % 2 === 0) {
            total += helmetPrice
        } else if (lostGame % 3 === 0) {
            total += swordPrice;
        } 
        if (trashedShield === 2) {
            total += armorPrice; 
            trashedShield = 0;
        } 
    }
    console.log (`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

gladiatorExpenses (23, 12.50, 21.50, 40, 200);