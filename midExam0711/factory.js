function factory(biscuitsPerDay, workers, otherFactory) {
    let allForMonth = 10 * Math.floor(0.75 * biscuitsPerDay * workers) + (20 * biscuitsPerDay * workers);
    console.log(`You have produced ${allForMonth} biscuits for the past month.`);
    let perc;
    if (allForMonth > otherFactory) {
        perc = ((allForMonth - otherFactory) / otherFactory) * 100
        console.log(`You produce ${perc.toFixed(2)} percent more biscuits.`);
    } else {
        perc = ((otherFactory - allForMonth) / otherFactory) * 100;
        console.log(`You produce ${perc.toFixed(2)} percent less biscuits.`);
    }
}

factory(1, 1, 2000);