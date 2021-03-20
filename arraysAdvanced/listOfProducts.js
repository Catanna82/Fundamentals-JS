function listOfProducts (products) {

    let sortList = products.sort();

    for (let i = 0; i < sortList.length; i++) {

        console.log(`${i + 1}.${sortList[i]}`);

    }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);