function string(params, startIndex, endIndex) {
    let result = params.substring(startIndex, startIndex + endIndex);
    console.log(result);
}

string("ASentance", 1, 8);