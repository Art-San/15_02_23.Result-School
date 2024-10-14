// https://www.youtube.com/watch?v=2JSl1e4vBTY&t=1264s
// 32:40
const person = {
  firstName: 'Vladilen',
  lastName: 'Minin',
  year: 1993,
  langs: ['en', 'ru', 'de'],
  isProgrammer: true,
  'complex key': 'smth',
  ['key_' + (1 + 2)]: 42,
  greet() {
    console.log('hello from person')
  },
  arrow: () => console.log('arrow', this),
  info: function () {
    console.log('My name is', this.firstName)
  },
  notFound: 42
}

delete person.arrow

const { firstName, lastName, year, notFound = 404 } = person

// console.log(notFound)

// Object.keys(person).forEach((key) => console.log(person[key]))

const person2 = { firstName: 'Maxim' }

// const bound = person.info.bind(person)
// bound()

// person.info.call(person2, 1, 2)
// person.info.apply(person2, [1, 2])
