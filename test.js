// Logical Expression
// Логическое выражение

// console.log(true && 2)
// Логическое выражение "и"
//             Expression1 && Expression2
//                      (1) && (2)      // в случаи с выражением (1) вернет ссылку на объект хиппи где будет описана эта цифра
//                  (1 + 3) && (4)      // в случаи с (1 + 3) то произошло бы сначала вычисление выражение 1 , вычисление выражение 3, потом вычисление выражение 1 плюс 3 равно 4 и вернулась бы ссылка на результат 4
//          ({name: 'мур'}) && ('мяу')  // при вычисление {name: 'мур'} вернется ссылка на этот объект
//                   (true) && (false)  // Вычислить выражение true это выражение которое возвращает true
//                      (0) && (2)
//                          |
//                          V
//    Пусть leftVal = вычислить  Expression1  // Вычисление Expression1 или Expression2 это значит проведение какой-то операции согласно алгоритму спецификации ECMAScript, которое приводит какому-то результату
//               Evaluation LeftExpression
//                          |
//                          |
//                          | // ToBoolean "абстрактная операция" она принимает аргумент, если этот аргумент Boolean вернуть аргумент, если undefined, null, +0𝔽, -0𝔽, NaN, 0ℤ или "пустая строка" вернуть false, если ни первое ни второе вернуть true
//                          |
//                          |
//                          V
//                ToBoolean(leftVal)  -------- false --------->   return leftVal
//                          |                                           |
//                          |                                           |
//                          |                                           |
//                          |                                           |
//                        true                                          |
//                          |                                           |
//                          |                                           |
//                          V                                           V
//              return Evaluation Expression2  --------------------->  end

// Вычисление Expression2 будет происходить только если ToBoolean вернет true
// Примеры
// (1) && (true) && ({}) && ([]) && (function() {}) // f(){}
// (1) && (true) && ({}) && (false) && (function() {}) // false
// console.log(1, 0 && 'Hello') // 0
// console.log(2, 'Hi' && null && 42) // null
// console.log(3, {} && [] && 'JavaScript') // "JavaScript"

// Сложнее
console.log(10, true && 'value' && 0 && 'not reached')
console.log(11, 1 && null && undefined && 'text')
console.log(12, 'start' && '' && 42 && false)
// Логическое выражение "или"
//             Expression1  || Expression2
//                      (1) || ("да")      // в случаи с выражением (1) вернет ссылку на объект хиппи где будет описана эта цифра
//                  (1 + 3) || (4)      // в случаи с (1 + 3) то произошло бы сначала вычисление выражение 1 , вычисление выражение 3, потом вычисление выражение 1 плюс 3 равно 4 и вернулась бы ссылка на результат 4
//          ({name: 'мур'}) || ('мяу')  // при вычисление {name: 'мур'} вернется ссылка на этот объект
//                   (true) || (false)  // Вычислить выражение true это выражение которое возвращает true
//                      (0) || (2)
//                          |
//                          V
//    Пусть leftVal = вычислить  Expression1  // Вычисление Expression1 или Expression2 это значит проведение какой-то операции согласно алгоритму спецификации ECMAScript, которое приводит какому-то результату
//               Evaluation LeftExpression
//                          |
//                          |
//                          | // ToBoolean "абстрактная операция" она принимает аргумент, если этот аргумент Boolean вернуть аргумент, если undefined, null, +0𝔽, -0𝔽, NaN, 0ℤ или "пустая строка" вернуть false, если ни первое ни второе вернуть true
//                          |
//                          |
//                          V
//                ToBoolean(leftVal)  -------- true --------->   return leftVal
//                          |                                           |
//                          |                                           |
//                          |                                           |
//                          |                                           |
//                        false                                         |
//                          |                                           |
//                          |                                           |
//                          V                                           V
//              return Evaluation Expression2  --------------------->  end
//
// Примеры
// (1) || ("да") // 1
// (0) || ("да") // да
// console.log(4, false || 'default') // "default"
// console.log(5, 0 || '' || NaN || 'fallback') // "fallback"
// console.log(6, 'First' || 'Second' || 'Third') // "First"
// Сложнее
console.log(13, '' || 0 || false || NaN || 'success')
console.log(14, null || 'nullish' || '' || undefined)
console.log(15, false || 0 || '' || 100 || 'end')

// (1+4) && (false) || ("Yo") && ('Hur') // hur

// Логическое выражение "??"
//             Expression1  ?? Expression2
//                      (1) ?? ("да")      // в случаи с выражением (1) вернет ссылку на объект хиппи где будет описана эта цифра
//                  (1 + 3) ?? (4)      // в случаи с (1 + 3) то произошло бы сначала вычисление выражение 1 , вычисление выражение 3, потом вычисление выражение 1 плюс 3 равно 4 и вернулась бы ссылка на результат 4
//          ({name: 'мур'}) ?? ('мяу')  // при вычисление {name: 'мур'} вернется ссылка на этот объект
//                   (true) ?? (false)  // Вычислить выражение true это выражение которое возвращает true
//                      (0) ?? (2)
//                          |
//                          V
//    Пусть leftVal = вычислить  Expression1  // Вычисление Expression1 или Expression2 это значит проведение какой-то операции согласно алгоритму спецификации ECMAScript, которое приводит какому-то результату
//               Evaluation LeftExpression
//                          |
//                          |
//                          | // ToBoolean "абстрактная операция" она принимает аргумент, если этот аргумент Boolean вернуть аргумент, если undefined, null, +0𝔽, -0𝔽, NaN, 0ℤ или "пустая строка" вернуть false, если ни первое ни второе вернуть true
//                          |
//                          |
//                          V
//     ToBoolean(leftVal)  === undefined ---- false --->  ToBoolean(leftVal) === null --- false -----
//                          |                                           |                           |
//                          |                                           |                           |
//                          |                                           |                           |
//                        true                                        true                          |
//                          |                                           |                           |
//                          |                                           |                           |
//                          V                                           V                           V
//              return Evaluation Expression2  <-------------------------                return return leftVal

// Примеры
// function defaultObject(theArg) {
//   // return theArg ?? { name: 'default' }
//   return theArg || { name: 'default' }
// }

// var theThing = undefined // { name: 'default' }
// var theThing = null  // { name: 'default' }
// var theThing = { name: 'mark' }
// var theThing = undefined // { name: 'default' }

// const res = defaultObject(theThing)
// console.log('resalt:', res)

// console.log(7, null ?? 'defined') // "defined"
// console.log(8, undefined ?? 0 ?? 'backup') // 0
// console.log(9, 'not null' ?? 'fallback') // "not null"

// Сложнее
console.log(16, undefined ?? null ?? NaN ?? 0)
console.log(17, 0 ?? false ?? null ?? 'backup')
console.log(18, '' ?? 'empty' ?? 'filled')
