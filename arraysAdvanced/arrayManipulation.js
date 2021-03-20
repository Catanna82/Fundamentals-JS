function arrayManipulations(numArr) {

    let myArr = numArr.shift().split(' ').map(Number);

    for (let i = 0; i < numArr.length; i++) {
        let [command, firstNum, secondNum] = numArr[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add':
                myArr.push(firstNum);
                break;
            case 'Remove':
                myArr = myArr.filter(x => x !== firstNum);
                break;
            case 'RemoveAt':
                myArr.splice(firstNum, 1);
                break;
            case 'Insert':
                myArr.splice(secondNum, 0, firstNum);
                break;
        }
    }

    console.log(myArr.join(' '));

}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);