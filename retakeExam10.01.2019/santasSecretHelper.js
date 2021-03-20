function santasSecretHelper(input) {
    let integer = Number(input.shift());
    let line;
    let newMassage = [];
    while ((line = input.shift()) !== 'end') {
        let newCode = [];
        for (let el of line) {
            el = Number(el.charCodeAt());
            let newChar = el - integer;
            newCode.push(String.fromCharCode(newChar));
        }
        newMassage.push(newCode);
    }
    let list = [];
    for (let el of newMassage) {
        el = el.join('');
        list.push(el);
    }
    let result;
    while (list .length > 0) {
        result = list.shift();
        let reg = /@((?<name>[A-Za-z]+))[^@\-!:>]*!(?<type>[G,N])!/g;
        let valid = reg.exec(result);
        if (valid !== null) {
            if (valid.groups.type !== 'N') {
                console.log(valid.groups.name);
            }
        }
    }
}

santasSecretHelper([
    '3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejn$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'
  ]);

console.log('-------------------');

santasSecretHelper([
    '4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    'DReh}e=<4lhzj1%K%',
    'end'
  ]);

console.log('-------------------');

santasSecretHelper([
    '3',
    "N}eideidmk$'(mnyenmCNlpamnin$J$",
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end'
]);