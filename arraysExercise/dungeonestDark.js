function dungeonestDark(array) {
    //health = 100;
    //gold = 0;
    //проверка на входни данни
    //цикъл през тях
    let health = 100;
    const maxHealth = 100; // do not touch !!!
    let gold = 0;
    let roomCount = 0;
    const rooms = array[0].split('|');

    for (let i = 0; i < rooms.length; i++) {
        // const name = room[i].split(' ')[0];
        // const count = room[i].split(' ')[1];

        let [name, count] = rooms[i].split(' ');
        count = parseInt(count);
        roomCount++;
        switch (name) {
            case 'potion':
                if (maxHealth - health < count) {
                    count = maxHealth - health;
                }
                health += count;
                console.log(`You healed for ${count} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                gold += count;
                console.log(`You found ${count} coins.`);
                break;
            default:
                health -= count;
                if (health > 0) {
                    console.log(`You slayed ${name}.`);
                } else {
                    console.log(`You died! Killed by ${name}.`);
                    console.log(`Best room: ${roomCount}`);
                    i = rooms.length;
                }
                break;
        }
    }
    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${gold}`);
        console.log(`Health: ${health}`);
    }
};

dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])
