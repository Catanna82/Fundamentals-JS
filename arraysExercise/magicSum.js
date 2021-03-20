function magicSum (array, magicNumber) {
    // обхождаме масива
    //взимаме елементите по двойки
    //запазваме ги в променлива
    // сравняваме с магическото число и ако са равни - принтираме
    let result = [];
    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {
            let sum = Number(array[i] + Number(array[j]))
            if (sum === magicNumber){
                result.push(array[i], array[j])
                console.log(result.join(' '));
                sum = 0;
                result = [];
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23],
    8
    )