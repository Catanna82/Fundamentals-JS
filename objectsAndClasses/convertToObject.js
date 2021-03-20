function convert(personInfo) {
    let info = JSON.parse(personInfo);

    for (let key of Object.keys(info)){
        let value = info[key];
        console.log(`${key}: ${value}`)
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}');