function spiceMustFlow (spice){
let day = 0;
let income = Number(spice);
let consumption = 0; // total amount of spice

while ( income >= 100) {
    day++;
    consumption += income;
    consumption -=  26;
    income -= 10;
}
if (income >= 26 && day > 0){
    consumption -= 26;
}
console.log(day);
console.log(consumption);
}

spiceMustFlow (420);