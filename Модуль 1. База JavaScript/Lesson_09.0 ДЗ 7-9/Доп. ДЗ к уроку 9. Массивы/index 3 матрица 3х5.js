//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'матрицу 3x5'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================
const num1 = 3
const num2 = 5
const array = []

for (let i = 0; i < num1; i++) {
 const row = []
 for (let j = 1; j <= num2; j++) {
  row.push(j)
 }
 array.push(row)
}

console.log('array', array)



//                 ПРАВИЛЬНОЕ РЕШЕНИЕ
//==================================================================
// const matrix = [];

// for (let i = 0; i < 3; i += 1) {
//   const row = [];
//   for (let j = 0; j < 5; j += 1) {
//     row.push(j + 1);
//   }
//   matrix.push(row);
// }

// console.log(matrix);