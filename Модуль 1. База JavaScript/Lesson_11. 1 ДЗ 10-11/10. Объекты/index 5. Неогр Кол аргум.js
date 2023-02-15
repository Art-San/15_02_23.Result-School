//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'неограниченное количество аргументов и возвращать их сумму.'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================

function sum(...numbers) {
  console.log(numbers)
  return numbers.reduce((acc, a) => acc + a, 0);
}

console.log(sum(1, 2, 3)); // 6
// console.log(sum(2, 2)); // 4
// console.log(sum(10, 15, 249, 653, 846)); // 1773