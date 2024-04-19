// const { resolve, reject, promise } = Promise.withResolvers()
// console.log(resolve)
// console.log(reject)
// console.log(promise)

class Queue {
  #message = [] // # делает переменную приватной
  #resolve
  #reject
  #promise

  constructor() {
    const { resolve, reject, promise } = Promise.withResolvers()
    this.#promise = promise
    this.#reject = reject
    this.#resolve = resolve
  }

  add(msg) {
    this.#message.push(msg)
    return this
  }

  close() {
    this.#resolve(this.#message)
  }

  error(reason) {
    this.#reject(reason)
  }

  subscribe() {
    return this.#promise
  }
}

const queue = new Queue()
const sub1 = queue.subscribe()
sub1.then((data) => console.log(data)).catch((err) => console.error(err))
const sub2 = queue.subscribe()
sub2.then((data) => console.log(data)).catch((err) => console.error(err))

queue.add('msg1').add('msg2').close()
queue.add('msg1').add('msg2').error('Не получен последний пакет')

// простой пример Promise.withResolvers
// function wait(ms) {
//   const { resolve, reject, promise } = Promise.withResolvers()
//   setTimeout(() => {
//     resolve()
//   }, ms)
//   return promise
// }

// async function run() {
//   console.log('начало')
//   await wait(2000)
//   console.log('конец')
// }

// run()

// Класически промис
// run1()
// function wait(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, ms)
//   })
// }

// async function run() {
//   console.log('начало')
//   await wait(2000)
//   console.log('конец')
// }

// run()
