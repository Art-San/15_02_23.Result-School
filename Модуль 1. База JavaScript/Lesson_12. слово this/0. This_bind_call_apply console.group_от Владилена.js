// https://www.youtube.com/watch?v=UGapN-hrekw

function hello() {
    console.log("Htllo", this)
}

const person = {
    name: 'Vladilen',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}.`)
        console.log(`Age is ${this.age}. `)
        console.log(`Job is ${job}. `)
        console.log(`Phone is ${phone}. `)
        console.groupEnd()
    }
}

const lena = {
    name: 'Lena',
    age: 23
}


// ------------APPLY
person.logInfo.apply(lena, ['Frontend', '8-999-123-12-23']) // Параметров только два, если большо то указываем в массиве

// -----------   CALL 
person.logInfo.call(lena, 'Frontend', '8-999-123-12-23') // Параметров может много, указыаем чере запятую
// С помощью кол вызов происходит сразу, нету (())
// person.logInfo.bind(lena, 'Frontend', '8-999-123-12-23')()




// -------------------- BIND
person.logInfo.bind(lena, 'Frontend', '8-999-123-12-23')()
// const fnLenaInfoLog = person.logInfo.bind(lena) ---- // ПЕРВЫЙ ВАРИАНТ
// fnLenaInfoLog('Frontend', '8-999-123-12-23')

// const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '8-999-123-12-23') // ВТОРОЙ ВАРИАНТ

// Практика
const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map((i) => i * n)  // Это не очень удобно в некоторых случаях, на собеседованиях спрашивают другой вариант
// }
// console.log(multBy(array, 3))

Array.prototype.multBy = function(n) {
    // console.log('multBy', this)
    return this.map((i) => i * n)
}

console.log(array.multBy(2))

