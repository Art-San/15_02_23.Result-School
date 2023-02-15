// ======================================================================
//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = '3 Замыкание функции'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// =====================================================================


// Замыкание - это функция внутри фукции


const num = 10
const createMultiplyer = function(n) {
    return function() {
        return n * num;
    }
}

// const multiply = createMultiplyer(5);
// const result = multiply()
// console.log("result", result);



//            Посложнее

// const createCounter = (initiaValue = 0) => {
//     return (valueToAdd) => {
//         return initiaValue + valueToAdd;
//     };
// };

// const addFive = createCounter(5);
// // const addTen = createCounter(10);
// const result = addFive(10);
// console.log(result)
// // console.log(addTen(50));

//        Еще посложнее

const createCounter = (initiaValue = 0) => {
    let counter = initiaValue;

    return (valueToAdd) => {
        counter += valueToAdd;
        return counter;
    };
};

const addTwo = createCounter(2);

// let result = addTwo(10); // 12
// result = addTwo(5);      // 17
// result = addTwo(3);      // 20
// console.log(result);



