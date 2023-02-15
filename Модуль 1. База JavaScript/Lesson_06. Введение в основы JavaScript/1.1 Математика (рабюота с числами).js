//    Math.ceil(округлит в верх))
// Метод Math.ceil() - округление вверх. 
// Округляет аргумент до ближайшего большего целого.
// const century = year => Math.ceil(year/100)
function century(year) {
    // Finish this :)
    return Math.ceil(year/100)
  }
  
  
  console.log(century(1705)) //18
  console.log(century(1900)) //19
  console.log(century(1601)) //17
  console.log(century(2000)) //20
  console.log(century(89))   //1

//          Math.floor
//============================================================

//       Math.floor(округление вниз)
// Метод Math.floor() - округление вниз. 
// Округляет аргумент до ближайшего меньшего целого.

// Примеры
Math.floor( 45.95); //  45
Math.floor(-45.95); // -46

//           Math.pow()
//==============================================================
// Метод Math.pow() возвращает основание, возведённое в степень показатель, 
// то есть, значение выражения основаниепоказатель.
// Синтаксис
Math.pow(base, exponent)
Math.pow(7, 2); // 49
// console.log('**', 5 ** 3); // 125

//          Math.max()
//==============================================================
// Метод Math.max() возвращает наибольшее из нуля или более чисел.
// Math.max([value1[, value2[, ...]]])

//           Math.min()
//==============================================================
const goals = [8, 1, 1, 3, 2, -1, 5];
let newArr = Math.max(...goals)       // newArr 8

//  Метод Math.min() возвращает наименьшее из нуля или более чисел.
// Math.min([value1[, value2[, ...]]])

const goals2 = [8, 1, 1, 3, 2, -1, 5];
let minGol = Math.min(...goals)
console.log("minGol", minGol)     // -1

//          Math.sqrt()
//===============================================================
// Функция Math.sqrt()возвращает квадратный корень 
Math.sqrt(-1); // NaN
Math.sqrt(-0); // -0
Math.sqrt(0); // 0
Math.sqrt(1); // 1
Math.sqrt(2); // 1.414213562373095
Math.sqrt(9); // 3
Math.sqrt(Infinity); // Infinity

//              Math.abs() из отрицательного в положителное
//==============================================================
// Функция Math.abs()возвращает абсолютное значение числа.
Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // Infinit

//           Number.isInteger()
//==============================================================
// Метод Number.isInteger() определяет, 
// является ли переданное значение целым числом.
function fits(x, y) {
  if (Number.isInteger(y / x)) {
    return 'Fits!';
  }
  return 'Does NOT fit!';
}

console.log(fits(5, 10));
// expected output: "Fits!"
console.log(fits(5, 11));
// expected output: "Does NOT fit!"

//        toFixed()
//===============================================================
// Метод toFixed()форматирует число, используя запись с фиксированной точкой.
const numObj = 12345.6789;

numObj.toFixed()       // Returns '12346': rounding, no fractional part
numObj.toFixed(1)      // Returns '12345.7': it rounds up
numObj.toFixed(6)      // Returns '12345.678900': additional zeros
(1.23e+20).toFixed(2)  // Returns '123000000000000000000.00'