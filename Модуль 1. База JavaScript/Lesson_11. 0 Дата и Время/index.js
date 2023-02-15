// const date = new Date();
// console.log('date', date);

// new Date(yeae, month, date, hours, minutes, seconds, ms)

// 0-январь 11- декабрь
 
const newDate = new Date(2000, 1, 10, 11, 55, 5, 5000);
// console.log('newDate', newDate);

// console.log('year', newDate.getFullYear());
// console.log('month', newDate.getMonth());
// console.log('dste', newDate.getDate());
// console.log('hours', newDate.getHours());
// console.log('minutes', newDate.getMinutes());
// console.log('seconds', newDate.getSeconds());
// console.log('ms', newDate.getMilliseconds());

// -------- ДЕНЬ НЕДЕЛИ -----
// ------- 0-воскресенье 6-суббота

console.log('day', newDate.getDay());
if (newDate.getDay() === 4) {
    console.log('Сегодня у нас четверг');
}


newDate.setFullYear(2001);
newDate.setMonth(2);
newDate.setDate(20);
newDate.setHours(12);
newDate.setMinutes(15);
newDate.setSeconds(15);
newDate.setMilliseconds(500);

console.log('newDate', newDate);

//        Date.parse()
// Метод Date.parse()разбирает количество строк и возвращает миллисекунды, 
// прошедшие с 1 января 1970 года в 00:00:00 по UTC.