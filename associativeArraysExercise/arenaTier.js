function arenaTier(arr) {
    let arenaPlayers = {};
    for (const el of arr) {
        if (el === 'Ave Cesar') {
            break;
        }
        if (el.includes(' -> ')) {
            let [name, technique, skill] = el.split(' -> ');
            if (!arenaPlayers.hasOwnProperty(name)) {
                arenaPlayers[name] = {
                    technique: [],
                    totalSkill: Number(skill)
                };
                arenaPlayers[name].technique.push({ name: technique, skill: Number(skill) });
            } else {
                const index = arenaPlayers[name].technique.findIndex(v => v.name === technique);
                if (index === -1) {
                    arenaPlayers[name].technique.push({ name: technique, skill: Number(skill) });
                    arenaPlayers[name].totalSkill += Number(skill);
                } else {
                    arenaPlayers[name].totalSkill -= arenaPlayers[name].technique[index].skill;
                    arenaPlayers[name].technique[index].skill = Math.max(Number(skill), arenaPlayers[name].technique[index].skill);
                    arenaPlayers[name].totalSkill += arenaPlayers[name].technique[index].skill;
                }
            }
        } else if (el.includes(' vs ')) {
            let [firstPlayer, secondPlayer] = el.split(' vs ');
            if (arenaPlayers.hasOwnProperty(firstPlayer) && arenaPlayers.hasOwnProperty(secondPlayer)) {
                let commonSkill = arenaPlayers[firstPlayer].technique.filter(v => arenaPlayers[secondPlayer].technique.findIndex(x => v.name === x.name) > -1);
                let isFound = commonSkill.length > 0;
                if (isFound) {
                    if (arenaPlayers[firstPlayer].totalSkill > arenaPlayers[secondPlayer].totalSkill) {
                        delete arenaPlayers[secondPlayer];
                    } else if (arenaPlayers[firstPlayer].totalSkill < arenaPlayers[secondPlayer].totalSkill) {
                        delete arenaPlayers[firstPlayer];
                    }
                }
            }
        }
    }
    let sortedNames = Object.keys(arenaPlayers).sort((a, b) => {
        if (arenaPlayers[a].totalSkill === arenaPlayers[b].totalSkill) {
            return a.localeCompare(b);
        } else {
            return arenaPlayers[b].totalSkill - arenaPlayers[a].totalSkill;
        }
    });
    let forPrint = [];
    for (const el of sortedNames) {
        forPrint.push(`${el}: ${arenaPlayers[el].totalSkill} skill`);
        let sortedSkills = arenaPlayers[el].technique.sort((a, b) => {
            if (a.skill === b.skill) {
                return a.name.localeCompare(b.name);
            } else {
                return b.skill - a.skill;
            }
        }).map(x => `- ${x.name} <!> ${x.skill}`);
        forPrint.push(sortedSkills.join('\n'));
    }
    console.log(forPrint.join('\n'));
}


// arenaTier([
//     'Pesho -> Duck -> 400',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Peter vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Maximilian',
//     'Ave Cesar'
// ]);
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);
