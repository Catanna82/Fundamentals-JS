function cats(array) {
    class Cats {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow () { 
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let arrayOfStrings of array) {
        let [catName, catAge] = arrayOfStrings.split(' ');
        let cat = new Cats(catName, catAge)
        cat.meow()
    }
}

cats(['Mellow 2', 'Tom 5']);