const names = ['Александр', 'Ян', 'Оля', 'Вячеслав', 'Маша', 'Анатолий'];

// Your code here...

const filteredNames = names.filter((salary) => {
    return salary.length >= 5;
});

console.log(filteredNames); // ['Александр', 'Вячеслав', 'Анатолий']

// massiv[0].length

// const filterSalaries = salariesOfDeveloper.filter((salary, index, array) => {
//     // return salary > 500;                                                       // [600, 2000]   
//     // return salary % 2 === 0;                                                // [400, 500, 350]
//     return salary % 2;                                                         // [9]
    
// })

// console.log('filterSalaries', filterSalaries);

// Правильное решение
const names1 = ["Александр", "Ян", "Оля", "Вячеслав", "Маша", "Анатолий"];

const filteredNames1 = names.filter((name) => name.length >= 5);

console.log(filteredNames1); // ['Александр', 'Вячеслав', 'Анатолий']
