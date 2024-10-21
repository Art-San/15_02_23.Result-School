// const timeout = setTimeout(() => {
//   console.log('after 2 sec')
// }, 2000)

// clearTimeout(timeout)

// setInterval(() => {
// console.log('interval after 2 sec')
// },2000)

// ================================================

// const delay = (fn, wait = 1000) => {
//   setTimeout(fn, wait)
// }

// delay(() => {
//   console.log('after 1 sec')
// }, 2000)

// ==============   promise 1 =========
const delay = (wait = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = Math.floor(Math.random() * 10)
      if (num >= 5) {
        resolve([3])
      } else {
        reject('Данные пришли не те ')
      }
    }, wait)
  })
  return promise
}

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max)
// }

// console.log(getRandomInt(10))
// Expected output: 0, 1 or 2

// console.log(getRandomInt(1))
// Expected output: 0

// console.log(Math.random())
// Expected output: a number from 0 to <1

// 1.
// delay(2500).then(() => {
//   console.log('after 2500 sec')
// })

// 2
// delay(2500)
//   .then((n) => {
//     const num = 40 + n
//     return num
//   })
//   .then((myNumber) => {
//     const res = (myNumber * 100) / 5
//     console.log('after 2500 sec', res)
//   })

// 3
// delay(2500)
//   .then(() => {
//     const num = 40
//     return num
//   })
//   .then((myNumber) => console.log('after 2 sec', myNumber))
//   .catch((err) => console.log(err))
//   .finally(() => console.log('anyway'))

// ==============   promise 2  =========
const getData = () => new Promise((resolve) => resolve([1, 1, 2, 3, 5, 8, 13]))

// getData().then((data) => console.log(data))

async function asyncExample() {
  try {
    const num = await delay(3000)
    const data = await getData()
    console.log([...num, ...data])
  } catch (e) {
    console.log(e)
  } finally {
    console.log('Сработал finally')
  }
}

asyncExample()
