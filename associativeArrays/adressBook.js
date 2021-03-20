function addressBook(book) {

    let catalog = {};

    for (const el of book) {
        let [key, value] = el.split(':');
        catalog[key] = value;
    }
    let sorted = Object.entries(catalog);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [key, value] of sorted) {
        console.log(`${key} -> ${value}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])