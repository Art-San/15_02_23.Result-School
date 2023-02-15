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
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const newArr = [...matrix[0], ...matrix[1], ...matrix[2]]
console.log('newArr', newArr)

const newArr1 = matrix[0].concat(matrix[1], matrix[2])
console.log('newArr1', newArr1)
