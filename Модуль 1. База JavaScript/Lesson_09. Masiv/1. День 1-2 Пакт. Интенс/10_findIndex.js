// Метод findIndex() возвращает индекс в массиве, если элемент 
// удовлетворяет условию проверяющей функции. В противном случае возвращается -1.

// Синтаксис
// arr.findIndex(callback[, thisArg])

///////////////////////////////////////////////////////////////////////////////////////////////
// const searchedIndex = salariesOfDeveloper.findIndex((salary) => {
//     return salary === 400;                                              // вернет 0 так как у 400 индекс 0
// })
// console.log('searchedIndex', searchedIndex);
// ========================================================================================

// const array = [1, 1, 2, 3, 5, 8, 13]

// function IndexOf(arr, num) {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) 
//             return i;
//     }

//     return -1;
// }

// let index = IndexOf(array, 25);
// console.log("index", index);


const array = [1, 1, 2, 3, 5, 8, 13]
function findIndex(arr, callbackFn) {
    for (let i = 1; i < arr.length; i++) {
     const doesExist = callbackFn(arr[i])
     if (doesExist) {
      return i
     }
    }
    return -1
  
  }
  
  
  const res = findIndex(array, item => item === 8)
  
  console.log("res", res)













// function arrayObjectIndexOf(myArray, property, searchTerm) {
//     for(let i = 0, len = myArray.length; i < len; i++) {
//         if (myArray[i][property] === searchTerm) 
//             return i;
//     }

//     return -1;
// }

// let index = arrayObjectIndexOf(inputArr, 'name', 'dian');
// console.log(index);