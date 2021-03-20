function employees(data) {

    let person = {};

    for (let line of data) {
        person[line] = line.length;
    }

Object.entries(person).forEach(element => {
    console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`);
});

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)