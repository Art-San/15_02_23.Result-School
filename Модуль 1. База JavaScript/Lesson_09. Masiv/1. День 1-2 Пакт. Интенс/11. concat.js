const array = [1, 2, 3, 4, 5, 6, 7]
const next = [8, 9, 13]
const next2 = [10, 11]
const copy = array.concat()


// console.log(array.concat(next, next2))   // эта конструкция вернет новый массив который можно сохранить в переменную
// console.log([-1, 0].concat(array, next, next2))
// console.log(`copy`, copy)

// array.push(8)
// console.log(`array`, array)


function concat(arr, sub = []) {
    const copy = []
    const sum = arr.length + sub.length
    for (let i = 0; i < sum; i++) {
        if (i < arr.length) {
            copy[i] = arr[i]
        } else {
            console.log('i', i)
            copy[i] = sub[i - arr.length]
        }
        
    }

    return copy
}

console.log(concat(array))
console.log(concat(array, next))

// function concat(arr, sub = []) {
//     const copy = []
//     function fill(a) {
//     for (let i = 1; i < a.length; i++) {
//         copy.push(a[i])
//     }
// }
// fill(arr)
// fill(sub)

// return copy
// }

// console.log(concat(array))
// console.log(concat(array, next))



// function concat(arr, sub = []) {
//     const copy = []
//     for (let i = 1; i < arr.length; i++) {
//         copy.push(arr[i])
//     }

//     for (let i = 1; i < sub.length; i++) {
//         copy.push(sub[i])
//     }

//     return copy
// }

// console.log(concat(array))
// console.log(concat(array, next))