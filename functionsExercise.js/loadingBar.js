function loadingBar (data) {
let loading = '..........';
let indicator = data / 10;
let loadingArr = loading.split('');

if (data == 100){
    console.log('100% Complete');
    console.log('[%%%%%%%%%%]');
} else {
    for (let i = 0; i < indicator; i++) {
        loadingArr.pop();
        loadingArr.unshift('%');
    }
    console.log(`${data}% [${loadingArr.join('')}]`);
    console.log('Still loading...');
}
}

loadingBar (10);
