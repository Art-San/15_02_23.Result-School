// https://www.youtube.com/watch?v=oDihI558xWc
// Еще о каррировании https://it-dev-journal.ru/articles/chto-takoe-karrirovanie-funkczionalnoe-programmirovanie
// А́рность (англ. arity) функции — количество ее аргументов.

// 1.0 Каррирование — это уменьшение арности функций

// 1.1 Каррирование функций — это преобразование функции с любым количеством аргументов
// в функцию только с одним аргументом.

// 1.2 Каррированная функция — это функция, которая продолжает возвращать функции до тех пор,
// пока не будут отправлены все ее параметры.

// Каррированая функция, это функция высшего порядка

// Пример 1
const add = (a, b) => a + b
const add1 = (a) => (b) => a + b

// Пример 2
const mul = (a, b, c) => {
  return a * b * c
}

console.log(mul(1, 2, 5))

// Пример 3
const curriedMu2 = (a) => (b) => (c) => {
  return a * b * c
}
const curriedMul1 = function (a) {
  return function (b) {
    return function (c) {
      return a * b * c
    }
  }
}

console.log(curriedMul2(1)(2)(5))

// Пример 4 частичное применение

const curriedMul = (a) => (b) => (c) => {
  return a * b * c
}
const mulBy5 = curriedMul(5)

console.log(mulBy5(2)(5))

// Пример 5 Функция вызовов 2 а может быть и больше
const log = (level) => (message) => console[level](message)
// Вызов функции в дот нотации
// console[level](message) аналог console.log(message)
// log
// error
const logInfo = log('log')
const logError = log('error')

logInfo('This is message info')
logError('This is message error')

// Задача
// https://lodash.com/docs/4.17.15#curry
const mul3 = (a, b, c) => {
  return a * b * c
}

const curry = (fn) => {
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn(...args)
    } else {
      return (...args2) => curried(...args, ...args2)
    }
  }
  return curried
}

const curriedMul3 = curry(mul3)

console.log(curriedMul3(1)(2)(5))
console.log(curriedMul3(1, 2)(5))
console.log(curriedMul3(1, 2, 5))
console.log(curriedMul3(1)(2, 5))
