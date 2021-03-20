function buildAWall(numbers) {
    let concrete = [];
    let add = 195;
    let currentDay = 0;
    let sum = 0;
    let total = 0;
    while (sum < Number.MAX_SAFE_INTEGER) {
        sum = 0;
        currentDay = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < 30) {
                numbers[i] = Number(numbers[i]) + 1;
                currentDay += add;
                sum += numbers[i];
            }
        }
        if (sum > 0) {
            concrete.push(currentDay);
        } else {
            break;
        }
    }
    for (let i = 0; i < concrete.length; i++) {
        el = concrete[i];
        total += Number(el);
    }
    total *= 1900;
    console.log(concrete.join(', '));
    console.log(`${total} pesos`);

}

buildAWall([21, 25, 28]);