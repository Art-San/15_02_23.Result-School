// Метод find() возвращает значение первого найденного в массиве элемента, 
// которое удовлетворяет условию переданному в callback функции. 
// В противном случае возвращается undefined.

// Синтаксис 
// arr.find(callback[, thisArg])
// const res = array.find(item => item === 8)

const array = [1, 1, 2, 3, 5, 8, 13]

function find(arr, callbackFn) {
  for (let i = 1; i < arr.length; i++) {
   const doesExist = callbackFn(arr[i])
   console.log("doesExist", doesExist)
   console.log("i", i)
   if (doesExist) {
    return arr[i]
   }
  }

}



const res = find(array, item => item === 8)

console.log("res", res)