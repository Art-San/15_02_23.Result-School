// 1. extends есть в interface в type его нет
// 2. в type можем использовать  юнион, пересечения , в interface этого нет

// https://www.youtube.com/watch?v=UPN27WRcR5g
// | - юнион можем объединять два типа или более

type strNum = 'hello' | number
// type strNum = string | number

const a3: strNum = 'hello' // или 5

//  пересечение=================
type objType1 = {
  one: string
  two?: number
}

type objType2 = {
  three: boolean
}

type objType = objType1 & objType2 // objType это результат пересечения, тут два значения , но их может быть больше

const obj: objType = {
  one: 'one',
  three: true
}
// ===============================
// interface четкое описание какой то структуры
// в  interface можем расширить extends

interface IInterface {
  one: String
  two: number
}

interface IInterface2 extends IInterface {
  // Расширяем
  three: boolean
}

const aI: IInterface = {
  one: '',
  two: 5
}
const aI2: IInterface2 = {
  one: '',
  two: 5,
  three: true
}

// описываем class с помощью type и interface

type THuman = {
  age: number
  name: string
  walk: () => number
}

class Human implements THuman {
  age = 5
  name = 'Андрей'
  walk: () => 8
}
// interface IHuman {
//   age: number
//   name: string
//   walk: () => number
// }

// class Human implements IHuman {
//   age = 5
//   name = 'Андрей'
//   walk: () => 8
// }
