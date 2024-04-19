// https://www.youtube.com/watch?v=84ZD-03Vf94
// первый пример
// const WRING_OUT_TIME = 500

// function wringOut(count) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, count * WRING_OUT_TIME);
//   })
// }

// console.log('Начать отжимание')
// wringOut(10).then(() => {
//   console.log('Отжался 10 раз')
// })

// пример следующий
const WRING_OUT_TIME = 500
const SQUATTING_TIME = 200

function wringOut(count) {
  return new Promise((resolve, reject) => {
    if (count > 200) {
      reject(new Error('Слишком много отжиманий'))
    }
    setTimeout(() => {
      resolve()
    }, count * WRING_OUT_TIME)
  })
}

function squatting(count) {
  return new Promise((resolve, reject) => {
    if (count > 1000) {
      reject(new Error('Слишком много приседаний'))
    }
    setTimeout(() => {
      resolve()
    }, count * SQUATTING_TIME)
  })
}

console.log('Начать тренировку')
wringOut(10)
  .then(() => {
    console.log('Отжался 10 раз')
    return squatting(2000)
  })
  .then(() => {
    console.log('Присел 20 раз!')
  })
  .catch((err) => {
    console.log(`${err}  Устал не могу дальше `)
  })

// async function myTraining() {
//   try {
//     console.log('Начать тренировку')
//     await wringOut(10)
//     console.log('Отжался 10 раз')
//     await squatting(2000)
//     console.log('Присел 20 раз!')
//     return true
//   } catch (err) {
//     console.log(err.toString())
//     return false
//   }

// }

// // асинхронная функция всегда возвращает промис
// myTraining().then((result) => {
//   console.log(result)
// })
