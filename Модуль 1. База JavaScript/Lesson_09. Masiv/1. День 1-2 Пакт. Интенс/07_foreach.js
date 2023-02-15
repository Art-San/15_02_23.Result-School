// Метод forEach() выполняет указанную функцию один 
// раз для каждого элемента в массиве.

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

const array = [1, 1, 2, 3, 5, 8, 13]


// function iterator(item, index, arr) {
//     console.log(`item ${item}, index ${index}`)
// }
// array.forEach(iterator)


// array.forEach(function(item, index, array) {
//     console.log(`item ${item}, index ${index}`)
// })

// array.forEach((item, index) => {
//     console.log(`item ${item}, index ${index}`)
// })

// array.forEach(item => console.log(`item ${item}`))

function forEach(arr, callbackFn) {
    for (let i = 0; i < arr.length; i++) {
      callbackFn(arr[i], i, arr)  
    }
}

forEach(array, function(item, index) {
  array = item * 2
    console.log(`item ${item}, index ${index}`)
    console.log('tg', array)
})


