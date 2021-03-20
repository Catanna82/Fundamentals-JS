function city(name, area, population, country, postCode) {

    let personInfo = {
        name,
        area,
        population,
        country,
        postCode,
    };

    for (const key in personInfo) {
        console.log(`${key} -> ${personInfo[key]}`);
    }
}

city("Sofia"," 492", "1238438", "Bulgaria", "1000")
