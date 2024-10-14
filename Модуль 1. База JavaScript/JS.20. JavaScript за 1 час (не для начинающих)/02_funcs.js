// https://www.youtube.com/watch?v=2JSl1e4vBTY
// закончил 21:04
// Function Declaration
function greet(name) {
  console.log('Hello from', name)
}

// Function Expression
const greet2 = function (name) {
  console.log('2 Hello from', name)
}

// greet('Max')
// greet2('Elena')

// console.log(typeof greet)

// const arror = (name) => console.log('Hello from', name)

// arror('Max')

const pow2 = (num = 2) => num ** 2

// console.log(pow2())

// console.log([1, 2, 3, 4, 5].map((n) => (n ** 2)))
// console.log([1, 2, 3, 4, 5].map(pow2))
// console.log([1, 2, 3, 4, 5].filter((n) => (n %= 2)))

function sumAll(...all) {
  // let res = 0
  // for (let n of all) {
  //   res += n
  // }
  // return res
  return all.reduce((acc, n) => {
    return (acc += n)
  }, 10)
}

// console.log(sumAll(1, 2, 3))
// console.log(sumAll(1, 2, 3, 4, 5))

function createMember(firstName) {
  return function (lastName) {
    console.log(firstName + ' ' + lastName)
  }
}

const logWithLastName = createMember('John')
logWithLastName('Doe')
logWithLastName('Smith')
