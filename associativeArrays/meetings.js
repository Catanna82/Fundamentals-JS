function meetings(array) {
    let meet = {};

    for (const el of array) {
        let [day, name] = el.split(' ');
        if (meet.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meet[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    Object.keys(meet).forEach(n => console.log(`${n} -> ${meet[n]}`));

}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);