// https://www.cyberforum.ru/javascript-beginners/thread2862913.html


// function getDaysBeforeBirthday(nextBirthdayDate) {
//     let date1 = new Date(), date2 = nextBirthdayDate;
//     let year1 = date1.getFullYear(),
//         year2 = date2.getFullYear(),
//         month1 = date1.getMonth(),
//         month2 = date2.getMonth(),
//         day1 = date1.getDate(),
//         day2 = date2.getDate();
//     let d1 = new Date(year1, month1, day1),
//         d2 = new Date(year2, month2, day2),
//         // Смещение для уже полностью очищенных двух локальных дат
//         offset1 = d1.getTimezoneOffset(),
//         offset2 = d2.getTimezoneOffset(),
//         diff = (offset1 - offset2) * 60000,
//         days = (d2 - d1 + diff) / 86400000;
 
//     return days;
// }
 
// console.log(getDaysBeforeBirthday(new Date(2022, 8, 3)));





//           моё решение - это отправил
//-------------------------------------------------------------------



const date = new Date(2022, 8, 2);

function getDaysBeforeBirthday(nextBirthdayDate) {
    let z = nextBirthdayDate - new Date(),
        days = Math.round(z / 1000 / 60 / 60 / 24 );
    return `Дней до дня рождения осталось ${days}`;   
    }

const result = getDaysBeforeBirthday(date);
console.log ('result', result);


//          ДО КОНЦА АКЦИИ ОСТАЛОСЬ 
// -------------------------------------------------------------


// function getDaysBeforeBirthday(nextBirthdayDate) {
//     let z = nextBirthdayDate - new Date(), days = Math.round(z / 1000 / 60 / 60 / 24 );
//     // console.log ('z', z);
//     // console.log ('days', typeof days);
//     return {
//         'days': days,    
//     }
// }

// const result = getDaysBeforeBirthday(new Date(2022, 8, 2));
// console.log ('result', typeof result);


const date = new Date(2022, 5, 1);

function waiting(nextBirthdayDate) {
    let z = nextBirthdayDate - new Date(),
        seconds = Math.floor((z / 1000) % 60),
        minutes = Math.floor((z / (1000 * 60)) % 60),
        hours = Math.floor((z / (1000 * 60 * 60)) % 24),
        days = Math.floor(z / (1000 * 60 * 60 * 24) % 30),
        months = Math.floor(z / (1000 * 60 * 60 * 24 * 30) % 12)
        // years = Math.floor(z / (1000 * 60 * 60 * 24 * 30 * 12));
    
    return {
        // 'total': z,
        // 'years':years,
        'months': months,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

const result = waiting(date);
console.log ('result', result);