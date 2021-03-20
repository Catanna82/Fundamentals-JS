function pyramidOfKingDhoser (l, h) {
    let stoneNeed = 0;
    let marbleNeed = 0;
    let lapisLazuliNeed = 0;
    let goldNeed = 0;
    let pyramidIncrement = Number (h);
    let pyramidHeigh = 0;

    for (let pyramidLength = Number (l); pyramidLength >= 1 ; pyramidLength -= 2) {
        pyramidHeigh++;
        // if ([1, 2].includes(pyramidLength))
        if (pyramidLength === 1 || pyramidLength === 2) { // TODO: fix this
            goldNeed = pyramidLength * pyramidLength * pyramidIncrement;
        } else if (pyramidHeigh % 5 === 0) {
            stoneNeed += (pyramidLength - 2) * (pyramidLength - 2) * pyramidIncrement;
            lapisLazuliNeed += (pyramidLength * 4 - 4) * pyramidIncrement;
        } else {
            stoneNeed += (pyramidLength - 2) * (pyramidLength - 2) * pyramidIncrement;
            marbleNeed += (pyramidLength * 4 - 4) * pyramidIncrement;
        }
    }
    console.log(`Stone required: ${Math.ceil(stoneNeed)}`);
    console.log(`Marble required: ${Math.ceil(marbleNeed)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliNeed)}`);
    console.log(`Gold required: ${Math.ceil(goldNeed)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeigh * pyramidIncrement)}`);
}
pyramidOfKingDhoser (23, .5);
