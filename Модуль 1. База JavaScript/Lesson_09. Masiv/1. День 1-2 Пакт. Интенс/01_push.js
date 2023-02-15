// Метод push() добавляет один или более элементов 
// в конец массива и возвращает новую длину массива.

// синтаксис arr.push(element1, ..., elementN)


const array = [1, 1, 2, 3, 5, 8, 13]
// array[array.length] = 42

function push(arr, num) {
    arr[arr.length] = num
    return arr
}
const res = push(array, 42)

// const res = array.push(21, 34)


console.log("res", res)
console.log("array", array)