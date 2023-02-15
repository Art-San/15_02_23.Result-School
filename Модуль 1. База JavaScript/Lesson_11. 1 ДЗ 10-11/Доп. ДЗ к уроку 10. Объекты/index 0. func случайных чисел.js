//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = `интернет-магазин по доставке еды `
// const h1 = document.querySelector('h1')
// h1.append(heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================
function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// const sluchaNum = getRandomNumberInRange(0, 9)

function pass(num1, num2) {
  const arr = []
  while (arr.length <= 10) {
     arr.push(getRandomNumberInRange(num1, num2))
  }
  return arr

}

const password = pass(0, 9)

console.log('password', password)


