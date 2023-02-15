// // // Ссылка на урок
// https://www.youtube.com/watch?v=np08WdS9OXg&t=9s


// object 
const person = {
    name: 'Vladilen',
    age: 25,
    job: 'Fullstack'
}

 // Proxy - это глобальный класс
 // первый параметр это таргет (person)
 // вторым это набор хендлиров
const op = new Proxy(person, {
  get(target, prop) {
    console.log(`Gettting prop ${prop}`)
    return target[prop]
  },
  set(target, prop, value) {
    if (prop in target) {
        target[prop] = value
    } else {
        throw new Error(`No ${prop} field in target`)
    }
  },
  has(target, prop) {
    return ['age', 'name', 'job'].includes(prop)
  },
  deleteProperty(target, prop) {
    console.log('Deleting...', prop)
    delete target[prop]
    return true
  }
}) 

// функции
const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('colling fn..')
        return target.apply(thisArg, args).toUpperCase()

    }
})

// Classes

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, ages) {
        console.log('Construct...')

        return new target( ...ages)
    }
})

const p = new PersonProxy('Maxim', 30)