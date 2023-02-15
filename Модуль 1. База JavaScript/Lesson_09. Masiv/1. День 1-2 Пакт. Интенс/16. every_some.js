// Метод every() проверяет, удовлетворяют ли все элементы массива условию, 
// заданному в передаваемой функции.
const salariesOfDeveloper = [400, 2000, 500, 600,350];
// const allElementExists = salariesOfDeveloper.every((salary) => {
//     return salary > 370;                                           // вернет false так как все элемент должны быть больше 370 
//     // return salary > 0;                                                  // вернет true так как каждый элемент больше 0                                     
// })
// console.log('allElementExists', allElementExists);


// Метод some() проверяет, удовлетворяет ли какой-либо 
// элемент массива условию, заданному в передаваемой функции.
// const salariesOfDeveloper = [400, 2000, 500, 600,350];
// const elementExists = salariesOfDeveloper.some((salary) => {
//     // return salary === 400;                                           // вернет true так как есть в массив 400 
//     return salary > 50;                                                  // вернет false так как нет меньше 50                                     
// })
// console.log('elementExists', elementExists);

const array = [2, 2, 3, 4, 5, 6, 7]
// const array = [2, 2]

// function every(arr, fn) {
//     for (let i = 0; i < array.length; i++){
//       if (!fn(arr[i]))  return false
//     }
//     return true
// }

function some(arr, fn) {
    for (let i = 0; i < array.length; i++){
        // console.log('some', arr[i])
      if (fn(arr[i]))  return true
    }
    return false
}


// console.groupCollapsed("native")
// log(array.some(i => i % 2))
// log(array.some(i => typeof i === 'string'))
// log(array.every(i => i % 2))
// log(array.every(i => typeof i === 'number'))
// console.groupEnd()

// console.group("own impl")
log(some(array, i => i % 2))
log(some(array, i => typeof i === 'string'))
// log(every(array, i => i % 2))
// log(every(array, i => typeof i === 'number'))
// console.groupEnd()





function log(arg) {
    console.log(arg)
}


// const salariesOfDeveloper = [400, 2000, 500, 600,350];
// const elementExists = salariesOfDeveloper.some((salary) => {
//     // return salary === 400;                                           // вернет true так как есть в массив 400 
//     return salary > 50;                                                  // вернет false так как нет меньше 50                                     
// })
// console.log('elementExists', elementExists);