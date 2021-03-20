function schoolGrades(params) {

    let students = new Map()
    for (const line of params) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (!students.has(name)) {
            students.set(name, []);
        }
        let existing = students.get(name);
        for (let grade of grades) {
            existing.push(grade);
        }
    }

    function compareAverage([nameA, gradesA], [nameB, gradesB]) {
        let avgA = 0;
        gradesA.forEach(x => avgA += x);
        avgA /= gradesA.length;

        let avgB = 0;
        gradesB.forEach(x => avgB += x);
        avgB /= gradesB.length;
        return avgA - avgB;
    }

    let sorted = Array.from(students).sort(compareAverage);

    for (const [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(', ')}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);