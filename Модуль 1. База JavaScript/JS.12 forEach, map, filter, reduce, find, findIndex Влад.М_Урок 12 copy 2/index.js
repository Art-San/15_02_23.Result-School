// // // Ссылка на урок
//https://www.youtube.com/watch?v=mbcP3Oc0PjU

// JS цикл forEach за 5 минут
// https://www.youtube.com/watch?v=shuOPtf2jro

const people = [
    { name: 'Владилен', age: 25, budget: 40000 },
    { name: 'Елена', age: 17, budget: 3400 },
    { name: 'Игорь', age: 49, budget: 50000 },
    { name: 'Михаил', age: 15, budget: 1800 },
    { name: 'Василиса', age: 24, budget: 25000 },
    { name: 'Виктория', age: 38, budget: 2300 }
]

const arr1 = []
people.forEach(ei => {
  console.log()
  arr1.push(ei.age + 5)
})
console.log('aR', arr1)
// -------------------- for ---------------------------
// for (let i = 0; i < people.length; i = i + 1) {   // даный синтаксис относится к es5
//     console.log(people[i].age)
// }

// -------------------- for of ---------------------------
// for (let men of people) {                // даный синтаксис относится к es6
//     console.log(men.budget)
// }

// ----------------- ForEach -------------------------
// people.forEach(function(e, i) {
//     console.log(e.age + 5)
// })

// people.forEach(e => console.log(e.age + 5))

// https://www.youtube.com/watch?v=shuOPtf2jro
// forEach(function(elem, i, arr) {})

const array = [1, 2, 3, 4, 5, 6, 7, 8]
const newArr = []
array.forEach((elem) => {
    newArr.push(elem + 10)
})

console.log('newArr', newArr)

// ------------------- map -----------------------------------------
// const newArr = people.map((person) => `${person.name} (${person.age})`)
// console.log(newArr)

// const newArr1 = people.map((person) => person.age * 3)
// console.log(newArr1)

// ------------------- filter --------------------------------
// const newArr = []
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         newArr.push(people[i])
//     }
// }
// console.log(newArr)

// const newArr2 = people.filter(e => e.age >= 18)
// console.log(newArr2)

// const newArr1 = people.filter(e => {
//     if (e.age >= 18)
//     return true
// })
// console.log(newArr1)

// -------------------  reduce  --------------------
// let sum1 = 0
// for (let i = 0; i < people.length; i++) {
//     sum1 = sum1 + people[i].budget
// }
// console.log('sum1', sum1)

// const sum = people.reduce((a, e, i) => {
//     return a + e.budget
// }, 0)

// console.log('sum', sum)

// -------------------  Find ----------------------------
// let men1 
// for (let i = 0; i < people.length; i++) {
//     if (people[i].name === 'Виктория') {
//        men1 = people[i]
//     }
// }
// console.log('men1', men1)

// const men = people.find(e => e.name === 'Владилен')
// console.log('men', men)

// -------------------  FindIndex ----------------------------

// const index = people.findIndex(e => e.name === 'Виктори')
// console.log('index', index)

// console.log('два равно', 42 == '42')
// console.log('два равно', 42 === '42')

// ==================== пример

// const newPeople = people
// .filter(person => person.budget > 3000)
// .map(person => {
//     return {
//         info: `${person.name} (${person.age})`,
//         budget: person.budget
//     }
// })
// .reduce((a, e) => a + e.budget, 0) 

// console.log('newPeople', newPeople)