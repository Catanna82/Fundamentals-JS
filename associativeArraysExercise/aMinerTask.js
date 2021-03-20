function task(arr) {
    let minerTask = {};

    for (let i = 0; i < arr.length; i += 2) {
        let resources = arr[i];
        let quantity = Number(arr[i + 1]);

        if (!minerTask.hasOwnProperty(resources)) {
            minerTask[resources] = quantity;
        } else {
            minerTask[resources] += quantity;
        }
    }
    Object.keys(minerTask).forEach(key => console.log(`${key} -> ${minerTask[key]}`));
}

task([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]
);