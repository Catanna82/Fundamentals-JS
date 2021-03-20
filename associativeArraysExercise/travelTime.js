function travelTime(arr) {
let destination = {};

for (let i = 0; i < arr.length; i++) {
    let [country, town, cost] = arr[i].split(" > ").filter(e => e !== "");
    cost = +cost;
    town = town[0].toUpperCase() + town.slice(1);

    if (!destination.hasOwnProperty(country)) {
        destination[country] = {};
    } 
    if (!destination[country].hasOwnProperty(town)){
        destination[country][town] = cost;
    }
    let currentPrice = destination[country][town];
    if (currentPrice > cost) {
        destination[country][town] = cost;
    }
}
let orderedCountries = [...Object.keys(destination)].sort((a,b) => a.localeCompare(b));
    let result = "";
    for (let country of orderedCountries) {
        result += country + " -> ";
        let sortedPrices = [...Object.keys(destination[country])].sort((a, b) => travelCost(a, b, destination, country));
        for (let town of sortedPrices) {
            result += `${town} -> ${destination[country][town]} `;
        }
        result += "\n";
    }
    console.log(result);
 
    function travelCost(town1, town2, destination, country) {
        let priceOne = destination[country][town1];
        let priceTwo = destination[country][town2];
        return priceOne - priceTwo
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);