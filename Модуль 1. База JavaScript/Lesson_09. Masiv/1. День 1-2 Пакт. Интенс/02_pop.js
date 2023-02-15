// Метод pop() удаляет последний 
// элемент из массива и возвращает его значение.

// синтаксис arr.pop()

const array = [1, 1, 2, 3, 5, 8, 13]

function pop(arr) {
    const lastItem = arr[arr.length - 1]
    arr.length = arr.length - 2

    return lastItem 
}

const res = pop(array)
// const res2 = array.pop()
// const res = array.pop()


console.log("array", array)
console.log("res", res)
// console.log("res2", res2)