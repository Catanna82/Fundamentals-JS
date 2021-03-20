function cutAndReverce(text) {
    let i = text.length / 2;
    let slicedOne = text.slice(0, i);
    let slicedTwo = text.slice(i);
    let result = '';
    for (let i = slicedOne.length - 1; i >= 0; i--) {
        let element = slicedOne[i];
        result += element;
    }
    let resultTwo = '';
    for (let i = slicedTwo.length - 1; i >= 0; i--) {
        let element = slicedTwo[i];
        resultTwo += element;
    }
    console.log(result);
    console.log(resultTwo);
}

cutAndReverce('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverce('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')