function farming(params) {
    // Shadowmourne – requires 250 Shards;
    // Valanyr – requires 250 Fragments;
    // Dragonwrath – requires 250 Motes;

    let material = params.toLowerCase().split(' ');
    let neededMaterial = {
        shards: 0,
        fragments: 0,
        motes: 0
    }
    let junk = {};

    for (let i = 0; i < material.length; i += 2) {
        let qty = Number(material[i])
        let element = material[i + 1];
        switch (element) {
            case 'shards':
                neededMaterial.shards += qty;
                break;
            case 'fragments':
                neededMaterial.fragments += qty;
                break;
            case 'motes':
                neededMaterial.motes += qty;
                break;
            default:
                if (!junk.hasOwnProperty(element)) {
                    junk[element] = qty;
                } else {
                    let current = Number(junk[element]);
                    junk[element] = current + qty;
                }
                break;
        }
        if (neededMaterial.shards >= 250) {
            neededMaterial.shards = neededMaterial.shards - 250;
            console.log('Shadowmourne obtained!');
            break;
        } else if (neededMaterial.fragments >= 250) {
            neededMaterial.fragments = neededMaterial.fragments - 250;
            console.log('Valanyr obtained!');
            break;
        } else if (neededMaterial.motes >= 250) {
            neededMaterial.motes = neededMaterial.motes - 250;
            console.log('Dragonwrath obtained!');
            break;
        }
    }
    let sortedMaterials = Object.keys(neededMaterial).sort((a, b) => {
        if (neededMaterial[a] === neededMaterial[b]) {
            return a.localeCompare(b);
        } else {
            return neededMaterial[b] - neededMaterial[a];
        }
    }).map(v => `${v}: ${neededMaterial[v]}`);
    let sortedJunk = Object.keys(junk).sort((a, b) => {
        return a.localeCompare(b);
    }).map(v => `${v}: ${junk[v]}`);
    console.log(sortedMaterials.concat(sortedJunk).join('\n'));

}

farming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
// farming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');