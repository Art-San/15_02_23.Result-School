//---------  slice()
// Метод slice() возвращает новый массив, 
// содержащий копию части исходного массива.
// const res = slice(array, 2)

const array = [1, 1, 2, 3, 5, 8, 13]

// function slice(arr, start, end = arr.length) {
function slice(arr, start, end) {
    const result = []

    const lastIndex = end ? end : arr.length 
    // let lastIndex = arr.length
    // if (end) {
    //     lastIndex === end
    // }


    for (let i = start; i < lastIndex; i++) {
        result.push(arr[i])
    }


    return result
}

const res2 = slice(array, 2, 4)
const res = array.slice(2, -4)


console.log("res", res)
console.log("res2", res2)
console.log("array", array)

//=================================================================
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]