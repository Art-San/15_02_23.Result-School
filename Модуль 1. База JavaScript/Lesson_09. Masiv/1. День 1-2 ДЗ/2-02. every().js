const arrayNumbers = [2, 4, 10, 6, 8, 14, 24, 50];

// Your code here...
const isEven = arrayNumbers.every((salary) => {
    return salary % 2 === 0;
});

console.log('isEven', isEven); // true

// Правильное решение
// const arrayNumbers2 = [2, 4, 10, 6, 8, 14, 24, 50];
// const isEven = arrayNumbers2.every((num) => num % 2 === 0);
// console.log(isEven); // true

