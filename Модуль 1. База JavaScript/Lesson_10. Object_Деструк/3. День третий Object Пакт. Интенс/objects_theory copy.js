const person = {
  name: 'Vladilen',
  age: 28,
  job: 'Result School',
  hobbies: ['Skii', 'Gym', 'Cars'],
  info: {
    hasWife: false,
    weight: 76
  },
  toRemove: Date.now(),
  sayHello() {
    console.log('Hello from person!')
  }
}

const jobKey = 'job'

console.dir(person)
console.log('age: ', person['age'])
// console.log('Name: ', person.name)
// console.log('Weight: ', person['info']['weight'])
// console.log('Job: ', person[jobKey])


delete person.toRemove // работает только с объектами

// person.sayHello()

class Person {
  constructor(firstName, personAge) {
    this.name = firstName
    this.age = personAge
    this.job = 'Frontend'
  }

  sayHello() {
    console.log(this.name + ' say hello!')
  }

  print() {
    console.log(JSON.stringify(this))
  }
}

const person2 = new Person('Elena', 23)
const person3 = new Person('Igor', 42)

// person2.print()
// person3.print()

function printObject(object = {}) {
  // console.log(object)

  // for (let key in object) {
  //   if (typeof object[key] !== 'function') {
  //     console.log('key', key)
  //     console.log('value', object[key])
  //   }
  // }

  Object.keys(object).forEach(key => {
    if (typeof object[key] !== 'function') {
      console.log('value', object[key])
    }
  })
}

printObject(person)

