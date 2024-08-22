// Основные элементы:
// 1. Объекты и функции:

///================================================
//свойство Prototype у функции

// var theObj = {
//   name: 'мурыч'
// }
// var theObj2 = {
//   age: 46
// }
// Reflect.setPrototypeOf(theObj, theObj2)

// console.log(1, theObj.age)

// function makeObj(name) {
//   this.name = name
// }
// // makeObj.prototype.age = 46
// makeObj.prototype = {
//   age: 46
// }
// var theObj = new makeObj('murych')

// console.log(theObj.name)
// console.log(theObj.age)

function makeObj(name) {
  this.name = name
}

var theObjAge = {
  age: 46
}

Reflect.setPrototypeOf(theObjAge, { mudak: true })

makeObj.prototype = theObjAge

var theObj = new makeObj('murych')

console.log(1, theObj.name)
console.log(2, theObj.age)
console.log(2, theObj.mudak)
