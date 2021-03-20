function login (input) {
    let name = input[0];
    let index = 1;
    let password = input[index]
    let splitName = name.split("");
    let reverseName = splitName.reverse();
    let correctPassword = reverseName.join("")
    let numbersOfTry = 0;
//correctPassword = name.split('').reverse().join('');
    for (let i = 0; i < input.length - 1; i++){
        if (numbersOfTry >= 3){
            console.log(`User ${name} blocked!`);
            break;
        }
        if (password !== correctPassword) {
            console.log(`Incorrect password. Try again.`)
            index++;
            numbersOfTry++;
            password = input[index];
        } else {
            console.log(`User ${name} logged in.`);
        }
    }
}
login(['sunny','rainy', 'cloudy', 'sunny', 'not sunny']);