//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'сумму кубов всех чисел в массиве'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================

const numbers = [10, 4, 100, -5, 54, 2];

// 1. for

let sum1 = 0;
for (let i = 0; i < numbers.length; i += 1) {
  sum1 += numbers[i] ** 3;
}
console.log("sum1", sum1);

// 2. for of

let sum2 = 0;
for (const number of numbers) {
  sum2 += number ** 3;
}
console.log("sum2", sum2);

// 3. forEach

let sum3 = 0;
numbers.forEach((number) => {
  sum3 += number ** 3;
});
console.log("sum3", sum3);

// 4. reduce

const sum4 = numbers.reduce((acc, number) => {
  return acc + number ** 3;
}, 0);
console.log("sum4", sum4);


// const numbers = [10, 4, 100, -5, 54, 2];

// const sumReduce = numbers.reduce((acc, salary, index, array) => {
//   return acc + salary ** 3;
// }, 0)  
// console.log("sumReduce", sumReduce)

// let sumForEach = 0
// numbers.forEach((num) => {
//   sumForEach = sumForEach + num ** 3
// })
// console.log('sumForEach', sumForEach)
 
// // const kub = numbers.map((salary, index, array) => {
// //   return salary ** 2;                                                         //[800, 1000, 1200, 4000, 700]
// // });

// // console.log('kub', kub)

// let sumFor = 0
// for(let i = 0; i < numbers.length; i++ ) {
//   sumFor = sumFor + numbers[i] ** 3
// }
// console.log('sumsumFor', sumFor)

// let forOf = 0

// let sumForOf = 0
// for (const forOf of numbers) {
//   sumForOf = sumForOf + forOf ** 3
// }

// console.log('sumForOf', sumForOf)


