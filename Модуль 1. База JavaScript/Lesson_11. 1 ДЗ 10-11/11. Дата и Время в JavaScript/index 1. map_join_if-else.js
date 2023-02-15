//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = getDateFormat(new Date)
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================


const addZero = (num) =>
  String(num).length === 1 ? `0${num}` : String(num);

const getDateFormat = (date, separator = ".") => {
  if (!(date instanceof Date)) {
    return "Первый параметр должен быть экземпляром класса Date!";
  }
  const dateItem = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return [dateItem, monthIndex + 1, year]
    .map(addZero)
    .join(separator);
};

console.log(typeof getDateFormat(new Date()));




function getDateFormat(date, separator = '.') {
    // const day = date.getDate()
    const day = 11
    const month = 1 + date.getMonth()
    const year = date.getFullYear()
    function zero(num) {
        let zero
        if (num < 10) {
            zero = 0
        } else {zero = ""}
        return zero
    }
    if (month < 10) {zeroMonth = 0}
    return `${zero(day)}${day}${separator}${zero(month)}${month}${separator}${year}`
}

// console.log(getDateFormat(new Date))