function printCertificate (grade, namesArr) {
    if (pass(grade)) {
        printHeather();
        console.log(getName(namesArr));
        grades(grade);
    } else {
        console.log (getName(namesArr) + ' ' + 'does not qualify')
    }
    function pass(grade) {
        return grade >= 3;
    }
    function printHeather() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
      }
    function getName(namesArr) {
        return namesArr[0] + " " + namesArr[1];
    }
    function grades (grade) {
        if (grade >= 5.50) {
            console.log(`Excellent (${grade.toFixed(2)})`);
        } else if (grade >= 4.50) {
            console.log(`Very good (${grade.toFixed(2)})`);
        } else if (grade >= 3.50) {
            console.log(`Good (${grade.toFixed(2)})`);
        } else if (grade >= 3.00) {
            console.log(`Poor (${grade.toFixed(2)})`);
        } else {
            console.log(`Fail (${Math.trunc(grade)})`);
        }
    }
}
printCertificate (2.50, ['Anna', 'Todorova'])