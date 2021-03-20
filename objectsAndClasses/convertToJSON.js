function convert(name, lastName, hairColor ) {
    let personInfo = {};
    personInfo.name = name;
    personInfo.lastName = lastName;
    personInfo.hairColor = hairColor;

    let infoJSON = JSON.stringify(personInfo);

    console.log(infoJSON);

}

convert ('George',
'Jones',
'Brown'
);

