// https://learn.javascript.ru/task/sum-arguments


// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/arguments
// Объект arguments — это подобный массиву объект,
//      который содержит аргументы, переданные в функцию.



function sum() {
    let result = 0;
  
    for (let i = 0; i < arguments.length; i += 1) {
      result += arguments[i];
    }
  
    return result;
  }

console.log(sum(1, 2, 3)) // 6
console.log(sum(2, 2)) // 4
console.log(sum(10, 15, 249, 653, 846)) // 1773


