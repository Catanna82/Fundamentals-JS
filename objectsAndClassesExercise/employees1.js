function solve (arr) {

class Person {
    constructor(name){
        this.name = name;
        this.number = name.length;
    }

    print(){
        return (`Name: ${this.name} -- Personal Number: ${this.number}`)
    }
}

// arr = arr.map(x => {
//     return new Person(x)
// })
// .forEach(obj => {
//     console.log(obj.print());
// });

return arr.map(x => {
    let obj = new Person(x);
    return obj.print()
}).join('\n')
}

console.log(solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
));