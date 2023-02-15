
//    -------- решение взял по следующей ссылки 
// https://www.cyberforum.ru/javascript-beginners/thread2862909.html


// function getDateFormat(date, separator) [

// ]

// getDateFormat()



const two = n => (n > 9 ? '' : "0") + n;
 
const getDateFormat = (date, separator = ".") =>
    two(date.getDate()) + separator + two(date.getMonth() + 1) + separator + date.getFullYear();
let date = new Date();

console.log(getDateFormat(date));


const date1 = new Date();

console.log('date', date1.getHours());

