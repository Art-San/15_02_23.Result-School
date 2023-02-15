// Метод fill() заполняет все элементы массива от начального 
// до конечного индексов одним значением.

// Your code here...
// const array = new Array(100).fill(0);
// // array.fill(0, 0, 100)
// console.log('array', array); // [0, 0, 0, 0, 0, 0, /* ... , */ 0]

function fill(arr, start, end) {
    const masiv = []
    for (let i = start; i < end; i++) {
        masiv.push(arr)
    }
    
    return masiv
};

console.log(fill("f", 0, 100))


// Правильное решение
const array2 = Array(100).fill(0);
console.log(array2); // [0, 0, 0, 0, 0, 0, /* ... , */ 0]



