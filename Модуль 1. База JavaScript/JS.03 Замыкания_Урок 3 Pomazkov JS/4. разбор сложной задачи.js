const createToggler = () => {
    let toggle = false
    return () => {
        toggle = !toggle
        return toggle
    }
}

const toggler1 = createToggler()
const toggler2 = createToggler()
console.log(toggler1()) // true
console.log(toggler1()) // false
console.log(toggler1()) // true
console.log(toggler2()) // true

// первым делом создается
// 1. глобальное (лекс, окруж)
// ссылка: -> null
// переменные: {
//     createToggler: function
// }

// 2. createToggler №1 вызов на строке 9
// ссылка: -> глобальное л.о
// переменные: {
//     toggle: false
// }

// 1. глобальное (лекс, окруж)
// ссылка: -> null
// переменные: {
//     createToggler: function
//     toggler1: function
// }

// 3. createToggler №2 вызов на строке 10
// ссылка: -> глобальное л.о
// переменные: {
//     toggle: false
// }

// 1. глобальное (лекс, окруж)
// ссылка: -> null
// переменные: {
//     createToggler: function
//     toggler1: function
//     toggler2: function
// }

// 4. Лексическое окружение для вызова на стр.11 toggler1()
// ссылка: -> на createToggler №1
// переменные: {
//     нет ни оной переменной
// }

// 2. createToggler №1 вызов на строке 9
// ссылка: -> глобальное л.о
// переменные: {
//     // toggle: false  меняем  на true
//     toggle: true // отправляем
// }

// 5. Лексическое окружение для вызова на стр.12 toggler1()
// ссылка: -> на createToggler №1
// переменные: {
//     нет ни оной переменной
// }

// 2. createToggler №1 вызов на строке 9
// ссылка: -> глобальное л.о
// переменные: {
//     // toggle: true меняем  на false
//     toggle: false // отправляем
// }

// 6. Лексическое окружение для вызова на стр.13 toggler1()
// ссылка: -> на createToggler №1
// переменные: {
//     нет ни оной переменной
// }

// 2. createToggler №1 вызов на строке 9
// ссылка: -> глобальное л.о
// переменные: {
//     // toggle: false  меняем  на true
//     toggle: true // отправляем
// }

// 7. Лексическое окружение для вызова на стр.14 toggler2()
// ссылка: -> на createToggler №2
// переменные: {
//     нет ни оной переменной
// }

// 3. createToggler №2 вызов на строке 10
// ссылка: -> глобальное л.о
// переменные: {
//     // toggle: false  меняем  на true
//     toggle: true // отправляем
// }
