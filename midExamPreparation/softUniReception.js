function softUniReceprion(input) {
    let students = Number(input.pop());
    let [firstEmp, secondEmp, thirdEmp] = input.map(Number);
    let allForHour = firstEmp + secondEmp + thirdEmp;
    let hour = 0;

    while (students > 0) {
        hour++;
        if (hour % 4 !== 0) {
            students -= allForHour;
        }
    }
    console.log(`Time needed: ${hour}h.`);
}

softUniReceprion(['5','6','4','20']);
softUniReceprion(['1','2','3','45']);
softUniReceprion(['3', '2', '5', '40']);
softUniReceprion(['1', '1', '1', '0']);
softUniReceprion(['1', '1', '1', '10000']);
softUniReceprion(['100', '100', '100', '0']);