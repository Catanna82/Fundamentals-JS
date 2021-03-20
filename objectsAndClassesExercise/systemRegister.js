function systemRegister(input) {
    let dataSystem = {};
    // dataSystem = {
    //     <system>: {
    //         <component>: {
    //             <subComponent> [
    //                 <subComponent1>,
    //                 <subComponent2>,
    //                 ...
    //             ]
    //         }
    //     }
    // }
    let result = [];

    for (const el of input) {
        let element = el.split(' | ');
        if (!dataSystem[element[0]]) {
            dataSystem[element[0]] = {};
        }
        if (!dataSystem[element[0]][element[1]]) {
            dataSystem[element[0]][element[1]] = [];
        }
        dataSystem[element[0]][element[1]].push(element[2]);
    }
    let systemSorted = Object.keys(dataSystem).sort((a, b) => {
        let bLength = Object.keys(dataSystem[b]).length;
        let aLength = Object.keys(dataSystem[a]).length;
        if (aLength !== bLength) {
            return bLength - aLength;
        }
        return a.localeCompare(b);
    })
    for (const el of systemSorted) {
        result.push(el);
        let component = dataSystem[el];
        let componentSorted = Object.keys(component).sort((a, b) => {
            return component[b].length - component[a].length;
        })
        for (const part of componentSorted) {
            result.push(`|||${part}`);
            let subcomponent = component[part].map(v => `||||||${v}`);
            result = result.concat(subcomponent);
        }
    }
    console.log(result.join('\n'));

}

systemRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);