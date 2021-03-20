function phoneBook(array) {
    let book = {};
    for (let i = 0; i < array.length; i++) {
        let [name, number] = array[i].split(' ');
        book[name] = number;
    }
    Object.keys(book).forEach(n => console.log(`${n} -> ${book[n]}`));
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);