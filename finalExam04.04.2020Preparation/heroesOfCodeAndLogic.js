function heroesOfCodeAndLogic(params) {
    let actions = {
        CastSpell: (heroes, [name, mpCost, spell]) => {
            let hero = heroes[name];
            mpCost = Number(mpCost);
            if (hero.mp >= mpCost) {
                hero.mp -= mpCost;
                console.log(`${name} has successfully cast ${spell} and now has ${hero.mp} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spell}!`);
            }
        },
        TakeDamage: (heroes, [name, damage, source]) => {
            let hero = heroes[name];
            damage = Number(damage);
            hero.hp -= damage;
            if (hero.hp > 0) {
                console.log(`${name} was hit for ${damage} HP by ${source} and now has ${hero.hp} HP left!`);
            } else {
                console.log(`${name} has been killed by ${source}!`);
            }
        },
        Recharge: (heroes, [name, mpAmt]) => {
            let hero = heroes[name];
            mpAmt = Number(mpAmt);
            if (hero.mp + mpAmt > 200) {
                mpAmt = 200 - hero.mp;
            }
            hero.mp += mpAmt;
            console.log(`${name} recharged for ${mpAmt} MP!`);
        },
        Heal: (heroes, [name, hpAmt]) => {
            let hero = heroes[name];
            hpAmt = Number(hpAmt);
            if (hero.hp + hpAmt > 100) {
                hpAmt = 100 - hero.hp;
            }
            hero.hp += hpAmt;
            console.log(`${name} healed for ${hpAmt} HP!`);
        }
    }
    let n = params.shift();
    let heroes = {};
    for (let i = 0; i < n; i++) {
        let [name, hp, mp] = params.shift().split(' ');
        heroes[name] = {
            hp: Number(hp),
            mp: Number(mp)
        }
    }

    while (params[0] !== 'End') {
        let [command, ...args] = params.shift().split(' - ');
        let action = actions[command];
        action(heroes, args);
    }

    let sorted = Object
        .entries(heroes)
        .filter(([n, { hp, mp }]) => hp > 0)
        .sort(compareHeroes);
    for (const hero of sorted) {
        console.log(hero[0]);
        console.log(`  HP: ${hero[1].hp}`);
        console.log(`  MP: ${hero[1].mp}`);
    }
    function compareHeroes(a, b) {
        let heroA = a[1];
        let heroB = b[1];
        let result = heroB.hp - heroA.hp;
        if (result === 0) {
            result = a[0].localeCompare(b[0]);
        }
        return result;
    }
}

heroesOfCodeAndLogic([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);