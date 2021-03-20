function name(params) {
    let line;
    let persons = [];
    while ((line = params.shift()) !== 'Results') {
        let index;
        let secondIndex;
        if (line.startsWith('Add')) {
            let [_, name, health, energy] = line.split(':');
            index = persons.findIndex(n => n.name === name);
            if (index === -1) {
                persons.push({
                    name,
                    health: Number(health),
                    energy: Number(energy)
                });
            } else {
                persons[index].health += Number(health);
            }
        } else if (line.startsWith('Attack')) {
            let [_, firstName, secondName, damage] = line.split(':');
            index = persons.findIndex(n => n.name === firstName);
            secondIndex = persons.findIndex(n => n.name === secondName);
            if (index !== -1 && secondIndex !== -1) {
                persons[secondIndex].health -= Number(damage);
                if (persons[secondIndex].health <= 0) {
                    console.log(`${secondName} was disqualified!`);
                    persons.splice(secondIndex, 1);
                }
                index = persons.findIndex(n => n.name === firstName);
                persons[index].energy -= 1;
                if (persons[index].energy === 0) {
                    console.log(`${firstName} was disqualified!`);
                    persons.splice(index, 1);
                }
            }
        } else if (line.startsWith('Delete')) {
            let [_, username] = line.split(':');
            if (username === 'All') {
                persons = [];
            } else {
                index = persons.findIndex(n => n.name === username);
                if (index !== -1) {
                    persons.splice(index, 1);
                }
            }
        }
    }
    console.log(`People count: ${persons.length}`);
    persons.sort((a, b) => {
        return b.health - a.health || a.name.localeCompare(b.name);
    }).forEach(x => console.log(`${x.name} - ${x.health} - ${x.energy}`));
}

name([
    'Add:Mark:1000:5',
    'Add:Clark:1000:3',
    'Attack:Clark:Mark:500',
    'Add:Allison:2500:5',
    'Attack:Clark:Mark:300',
    'Add:Charlie:4000:10',
    'Attack:Clark:Mark:500',
    'Results'
]);
console.log('-----------------------');
name([
    'Add:Bonnie:3000:5',
    'Add:Johny:4000:10',
    'Attack:Johny:Bonnie:400',
    'Add:Chicken:1000:1',
    'Add:Rabbit:3000:5',
    'Add:Buggy:1259:10',
    'Attack:Chicken:Rabbit:1000',
    'Results'
]);

console.log('--------------------');

name([
    'Add:Bonnie:3000:5',
    'Add:Johny:4000:10',
    'Delete:All',
    'Add:Bonnie:3333:3',
    'Results'
]);

