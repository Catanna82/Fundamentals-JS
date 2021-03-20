function nxNMatrix (number) {
    let element = '';
    for (let i = 0; i < number; i++) {  //row        
        for (let j = 1; j <= number; j++) {  //column
           element += number + " ";
        }
        console.log(element);
        element = '';
    }
}

nxNMatrix (2);


