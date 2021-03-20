function nonDecreasing (data) {
    let result = [data[0]];

    for (let i = 1; i < data.length; i++) {
       let element = data[i];
            if (result[result.length - 1] <= element) {
                result.push(data[i]);
            }
    }
    console.log(result.join(' '));
};

nonDecreasing ([ 20, 3, 2, 15, 6, 1, 20]);
