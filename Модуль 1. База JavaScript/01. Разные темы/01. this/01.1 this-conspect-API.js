//=================================
// мы не должны идти по алгоритму вообще, только посмотреть как она вызвана
// увидеть что с помощью API, остановится поскольку API в праве менять по своему усмотрению
// Четвертый пример, изменили функцию на стрелочную
'use strict'
const theObj = {
  name: 'Murych',
  init: () => {
    console.log('init', this)
  },
  doLogThis: function () {
    console.log('this is: ', this)
  }
}

theObj.init()
var doInit = theObj.init
doInit()
setTimeout(doInit, 1)

// все три вызова, будут так
// init {}
// init {}
// init {}
// Даже setTimeout, а это внешнее api он не смог повлиять на результат

// https://www.youtube.com/watch?v=P7HqGHJ94AI 19:00
// первый пример
// 'use strict'
// const theObj = {
//   name: 'Murych',
//   init: function () {
//     console.log('init', this)
//   },
//   doLogThis: function () {
//     console.log('this is: ', this)
//   }
// }

// theObj.init()
// console.log('init', this) = init {
//   name: 'Murych',
//   init: [Function: init],
//   doLogThis: [Function: doLogThis]
// }

//========================================
// второй пример
// 'use strict'
// const theObj = {
//   name: 'Murych',
//   init: function () {
//     console.log('init', this)
//   },
//   doLogThis: function () {
//     console.log('this is: ', this)
//   }
// }

// theObj.init()
// var doInit = theObj.init
// doInit()
// первый вызов theObj.init()
// console.log('init', this) = init {
//   name: 'Murych',
//   init: [Function: init],
//   doLogThis: [Function: doLogThis]
// }

// второй вызов doInit()
// console.log('init', this) // в 'use strict'  undefined, 'non strict' будет Object [global]

//=================================
// Третий пример
// 'use strict'
// const theObj = {
//   name: 'Murych',
//   init: function () {
//     console.log('init', this)
//   },
//   doLogThis: function () {
//     console.log('this is: ', this)
//   }
// }

// theObj.init()
// var doInit = theObj.init
// doInit()

// setTimeout(doInit, 1)

// первый вызов theObj.init()
// console.log('init', this) = init {
//   name: 'Murych',
//   init: [Function: init],
//   doLogThis: [Function: doLogThis]
// }

// второй вызов doInit()
// console.log('init', this) // в 'use strict'  undefined, 'non strict' будет Object [global]

// третий вызов
// console.log('init', this) // в node Timeout{....}, браузер Window {....}
