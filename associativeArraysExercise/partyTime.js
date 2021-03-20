function partyTime(params) {

    let index = params.indexOf('PARTY');
    let inviteList = params.slice(0, index);
    let comingGuests = params.slice(index + 1);

    let list = new Set(inviteList);
    for (const el of comingGuests) {
        if (list.has(el)) {
            list.delete(el);
        }
    }

    let {vip, regular} = Array.from(list).reduce((acc, curr) => {
        if (isNaN(curr[0])) {
            acc.regular.push(curr);
        } else {
            acc.vip.push(curr);
        }
        return acc;
    }, { vip: [], regular: [] });

    console.log(vip.length + regular.length);
    console.log(vip.join('\n') + '\n' + regular.join('\n'));
}

partyTime([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]

);