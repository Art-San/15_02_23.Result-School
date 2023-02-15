// Метод map() создаёт новый массив с результатом вызова указанной функции 
// для каждого элемента массива.

// Синтаксис
// const new_array = arr.map(function callback( currentValue[, index[, array]]) {
//   // Возвращает элемент для new_array
// }[, thisArg])

// const updatedSalaries = salariesOfDeveloper.map((salary, index, array) => {
//   return salary * 2;                                                         //[800, 1000, 1200, 4000, 700]
// });



const array = [1, 1, 2, 3, 5, 8, 13]

function map(arr, callbackFn) {
  const result = []

  for (let i = 1; i < arr.length; i++) {
    const item = callbackFn(arr[i], i, arr)
    result.push(item)
  }

  return result
}


// const newArray = array.map(item => {
//   return item * 2
// })

// const newArray = array.map(item => item * 2)

const newArray = map(array, item => item ** 2)

console.log("newArray", newArray)

