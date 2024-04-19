const developer = {
  name: 'Maxim',
  isJSDev: true
}

// setTimeout(() => {
//     console.log('setTimeout');
// }, 3000);

// setInterval(() => {
//     console.log('setInterval');
// }, 1000);

// resolve --- это функция вызывается если промис был выполнен успешно
// reject --- тоже функция, но ее нужно вызывать если промис был выполнен не удачно

// у промиса три статуса
// pending - в ожидание
// fulfilled - удачное выполнение промиса
// rejected - выполнение промиса с ошибкой

const promise = new Promise((resolve, reject) => {
  if (developer.isJSDev) {
    setTimeout(() => {
      resolve(`${this.name} является JavaScript-разработчиком`)
    }, 3000)
  } else {
    reject(`${this.name} НЕ является JavaScript-разработчиком`)
  }
})

// console.log('promise', promise)

// методы у промиса , then, catch, finally

// promise
//   .then((successMassage) => {
//     console.log(1, 'successMassage', successMassage)
//   })
//   .catch((error) => {
//     console.log(0, 'error', error)
//   })
//   .finally(() => {
//     console.log(2, 'finally')
//   })

// ==========================================================================
// Это из другого урока
// https://www.youtube.com/watch?v=XD1MKx7eIuQ

const promise1 = new Promise((resolve, reject) => {
  // throw new Error('some error')    // дальше этой штуки код не пойдет
  setTimeout(() => {
    if (undefined) {
      resolve('promise completed')
    } else {
      reject(' ошибка какая то')
    }
  }, 2000)
})

promise1
  .then((data) => console.log(1, 'data', data))
  .catch((error) => console.log(2, 'error', error))
