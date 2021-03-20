const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

// const months = {
//     1: 'January',
//     2: 'February',
//     3: 'March',
//     4: 'April',
//     5: 'May',
//     6: 'June',
//     7: 'July',
//     8: 'August',
//     9: 'September',
//     10: 'October',
//     11: 'November',
//     12: 'December'
// };

function monthPrinter (number) {
    console.log(months[number - 1] || 'Error');
}
monthPrinter (13);