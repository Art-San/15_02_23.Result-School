const arrayNumbers = [10, -2, -3, 0, 1, 30, 25];

// Your code here...
arrayNumbers.sort((a,b) => {
    return b - a 
});


console.log(arrayNumbers); // [30, 25, 10, 1, 0, -2, -3]

// salariesOfDeveloper.sort((a, b) => {
//     // return a - b;                                       // сортировка по возрастанию [350, 400, 500, 600, 2000]
//     return b - a;                                          // сортировка по убыванию [2000, 600, 500, 400, 350]
// });
// console.log('salariesOfDeveloper', salariesOfDeveloper)

// Правильное решение
const arrayNumbers3 = [10, -2, -3, 0, 1, 30, 25];
arrayNumbers3.sort((a, b) => b - a);
console.log(arrayNumbers3); // [30, 25, 10, 1, 0, -2, -3]