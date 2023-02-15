// Ссылка на урок
// https://www.youtube.com/watch?v=UGapN-hrekw

// Window глобальный объект
// this указывает на глобальный объект Window
// this === window true

function hello() {
    console.log('Hello', this)
}

// hello()
const person = {
    name: 'Aleks',
    age: 25,
    sayHello: hello,  
    sayHelloWindow: hello.bind(window), 
    sayHelloWindowThis: hello.bind(this), 
    sayHelloDocument: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info`)
        console.log(`Name is ${this.name}`)
        console.log(`Age ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}
// person.logInfo('танкист', '200-891')

const lena = {
    name: 'Elena',
    age: 23
}

// ====================== примеры ПРТОТИПОВ и контекста =====================
const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map((i) => i * n)
// }
// console.log(multBy(array, 5))

Array.prototype.multBy = function(n) {
    // console.log('multBy', this)
    return this.map((i) => i * n)
}

const newArr = [4, 4, 4]
console.log(array.multBy(2))
console.log(newArr.multBy(2))



//============================== apply ==================================
// в методе apply всего два параметра 
// 1. контекст
// 2. массив из параметров ['Врач', '555-555']
// и также как и call сразу вызывает функциию

// person.logInfo.apply(lena, ['Врач', '555-555'])
// ========================== call =========================================
// Метод call вызывает сразу
// person.logInfo.call(lena, 'Врач', '555-555') // В call в отличие от bind в конце не надо скобки ставить



// =========================== bind ==========================================
// Метод bind возвращае функцию
// const lena = {
//     name: 'Elena',
//     age: 23
// }

// person.logInfo.bind(lena, 'Врач', '555-555')()  // выведет лену
// // person.logInfo.bind(lena)('Врач', '555-555') // выведет лену
// // const lenaInfoLog = person.logInfo.bind(lena) // метод bind(контекст, параметры) 
// // lenaInfoLog('Медсестра', '777-777')

// const lenaInfoLog = person.logInfo.bind(lena, 'Медсестра', '777-777') // метод bind(контекст, параметры) 
// lenaInfoLog()

//=====================   =================================================

// const person = {
//     name: 'Aleks',
//     age: 25,
//     sayHello: hello,  
//     sayHelloWindow: hello.bind(window), 
//     sayHelloWindowThis: hello.bind(this), 
//     sayHelloDocument: hello.bind(document),
//     logInfo: function() {
//         console.log(`Name is ${this.name}`)
//         console.log(`Age ${this.age}`)
//     }
// }
// person.logInfo()  // выведе персон

// const lena = {
//     name: 'Elena',
//     age: 23
// }

// person.logInfo.bind(lena)() // выведет лену

//=======================   ==============================================

// const person = {
//     name: 'Aleks',
//     age: 25,
//     sayHello: hello,  // person.hello() === 'Hello' - person
//     sayHelloWindow: hello.bind(window), // person.sayHelloWindow() === 'Hello' - Window
//     sayHelloWindowThis: hello.bind(this), // person.sayHelloWindowThis() ==='Hello' - Window
//     sayHelloDocument: hello.bind(document) // person.sayHelloDocument() ==='Hello' - #document
// }
// console.log(person)
// console.log(person.sayHello())
// console.log(person.sayHelloWindow())




