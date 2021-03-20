function netherRealms(params) {
    // let splitPattern = /,{1,} {0,}/;
    let deamons = params[0]
        .split(',')
        .map(v => v.trim())
        .sort((a, b) => a.localeCompare(b));
    let damage = 0;
    let health = 0;

    while (deamons.length > 0) {
        let deamon = deamons.shift();
        // let damagePattern = /\d*[\+\-\d\.\d]+/g;
        let damagePattern = /(\+|\-)?(\d+\.\d+|\d+)/g
        let reg1 = /(\*|\/)/g;
        let healthPattern = /[^\+\-\d\.\*\/]/g;
        let dmg = deamon.match(damagePattern);
        if (dmg !== null) {
            for (let el of dmg) {
                el = Number(el);
                damage += el;
            }
        } else {
            damage = 0;
        }
        let result1 = deamon.match(reg1);
        if (result1 !== null) {
            for (const el of result1) {
                if (el === '*') {
                    damage *= 2;
                } else {
                    damage /=2;
                }
            }
        }
        let hp = deamon.match(healthPattern);
        if (hp !== null) {
        for (let el of hp) {
            char = el.charCodeAt();
            health += char;
        }
    }
        console.log(`${deamon} - ${health} health, ${damage.toFixed(2)} damage`);
        damage = 0;
        health = 0;
    }
}

netherRealms(['M3ph1st0**, Azazel']);
netherRealms([ 'M3ph-0.5s-0.5t0.0**' ]);
netherRealms(['Gos/ho']);