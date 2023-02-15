// взял по ссылки, закоментировано оригинал 
// https://qna.habr.com/q/688340


/*
function waiting(endtime) {
    let z = Date.parse(end) - Date.parse(new Date()),
        seconds = Math.floor((z / 1000) % 60),
        minutes = Math.floor(не знаю формулу),
        hours = Math.floor(не знаю формулу),
        days = Math.floor(не знаю формулу),
        months = Math.floor(не знаю формулу),
        years = Math.floor(не знаю формулу);
    return {
        'total': z,
        'years':years,
        'months': months,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

years = Math.floor(t / (1000 * 60 * 60 * 24 * 30 * 12)),
months = Math.floor(t / (1000 * 60 * 60 * 24 * 30) % 12),
days = Math.floor(t / (1000 * 60 * 60 * 24) % 30),
hours = Math.floor((t / (1000 * 60 * 60)) % 24),
minutes = Math.floor((t / (1000 * 60)) % 60),
seconds = Math.floor((t / 1000) % 60);
*/

// ----------   Работает сщудинил два кода сверху   --------

/*
function waiting() {
    let z = new Date(2022, 8, 2) - new Date(),
        seconds = Math.floor((z / 1000) % 60),
        minutes = Math.floor((z / (1000 * 60)) % 60),
        hours = Math.floor((z / (1000 * 60 * 60)) % 24),
        days = Math.floor(z / (1000 * 60 * 60 * 24) % 30),
        months = Math.floor(z / (1000 * 60 * 60 * 24 * 30) % 12),
        years = Math.floor(z / (1000 * 60 * 60 * 24 * 30 * 12));
    
    return {
        'total': z,
        'years':years,
        'months': months,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

const result = waiting();
console.log ('result', result);
*/


// function waiting() {
//     let z = new Date(2022, 8, 2) - new Date(),
//         days = Math.round(z / 1000 / 60 / 60 / 24 );
//     return {
//         'days': days,    
//     }
// }

// const result = waiting();
// console.log ('result', result);



// const date1 = new Date();
// const date2 = new Date(2022, 8, 2);

// количество мс с Января 1 1970


// console.log('date1', date1.getTime());
// console.log('date2', date2.getTime());

// let difference = date2.getTime() - date1.getTime();
// // difference = difference / 1000 / 60 / 60 / 24;
// difference = difference / 1000 / 60 / 60 / 24;
// difference = Math.round(difference)
// console.log('difference', difference);

// function sum(a,b) {
//     // console.log('hello world 1');

//     return a + b;

//     console.log('hello world 1'); // не выведится в консол так как стоит после ретурна
// }

// const result = sum(10, 20);
// console.log ('result', result);



