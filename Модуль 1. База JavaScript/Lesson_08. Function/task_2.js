
//  РЕШЕНИЕ ОТ ВЛАДИЛЕНА

const getSumOfNumbers = (number, type = 'odd') => {
  let sum = 0;
  for (let i = 0; i <= number; i += 1) {
      const isEven = i % 2 === 0;
      const isOdd = !isEven;
      if (!type) {
          sum += i;
      } else if (isEven && type === 'even') {
          sum += i;
      } else if (isOdd && type === 'odd') {
          sum += i;
      }
  }

  return sum;
}

const result = getSumOfNumbers(10, '');
console.log('result', result);

// =============================================================

// Это решение было отправленн на проверку
// const getSumOfNumbers = function(number, type = "odd") {
//     let sum = 0;
//     const initial = + (type === "odd");
//     const step = 2 - (type === "");
//     for (let n = initial; n <= number; n += step) {
//       sum += n;
//     }
//     return sum;
//   }
  
  
//   console.log(getSumOfNumbers(10, "odd"));
//   console.log(getSumOfNumbers(10, "even"));
//   console.log(getSumOfNumbers(10, ""));




// https://www.cyberforum.ru/javascript/thread1924650.html



// const getSumOfNumbers = function (number,) {
//   let n = number;
//   let sumOdd = 0;
//   let sumEven = 0;
//   let sum = '';
//   sum = Number(sum)
//   let i;
//   for(i = 0; i <= n; i += 1) {
//       sum += i;

//       if (i % 2 === 0) {
//           sumOdd += i;
//       } else {
//           sumEven += i;
//       }
//   }
//   console.log(sum);
//   console.log(sumEven);
//   console.log(sumOdd);
//   return sum;
  
// }
// const create = getSumOfNumbers(10,);

// console.log(create)

/*
происходит следующее: первое значение у тебя сумма всех элементов, тут все правильно у тебя.
[8:43]
второе значение - ты сделал переменную sumOdd = odd и потом к этой строке прибавляешь числа. Естественно он складывает строку. объяви sumOdd = 0  в данном случае, и тогда у тебя к 0 будет прибавляться то, что в консоли сейчас после odd (0, 2, 4, 6, 8, 10).
[8:44]
с третьим значением even все аналогично как с odd у тебя
[8:45]
почему undefined? ты в console.log(create) вызываешь другой console.log. у тебя получается что-то вроде console.log(console.log(sum)) - в данном случае всегда будет добавлять undefind.
[8:47]
функция должна возвращать значение (одно) через слово return. После этого слова код выполняться не будет. поэтому в функции в конце ставь условие, которое вернет строку return sum или return sumOdd или return sumEven
*/

// const sum = function(a, b) {
//     console.log(a + b);
// }

// sum(5, 10);


// -----------------Function Expression--------------
// const getSumOfNumbers = function(number, type = "odd") {
//   let sum = 0;
//   const initial = + (type === "odd");
//   const step = 2 - (type === "");
//   // console.log('step', typeof step, step)
//   for (let n = initial; n <= number; n += step) {
//     sum += n;
//   }
//   return sum;
// }

// -----------------Function Dectaration---------
// function getSumOfNumbers(number, type = "odd") {
//   let sum = 0;
//   const initial = + (type === "odd");
// //   console.log('initial', typeof initial, initial)
//   const step = 2 - (type === "");
//   console.log('step', typeof step, step)
//   for (let n = initial; n <= number; n += step) {
//     sum += n;
//   }
//   return sum;
// }

// console.log(getSumOfNumbers(10, "odd"));
// console.log(getSumOfNumbers(10, "even"));
// console.log(getSumOfNumbers(10, ""));




// https://www.cyberforum.ru/javascript-beginners/thread2861233.html



