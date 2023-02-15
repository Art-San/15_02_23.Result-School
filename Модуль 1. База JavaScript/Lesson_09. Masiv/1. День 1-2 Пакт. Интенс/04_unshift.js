// Метод unshift() добавляет один или более элементов в начало массива 
// и возвращает новую длину массива.

// const array = [1, 1, 2, 3, 5, 8, 13]

// function unshift(arr, num) {
//     const merget = [num].concat(arr)

//     for (let i = 0; i < merget.length; i++) {
//         arr[i] = merget[i]
//     }

//     return arr.length
// }

// const res = unshift(array, 42)

// console.log("res", array)
// console.log("array", res)

const array = [1, 1, 2, 3, 5, 8, 13]

function unshift(arr, ...num) {
    const merget = [...num, ...arr]

    console.log("merget", merget)

    for (let i = 0; i < merget.length; i++) {
        arr[i] = merget[i]
    }

    return arr.length
}


const res = unshift(array, 42, 42, 42)

// const newLength = array.unshift(42)

// console.log("newLength", newLength)
console.log("res", array)

console.log("array", res)

