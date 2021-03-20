function train (arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let capacity = Number(arr.shift());

    for (let element of arr) {
        let newElement = element.split(' ')
        if (newElement.includes('Add')) {
            wagons.push(Number(newElement[1]));
        } else {
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + Number(element) <= capacity) {
                    wagons[i] += Number(element);
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}

train (
['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)
