// // ---------------includes----------
// Метод includes() определяет, содержит ли массив определённый элемент, 
// возвращая в зависимости от этого true или false.

const technolgies = ['javascript', 'HTML', 'CSS'];
// console.log('technolgies CSS', technolgies.includes('CSS'));    // technolgies CSS true
// console.log('technolgies c++', technolgies.includes('c++'));    // technolgies c++ false

// const isTechnolgies = technolgies.includes('HTML');
// console.log('istechnolgies', isTechnolgies);                   // istechnolgies true


const array = [1, 2, 3, 4, 5, 6, 7]

function includes(arr, search, start = 0) {
    // for (let i = start; i < arr.length; i++) {
    //     if (arr[i] === search) {
    //         return true
    //     }
    // }
    //  return false  
    return arr.indexOf(search, start) > 0 ? true : false
}



console.groupCollapsed("native")
console.log(array.includes(3))
console.log(array.includes(3, 3))
console.log(array.includes(8))
console.groupEnd()

console.group("own impl")
console.log(includes(array, 3))
console.log(includes(array, 3, 3))
console.log(includes(array, 8))
console.groupEnd()

