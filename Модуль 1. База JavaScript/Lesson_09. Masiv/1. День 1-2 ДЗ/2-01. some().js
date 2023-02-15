const arrayNumbers = [10, 15, 5, 100, 50, 101, 203, 800];

// Your code here...

const isMoreThenHundred = arrayNumbers.some((salary) => {                                    
    return salary > 100;                                                 
});

console.log(isMoreThenHundred); // true

// Правильное решение
// const arrayNumbers = [10, 15, 5, 100, 50, 101, 203, 800];
// const hasMoreThenHundred = arrayNumbers.some((num) => num > 100);
// console.log(hasMoreThenHundred); // true
