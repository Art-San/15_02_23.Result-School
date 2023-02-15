
// -----------  Function Expression  -------

// const sum = function(a, b) {
//     console.log(a + b);
// }

// sum(5, 10);



// ------------  arrow function Expression -----------

// const name = () => {

// }

// const sum = (a,b) => {
//     return a + b;
// };

// const result = sum(10, 11);
// console.log('result', result)

// сокр. вариант, можно писать если функция остит из одно строчки.

// const sum = (a, b) => a + b;
// const result = sum(10, 11);
// console.log('result', result);


// если состоит из 2 и более строчек то уже такой вариант

// const sum = (a, b) => {
//     console.log(a, b);
//     return a + b;
// };
// const result = sum(10, 11);
// console.log('result', result);


// const addFive = (a) => a + 5;  // эти две записви одинаковы
// const addFive = a => a + 5;      // если передаем больше одного параметра то скобки нужно указывать

// const result = addFive(10);
// console.log(result);


// Стрелочную функцию можно пердавать как колбек.

function multiply(a, b, callback) {
    const result = a * b;
    callback(result);
}

multiply(5, 2, (multiplyResult) => {
    console.log('multiplyResult', multiplyResult);
});