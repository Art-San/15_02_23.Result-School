//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = `количество миллисекунд с 1 января 1970 года 00:00:00 по UTC. `
// const h1 = document.querySelector('h1')
// h1.append(heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================

// const convertDaysToMs = (days) => days * 24 * 3600 * 1000;

// const addDays = (date, days) => {
//   if (!(date instanceof Date)) {
//     return "Первый параметр должен быть экземпляром класса Date!";
//   }
//   if (!days || typeof days !== "number") return date;

//   return new Date(date.getTime() + convertDaysToMs(days));
// };

// const date = new Date();
// console.log("before", date);
// const newDate = addDays(date, 5);
// console.log("after", newDate);

// console.log('date.getTime()', date.getTime())


//        моё решение
// =============================================================

const date = new Date()

function addDays(date, days = 1) {
    const dayInMS = days * 1000 * 60  * 60 * 24

    return new Date(date.getTime() + dayInMS)
}

const newDate1 = addDays(date, 5)
console.log('date', date)
console.log('newDate1', newDate1)











