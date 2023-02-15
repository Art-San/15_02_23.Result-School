function getDivisors(number) {
    if (typeof number !== "number") {
      return NaN;
    }
  
    if (!Number.isInteger(number) || number < 0) {
      console.log("number должен быть целым числом и больше нуля!");
      return;
    }
  
    let counter = 0;
    for (let i = number; i > 0; i--) {
      if (number % i === 0) {
        counter++;
      }
    }
  
    return counter;
  }
  
//   const result = getDivisors(10);
  let result = 4 % 2
  console.log("result", result);
  console.log('%', 10 % 2);

  let i = 2.1
  console.log("Number.isInteger(number)", Number.isInteger(i)) // если 2 то "true" если 2.1 то 'false'
  let boolean = Boolean(0)
  console.log("boolean", boolean)

// console.log(getDivisors(" ")); // Вернет 3 (делители - 1, 2, 4)
// console.log(getDivisors(5.1)); // Вернет 2 (делители - 1, 5)
// console.log(getDivisors(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
// console.log(getDivisors(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
  

                // МОЕ РЕШЕНИЕ
// =======================================================================
// function getDivisorsCount(number = 1) {
//     if (typeof number !== "number") {
//         return NaN;
//       }

//       if (!Number.isInteger(number) || number < 0) {
//         console.log("number должен быть целым числом и больше нуля!");
//         return;
//       }

//     let numberDivisors = 0
//     for (let i = 0; i <= number; i++) {
//         let unit = Number.isInteger(number / i)
//         if (unit) {
//             numberDivisors++
//         }
//     } 
//     return numberDivisors
// }

// console.log(Number.isInteger(21))


// console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
// console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
// console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
// console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
