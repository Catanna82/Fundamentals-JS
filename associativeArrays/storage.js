function storage(params) {
    let products = new Map();

    for (const element of params) {
        let [product, qty] = element.split(' ');
        qty = Number(qty);

        if (products.has(product)) {
            qty += products.get(product);
        }
        products.set(product, qty);
    }
    // for (const [key, value] of products) {
    //     console.log(`${key} -> ${value}`);
    // }
    products.forEach((qty, product) => {
        console.log(`${product} -> ${qty}`);
    });
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);