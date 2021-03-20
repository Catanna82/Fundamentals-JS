// let goldMined = input[i - 1];
// if (i % 3 === 0){
//     goldMined *= 0.7;
//     totalMoney += goldMined * goldValue;
// } else {
//     totalMoney += goldMined * goldValue;
// }

totalMoney = (i % 3 === 0) ? (totalMoney + 0.7 * goldValue) : (input[i - 1] * goldValue)

// -------------------------------------------------------
