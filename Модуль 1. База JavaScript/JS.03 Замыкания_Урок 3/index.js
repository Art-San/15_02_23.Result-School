// // Ссылка на урок
// https://www.youtube.com/watch?v=pahO5XjnfLA&t=14s

// Замыкание- это функция в нутри другой функции

// ================= задачу он придумал ===================


// ================= и еще простой пример ===================

// function urlGenerator(domain) {
//     return function(url) {
//         return `https://${url}.${domain}` про замыкание здесь  все
//     }
// }

// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')

// console.log(comUrl('google'))
// console.log(comUrl('netflix'))

// console.log(ruUrl('yandex'))
// console.log(ruUrl('dzen'))

// ================= еще простой пример ===================
// function createIncrement(n) {
//     return function(num) {
//         return n + num
//     }
// }

// const addOne = createIncrement(1)
// const addTen = createIncrement(10)
// console.log(addOne(10))  // 11
// console.log(addOne(41))  // 11

// console.log(addTen(10))  // 20
// console.log(addTen(41))  // 51


// ================= простой пример ===================
// function creatCalcFunction(n) {
//     return function() {
//         console.log(1000 * n)
//     }
// }
// const calc = creatCalcFunction(10)
// calc()                               // 10000


