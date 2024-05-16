'use strict'
// числовой
var Direction
;(function (Direction) {
  Direction[(Direction['Nor'] = 1)] = 'Nor'
  Direction[(Direction['Tor'] = 2)] = 'Tor'
  Direction[(Direction['Bor'] = 3)] = 'Bor'
  Direction[(Direction['Gor'] = 4)] = 'Gor' // автоматом 4
})(Direction || (Direction = {}))
// строковый
;(function (Direction) {
  Direction['Up'] = 'UP'
  Direction['Down'] = 'DOWN'
  Direction['Left'] = 'LEFT'
  Direction['Right'] = 'RIGHT'
})(Direction || (Direction = {}))
// гетерогенный
var Decision
;(function (Decision) {
  Decision[(Decision['kor'] = 1)] = 'kor'
  Decision['dor'] = 'No'
})(Decision || (Decision = {}))
// Расчетный, только числовые
;(function (Decision) {
  Decision[(Decision['Yes'] = 1)] = 'Yes'
  Decision[(Decision['No'] = calcEnum())] = 'No'
})(Decision || (Decision = {}))
function calcEnum() {
  return 2
}
// Также енумы в рунтайме можно использовать как объекты (крайне редко)
function runEnum(obj) {}
runEnum(Direction)
// обратный мапинг
var Test
;(function (Test) {
  Test[(Test['A'] = 0)] = 'A'
})(Test || (Test = {}))
let test1 = Test.A
let nameA = Test[test1] // A
// Часто енумы нам нужны только как константы
let c1 = 0 /* ConstEnum.A */
