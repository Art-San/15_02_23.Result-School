// матиматика в JS
const counter = -10;
// console.log('counter', counter)

// console.log('+', 2 + 2);
// console.log('-', 2 - 2);
// console.log('*', 2 * 2);
// console.log('/', 2 / 2);
// console.log(2 + 2 * 2);

Оператор ** (ES6)

// console.log('**', 5 ** 3); // 125
Math.pow(7, 2); // 49


//  Инкремент и декремент

let capsPlus = 1;
// caps = caps + 2;
capsPlus += 2; // Рекомендованно
// console.log('capsPlus', capsPlus); // capsPlus 3

let capsMinys = 5;
// capsMinys = capsMinys - 1;
capsMinys -= 1;   // Рекомендованно
// console.log('capsMinys', capsMinys);  // capsMinys 4

let caps = 3;
// caps++;      // caps 4
// ++caps;      // caps 4
// caps--;      // caps 3
// --caps;      // caps 3

// console.log('caps++', caps++);  // ++caps 3

console.log('++caps', ++caps);  // ++caps 4

// let value = 2;
// value = value * 5;
value *= 5;
// value /= 3;
// console.log('value', value)


// --- % % %
// console.log('%', 10 % 3); // 1
// console.log('%', 10 % 2); // 0

//           4 % 2 === 0   // true
// log(array.filter(item => item % 2 === 0))  //[2, 4, 6]
// log(array.filter(item => item % 2)) // [1, 3, 5, 7]
// log(array.filter((_, index) => index % 2 === 0))  //[2, 4, 6]
// log(array.filter((_, index) => index % 2)) // [1, 3, 5, 7]
// console.groupEnd()

// const filtered = array
// .filter(item => item % 2)     // [1, 3, 5, 7]
// // 3 % 2 => return 1           // Boolean(1) true
// // 4 % 2 => return 0           // Boolean(0)  false