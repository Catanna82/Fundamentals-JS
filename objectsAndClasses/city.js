function cityInfo(city) {

    for (let key of Object.keys(city)) {
        console.log(`${key} -> ${city[key]}`);
    }
}

cityInfo ("Sofia"," 492", "1238438", "Bulgaria", "1000")