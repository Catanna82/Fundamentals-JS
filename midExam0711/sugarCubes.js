function sugarCubes(arr) {
    let cubes = arr.shift();
    command = arr.shift();
    while (command !== 'Mort') {
        command = command.split(' ');
        let index = cubes.indexOf(Number(command[1]))
        switch (command[0]) {
            case 'Add':
                cubes.push(Number(command[1]));
                break;
            case 'Remove':
                if (index >= 0){
                    cubes.splice(index, 1);
                }
                break;
            case 'Replace':
                if (index >= 0) {
                    cubes[index] = Number(command[2]);
                }
                break;
            case 'Collapse':
                cubes = cubes.filter(x => x >= Number(command[1]));
                break;
        }
        command = arr.shift();
    }
    console.log(cubes.join(' '));
}

sugarCubes([[2, -1, 0, -3, 9, 8, 7, 2],
    "Collapse 8",
    "Mort"]);
