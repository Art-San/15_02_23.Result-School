// // // Ссылка на урок
// https://www.youtube.com/watch?v=7wtbNNiOh30

//================== очень простой пример ============
// * обозначает что это функция генератор
// function* strGenerator(params) {
//     yield 'H'
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
// }
// const str = strGenerator()
// console.log('str', str.next()) // при первом вызове {value: 'H', done: false}
// console.log('str', str.next()) // при втором {value: 'e', done: false} и так далее
// console.log('str', str.next())
// console.log('str', str.next())
// console.log('str', str.next()) // {value: 'o', done: false}
// console.log('str', str.next()) // {value: undefined, done: true}


//================== простой пример ============
// function* numberGen(n = 10) {
//    for (let i = 0; i < n; i++) {
//     yield i
//    }
// }

// const num = numberGen(7)

// console.log('num', num.next()) // {value: 0, done: false}
// console.log('num', num.next()) // {value: 1, done: false}
// console.log('num', num.next()) // {value: 1, done: false}

//================== повторяем гинератор  ============

// const iterator = {
//     gen(n = 10) {
//         let i = 0

//         return{
//             next() {
//                 if (i < n) {
//                     return {value: i++, done: false}
//                 }
//                 return {value: undefined, done: true}
//             }
//         }
//     }
// }

// const itr = iterator.gen()
// console.log('itr', itr.next()) // {value: 0, done: false}
// console.log('itr', itr.next()) // {value: 1, done: false}
// console.log('itr', itr.next()) // {value: 2, done: false}

//================== for of  ============
// const iterator = {
//     [Symbol.iterator](n = 10) {
//         let i = 0

//         return{
//             next() {
//                 if (i < n) {
//                     return {value: i++, done: false}
//                 }
//                 return {value: undefined, done: true}
//             }
//         }
//     }
// }

// const itr = iterator.gen()


// for (let k of 'Hello') {
//     console.log(k)
// }

// for (let k of [1, 1, 2, 3, 5, 8, 13, 18]) {
//     console.log(k)
// }

// for (let k of iterator) {
//     console.log(k)
// }

//================== for of  ============

function* iter(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

for (let k of iter(6)) {
    console.log(k)
}