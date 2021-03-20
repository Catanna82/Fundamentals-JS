function bonusScore(params) {
    params = params.map(Number);
    let studentsCount = params.shift();
    let lecturesCount = params.shift();
    let additionalBonus = params.shift();
    let studentScore = 0;
    let totalBonus = 0;

    for (let i = 0; i < studentsCount; i++) {
        let students = params[i];
        if (students <= lecturesCount) {
            if (students > studentScore){
                studentScore = students;
                totalBonus = Math.ceil(studentScore /lecturesCount * (5 + additionalBonus));
            }
        }
    }
    console.log(`Max Bonus: ${totalBonus}.`);
    console.log(`The student has attended ${studentScore} lectures.`);

}

bonusScore([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  );