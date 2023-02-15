

// js прибавить дни к дате  
// https://overcoder.net/q/2637/%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%B4%D0%BD%D0%B8-%D0%B2-javascript-date



// https://www.cyberforum.ru/javascript-beginners/thread2862930.html



        // function addDays(date, days = 1) {
        //     // console.log('date', date);
        //     return new Date(Date.now() + days * 86400000);
        // }
 
        // console.log(addDays(new Date(), ));







        // const moonLanding = new Date('July 20, 69 20:17:40 GMT+00:00');

// // milliseconds since Jan 1, 1970, 00:00:00.000 GMT
// console.log(moonLanding)
// // console.log(moonLanding.getTime());
// // expected output: -14182940000

const numberMsInDay = 24*60*60*1000;

function addDays(date, numberMsInDay, days = 1) {
    return new Date(Date.now() + days * numberMsInDay);
}

let addDays1 = (addDays(new Date(), numberMsInDay, 3));
console.log('addDays1', addDays1);



