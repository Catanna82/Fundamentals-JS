function dayOfWeek (num){
    let days = ['Monday', 'Tuesday',
               'Wednesday','Thursday', 
               'Friday', 'Saturday', 'Sunday']
    if (num >= 1 && num <= 7) {
        console.log(days[num-1]);
    } else {
        console.log('Invalid day!');
    }
}
dayOfWeek(11);

//function isValid (arr, index) {
//    if (index < 0 || index >= num.length){
//        return false;
//    } else {
//        return true;
//    }
//}