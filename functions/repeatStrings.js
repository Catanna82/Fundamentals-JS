function repeatStrings (data, n) {
    let result = '';
    for (let i = 0; i < n ; i++) {
        result += data;
    }
    console.log(result);
}
repeatStrings('String', 2);