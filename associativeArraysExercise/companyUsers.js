function companyUsers(arr) {
    let users = {};

    for (let i = 0; i < arr.length; i++) {
        let [company, id] = arr[i].split(' -> ');
        if (!users.hasOwnProperty(company)) {
            users[company] = [];
            users[company].push(id);
        } else {
            if (!users[company].includes(id)) {
                users[company].push(id);
            }
        }
    }
    let sorted = Object.entries(users).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [company, people] of sorted) {
        console.log(`${company}`);
        people.forEach(person => console.log(`-- ${person}`));
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]

);