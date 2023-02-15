// метод shift() позволяет удалить первый элемент из массива (элемент с индексом 0) 
// и возвратить его значение. Этот метод изменяет длину массива.

const array = [1, 2, 3, 5, 8, 13]

function shift(arr) {
    const firstItem = arr[0]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length -= 1

    return firstItem
}

const res = shift(array)


// const res = array.shift()
console.log("res", res)
console.log("array", array)