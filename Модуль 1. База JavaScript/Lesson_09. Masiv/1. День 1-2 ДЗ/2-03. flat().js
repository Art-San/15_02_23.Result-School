// Метод flat() возвращает новый массив, в котором все элементы вложенных 
// подмассивов были рекурсивно "подняты" на указанный уровень depth.

const array = [1, 2, [3, 4], [[5, 6], [7, 8]], [[[9]]]];

// Your code here...
const flattedArray = array.flat(Infinity)

console.log(flattedArray); // [1, 2, 3, 4, 5, 6, 7, 8]


// Правильное решение
// const flattedArray = array.flat(Infinity);
// console.log(flattedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]