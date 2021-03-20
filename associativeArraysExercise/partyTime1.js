function partyTime(params) {
    let index = params.indexOf('PARTY');
    let inviteList = params.slice(0, index);
    let comingGuests = params.slice(index + 1);

    let {vip, regular} = inviteList.reduce((acc, curr) => {
        if (isNaN(curr[0])) {
            acc.regular.push(curr);
        } else {
            acc.vip.push(curr);
        }
        return acc;
    }, { vip: [], regular: [] });

    comingGuests.map((v) => {
        let i;
        if (vip.includes(v)) {
            i = vip.indexOf(v);
            vip.splice(i, 1);
        } else if (regular.includes(v)) {
            i = regular.indexOf(v);
            regular.splice(i, 1);
        }
    });


    let forPrint = vip.concat(regular);

    console.log(forPrint.length);
    console.log(forPrint.join('\n'));
}

partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
);