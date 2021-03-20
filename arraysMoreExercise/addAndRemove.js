function addOrRemove (data) {
    let newData = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i] === 'add'){
            newData.push(i + 1);
        } else if ( data[i] === 'remove'){
            newData.pop()
        } 
    }
    if (newData.length <= 0) {
        console.log('Empty');
    } else {
        console.log(newData.join(' '));
    }
}
addOrRemove(['add', 'add', 'remove', 'add', 'add']);