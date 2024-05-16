// числовой
// enum Direction {
//   Nor = 1, // с числовым вариантом хватит значения для первого элемента
//   Tor, // автоматом 2
//   Bor, // автоматом 3
//   Gor // автоматом 4
// }
// строковый
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

// гетерогенный

// enum Decision {
//  Yes = 1,
//  No = 'No'
// }

// Расчетный, только числовые
enum Decision {
  Yes = 1,
  No = calcEnum()
}

function calcEnum() {
  return 2
}

// Также енумы в рунтайме можно использовать как объекты (крайне редко)

function runEnum(obj: { Up: string }) {}

runEnum(Direction)

// обратный мапинг

enum Test {
  A
}

let test1 = Test.A
let nameA = Test[test1] // A

// Часто енумы нам нужны только как константы
const enum ConstEnum {
  A,
  B
}

let c1 = ConstEnum.A
