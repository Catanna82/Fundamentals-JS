function santasCokies(input) {
    let n = Number(input.shift());
    //({cup} + {smallSpoon} + {bigSpoon}) * min from({flourCups}, {sugarSpoons}, {cocoaSpoons}) / singleCookieGrams
    let allCocies;
    let boxes;
    let totalBoxes = 0;
    for (let i = 0; i < n; i++) {
        let flour = Number(input.shift());
        let sugar = Number(input.shift());
        let cocoa = Number(input.shift());
        let flourCups = Math.floor(flour / 140);
        let sugarSpoons = Math.floor(sugar / 20);
        let cocoaSpoons = Math.floor(cocoa / 10);
        if (flourCups > 0 && sugarSpoons > 0 && cocoaSpoons > 0) {
            allCocies = (140 + 10 + 20) * Math.min(flourCups, sugarSpoons, cocoaSpoons) / 25;
            boxes = Math.floor(allCocies / 5);
            totalBoxes += boxes;
            console.log(`Boxes of cookies: ${boxes}`);
        } else {
            console.log('Ingredients are not enough for a box of cookies.');
        }
    }
    console.log(`Total boxes: ${totalBoxes}`);

}

santasCokies([
    '2', '200',
    '300', '500',
    '100', '200',
    '50'
]);

console.log('-------------------');

santasCokies(['1', '1400', '200', '100']);