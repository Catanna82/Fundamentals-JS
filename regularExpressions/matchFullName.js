function matchFullName([str]) {
    // let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    // let validName = null;
    // let validNames = [];
    // while ((validName = pattern.exec(str)) !== null){
    //     validNames.push(validName);
    // }
    // console.log(validNames.join(' '));
    
        let text = str;
        let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    
        let result = text.match(pattern);
        console.log(result.join(' '));

}

matchFullName(["Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"]);