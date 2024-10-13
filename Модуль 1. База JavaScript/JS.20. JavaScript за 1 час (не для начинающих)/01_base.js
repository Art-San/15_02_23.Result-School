// https://www.youtube.com/watch?v=2JSl1e4vBTY
// node 01_base.js

const topNumber = 42

// number = 52 // error

let lastName = 'Smith'

lastName = 'Jones'

let _$lastName_$5 = ''
// let 5error // error

// operators

let currentYear = 2024
const birthYear = 1993

let age = currentYear - birthYear

age++
age += 1
age = age + 1

age -= 3

// console.log(age > 31)
// console.log(age == 31) // не строгое сравнение
// console.log(age === 31) // строгое

// datatypes
// let x // undefined
// console.log(typeof false)
// console.log(typeof 'Vladilen')
// console.log(typeof 42.42)
// console.log(typeof { a: 1 })
// console.log(typeof undefined)
// console.log(null)
// console.log(typeof Symbol('a')) // для формирования ключей объекта
// console.log(typeof BigInt(10))
// console.log(10 / undefined) // NAN

// if statement
// const myStatus = 'failed' // ready pending failed

// if (myStatus === 'ready') {
//   console.log('lets go')
// } else if (myStatus === 'pending') {
//   console.log('be prepared')
// } else {
//   console.log('failed')
// }

// function

// function calcAge(year) {
//   const date = new Date().getFullYear() - year
//   if (date <= 0) {
//     return 'you are not born yet'
//   }
//   return date
// }

// console.log(calcAge(2020))

// array
const cars = ['Tesla', 'Porshe', 'BMW']

// console.log(cars.length)
// console.log(cars[cars.length - 1])

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i]

//   console.log(car.toUpperCase())
// }

for (let car of cars) {
  // console.log(car.toUpperCase())
}

cars.push('Audi') // добав конец
cars.unshift('Lambo') // добав в начало

const lastCar = cars.pop()
const firstCar = cars.shift()

// console.log(cars.toReversed())
// console.log(cars.toSorted())

// Objects

const person = {
  firstName: 'Vladilen',
  lastName: 'Minin',
  year: 1993,
  langs: ['en', 'ru', 'de'],
  isProgrammer: true,
  greet() {
    console.log('hello from person')
  }
}

const key = 'year'
console.log(person[key])

person.greet()
