function houseParty(data) {
    let guests = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].includes('is going!')) {
            let name = data[i].split(' ').shift();
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guests.push(name);
            }
        } else if (data[i].includes('is not going!')) {
            let name = data[i].split(' ').shift();
            if (guests.includes(name)) {
                guests = guests.filter(v => v !== name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guests.join('\n'));
}

houseParty (
[
    'Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]

)

