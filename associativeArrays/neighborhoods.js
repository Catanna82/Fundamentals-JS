function neighborhoods(params) {
    let newNeighbor = new Map();
    params.shift()
        .split(', ')
        .forEach(name => newNeighbor.set(name, []));


    for (let i = 0; i < params.length; i++) {
        let [currentNeighbor, person] = params[i].split(' - ');
        if (newNeighbor.has(currentNeighbor)) {
            newNeighbor.get(currentNeighbor).push(person);
        }
    }
    let sorted = Array.from(newNeighbor.entries()).sort((a, b) => {
        return b[1].length - a[1].length;
    });
    let sortedNeighbor = new Map(sorted);

    for (const [neighborhoodName, people] of sortedNeighbor) {
        console.log(`${neighborhoodName}: ${people.length}`);
        people.forEach(person => console.log(`--${person}`));
    }
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
);