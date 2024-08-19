// Да, можно сказать, что this в JavaScript — это индикатор (или, точнее, ссылка на объект),
// значение которого устанавливается в зависимости от обстоятельств вызова функции или метода.
// Это ключевой аспект работы с объектно-ориентированным программированием в JavaScript,
// поскольку this позволяет обращаться к текущему контексту выполнения кода внутри функций и методов.

//1.  Вызов функции как метода объекта: В этом случае this будет указывать на сам объект,
// который был использован для вызова метода.
const obj = {
  prop: 'Hello',
  method: function () {
    console.log(this.prop) // 'Hello'
  }
}
obj.method()

//  2. Вызов функции как конструктора (с использованием оператора new):
// Здесь this ссылается на новый созданный экземпляр объекта.
function MyConstructor() {
  this.prop = 'Hello'
}
const instance = new MyConstructor()
console.log(instance.prop) // 'Hello'

// 3. Вызов функции как обычной функции: В строгом режиме ('use strict') this будет undefined,
// в небрежном режиме — глобальным объектом (window в браузерах или global в Node.js).

function myFunction() {
  console.log(this)
}
myFunction() // В строгом режиме: undefined; в небрежном: Window (или global в Node.js)

//  4. Использование стрелочных функций: Стрелочные функции не имеют собственного this.
// Они захватывают значение this из окружающего контекста, в котором были объявлены.

const obj1 = {
  prop: 'Hello',
  method: () => {
    console.log(this.prop) // Здесь this относится к глобальному контексту, а не к obj
  }
}
obj1.method()

//  Таким образом, значение this действительно зависит от обстоятельств,
// в которых вызывается функция или метод, и это один из ключевых моментов понимания работы с JavaScript.

// =================================================================================================

// ОТ Phind
// 1. В JavaScript, контекст this внутри функции определяется тем, как и где функция была вызвана.
// Для обычных функций (не стрелочных), this устанавливается в зависимости от контекста вызова:
// *** Если функция вызывается как метод объекта, this будет ссылаться на этот объект.
// *** Если функция вызывается как конструктор (с использованием new), this будет ссылаться на создаваемый экземпляр объекта.
// *** Если функция вызывается как обычная функция (не как метод или конструктор),
// this будет равен глобальному объекту (window в браузерах, global в Node.js)
// в небрежном режиме или undefined в строгом режиме ('use strict').

//
// 2. Стрелочные функции в JavaScript не имеют собственного this.
// Вместо этого они захватывают значение this из окружающего лексического контекста,
// в котором они были объявлены. Это означает, что this внутри стрелочной функции
// всегда будет указывать на то же значение, что и this в месте, где функция была создана,
// независимо от того, как и где функция вызывается позже.

// Обычная функция
// function normalFunction() {
//   console.log(2, this)
// }
// normalFunction() // Выведет глобальный объект или undefined в строгом режиме

// Стрелочная функция
// const arrowFunction = () => {
//   console.log(3, this)
// }
// arrowFunction() // Зависит от контекста, в котором была создана
