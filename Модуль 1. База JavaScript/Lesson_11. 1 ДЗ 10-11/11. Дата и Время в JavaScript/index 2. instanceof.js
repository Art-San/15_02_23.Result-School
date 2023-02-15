//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = `Сколько дней осталось до вашего дня рождения? `
// const h1 = document.querySelector('h1')
// h1.append(heder)
// ===============================================================
//        Правильное решение
//=================================================================
const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24);
console.log("convertMsToDays", convertMsToDays)

const getDaysBeforeBirthday = (birthdayDate) => {
  if (!(birthdayDate instanceof Date)) {
    return "Параметр функции должен быть экземпляром класса Date!";
  }
  const currentDateMs = Date.now();
  const birthdayDateMs = birthdayDate.getTime();
  return convertMsToDays(birthdayDateMs - currentDateMs);
};

console.log(getDaysBeforeBirthday(new Date(2025, 11, 10)));



// const nextBirthday = new Date(2023, 8, 2)

// function getDaysBeforeBirthday(nextBirthday) {
//     const milliseconds = nextBirthday.getTime() - Date.now()
//     function convertMsToDays(t) {
//        const days = Math.floor(t / 1000 / 60 / 60 / 24)
//        return days
//     }
//     return convertMsToDays(milliseconds)
// }

// const numDay = getDaysBeforeBirthday(nextBirthday)
// body.innerHTML = ` <h1>${heder} ${numDay}</h1>`

// console.log('getDaysBeforeBirthday(nextBirthday)', getDaysBeforeBirthday(nextBirthday))



