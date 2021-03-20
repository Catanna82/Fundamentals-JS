function nextDay(year, month, day) {
    const date = new Date(year, month - 1, day + 1);
    const dateSplit = date.toLocaleDateString().split('/');
    console.log(`${dateSplit[2]}-${dateSplit[0]}-${dateSplit[1]}`);
    // console.log([dateSplit[2], dateSplit[0], dateSplit[1]].join('-'));
};
nextDay(2016, 9, 30);
