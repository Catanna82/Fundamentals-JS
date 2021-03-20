function rotateArray (arr) {
    let newArr  = arr;
    let index = Number(newArr.pop());
    if (isNaN(index)){
        console.log('Empty');
    } else {
        for (let i = 0; i < index; i++) {
            let element = newArr.pop();
            newArr.unshift(element);
        }
        console.log(newArr.join(' '));
    }
};

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
