// Метод filter() создаёт новый массив со всеми элементами, 
// прошедшими проверку, задаваемую в передаваемой функции.
// Возвращает новый масив

// const salariesOfDeveloper = [400, 2000, 500, 600,350, 9];

// const filterSalaries = salariesOfDeveloper.filter((salary, index, array) => {
//     // return salary > 500;                                                       // [600, 2000]   
//     // return salary % 2 === 0;                                                // [400, 500, 350]
//     return salary % 2;                                                         // [9]
    
// })

// console.log('filterSalaries', filterSalaries);



const array = [2, 2, 3, 4, 5, 6, 7]

function filter(arr, callback) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const item = callback(arr[i], i, arr)
        console.log('item', item) 
        console.log('arr[i]', arr[i])
        // console.log('i', i)
        // console.log('arr', arr)

        if (item === true) {
            result.push(arr[i])
        }
        // result.push(item)
    }
   
    
   
    return result
}

const filtered = filter(array, item => item > 2)

console.log("filtered", filtered)










// function log(arg) {
//     console.log(arg)
// }

// console.groupCollapsed("native")
// log(array.filter(item => item % 2 === 0))  //[2, 4, 6]
// log(array.filter(item => item % 2)) // [1, 3, 5, 7]
// log(array.filter((_, index) => index % 2 === 0))  //[2, 4, 6]
// log(array.filter((_, index) => index % 2)) // [1, 3, 5, 7]
// console.groupEnd()

// const filtered = array
// .filter(item => item % 2)     // [1, 3, 5, 7]
// // 3 % 2 => return 1           // Boolean(1) true
// // 4 % 2 => return 0           // Boolean(0)  false
// .filter(item => item >= 3)     // [3, 5, 7]
// .map(item => item ** 2)       // [25, 49]

// log(filtered)

// const values = [42, 1, null, undefined, 'a', 0, 1, 42, 'Vladilen', false, true, '', 'b', NaN]

// log(values.filter(item => item))

// const mat = ['мат1', 'мат2']
// const text = `Привет, я мат1 рад тебя видетьб мат2 давно тебя не встречал. Ты мат1 очень красивая. Мат2 я этому рад`

// function clear(word) {
//     return !mat.includes(word.toLowerCase())
// }

// const clean = text
// .split(' ')
// .filter(clear)
// // .filter(word => word !== 'мат1' && word.toLowerCase() !== 'мат2')
// .join(' ')

// console.log("text", text)
// console.log("clean", clean)
