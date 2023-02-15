// https://coderoad.ru/29111002/%D0%A3%D0%BC%D0%BD%D0%BE%D0%B6%D0%B8%D1%82%D1%8C-%D0%BD%D0%B0-%D1%87%D0%B8%D1%81%D0%BB%D0%BE-%D0%B2%D1%81%D0%B5-%D1%8D%D0%BB%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-forEach-%D0%B2-JavaScript

const arr1 = [1, 7, 4, 8, 3, 4, 5];
const arr2 = [4, 2, 7, 9, 3, 1, 3, 6, 4, 3];

function foo(arr) {
const newMas = arr.slice(arr.length - 3)

newMas.forEach((item, index) => {
    // console.log("newMas", newMas)
    // console.log("index", index)
    // console.log("item", item)
    newMas[index] = item * 2
})
return newMas

}

console.log(foo(arr1)); // [6, 8, 10]
console.log(foo(arr2)); // [12, 8, 6]

// https://codepen.io/asava1980/pen/eYMjJjQ




// var array = [ 23, 67, 120, 170, 200, 212, 350 ];
// array.forEach(function(element, index, _array) {
//     _array[index] = element * 2;
// });

// console.log("array", array)

// // или
// var scaledArray = [];
// array.forEach(function(element, index) {
//     scaledArray[index] = element * 0.8;
// });
