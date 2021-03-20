function fancyBarcodes(params) {
    params.shift();

    for (let el of params) {
        let validBarcodes = /^@#{1,}[A-Z][a-zA-Z0-9]{4,}[A-Z]@#{1,}$/;
        let validNumbers = /\d/g;
        let matchesBarcode = el.match(validBarcodes);
        if (matchesBarcode !== null) {
            let productNum = matchesBarcode[0].match(validNumbers);
            if (productNum === null) {
                productNum = ['00'];
            }
            console.log(`Product group: ${productNum.join('')}`);
        } else {
            console.log('Invalid barcode');
        }

    }
}

fancyBarcodes(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##']);
console.log('--------------------------------');
fancyBarcodes([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
]);