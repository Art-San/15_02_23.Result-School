const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Your code here...
const sum = arrayNumbers.reduce((acc, salary, index, array) => {
    return acc + salary
})

// const aver = arrayNumbers.reduce((acc, salary, index, array) => {
//     return acc + salary / arrayNumbers.length
   
// })
const average = Math.floor(sum / arrayNumbers.length)
console.log(sum); // 45
console.log(average); // 5


// Правильное решение
// const salariesOfDeveloper = [400, 2000, 500, 600,350];

// const arrayNumbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const sum = arrayNumbers4.reduce((acc, num) => (acc += num), 0);
// const average1 = Math.round(sum / arrayNumbers4.length);

// console.log(sum); // 45
// console.log(average1); // 5

