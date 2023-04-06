// JavaScript v.2.0. Замыкания
// // https://www.youtube.com/watch?v=wSNwjyhEe8I&list=PL0IvLP3GiRnVJ8t1CQOAupH_QF8K8Koho&index=1&t=81s

// function one() {
//     let a = 8 // локалная переменая
//     return a * 12
// }

// console.log(one())

// let a = 8 // глобальная
// function one() {
//     return a * 12
// }

// console.log(one())

function one() {
    let a = 0
    return function () {
        return a++
    }
}

const counter1 = one()
const counter2 = one()
console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter2())
console.log(counter2())
console.log(counter2())
console.log(counter2())
console.log(counter2())
console.log(counter2())
