// Уроки Javascript #4. Что такое замыкания в JS (простыми словами + 3 примера)
// https://www.youtube.com/watch?v=YaGfHbT9xLY&list=PL0IvLP3GiRnVJ8t1CQOAupH_QF8K8Koho&index=1&t=88s


// function external() {
//     const externalVar = 'Я - внешняя функции'

//     function internal() {
//         const internalVar = 'Я - внутренняя функция'
//         console.log('internalVar', internalVar)
//         console.log('externalVar', externalVar)
//     }
//    return internal
// }

// const internalFn = external()
// internalFn()


// function createAddress(type) {
//     const address = type.toUpperCase()
//     return function(name) {
//         return `${address} ${name}`
//     }
// }

// const addressGrazhdanin = createAddress('Гражданин')
// const addressGrazhdanka = createAddress('Гражданка')

// console.log(addressGrazhdanin('Петров'))
// console.log(addressGrazhdanka('Сидорова'))

function createPlayer(name) {
    let score = 0
    return function scoreCount() {
       score++
       return `${name} - ${score} баллов`
    }
}

const player1 = createPlayer('Max')
const player2 = createPlayer('Tom')

console.log(player1())
console.log(player1())
console.log(player1())

console.log(player2())
console.log(player2())
console.log(player3())