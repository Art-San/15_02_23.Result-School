// console.log(1, 0 && 'Hello')
// console.log(2, 'Hi' && null && 42)
// console.log(3, {} && [] && 'JavaScript')
// console.log(4, 1 && true && {} && false && function () {})
// console.log(5, 1 && true && {} && [] && function () {})

// // Сложнее
// console.log(6, true && 'value' && 0 && 'not reached')
// console.log(7, 1 && null && undefined && 'text')
// console.log(8, 'start' && '' && 42 && false) //

// console.log(9, 1 || 'да')
// console.log(10, 0 || 'да')
// console.log(11, false || 'default')
// console.log(12, 0 || '' || NaN || 'fallback')
// console.log(13, 'First' || 'Second' || 'Third')
// // Сложнее
// console.log(14, '' || 0 || false || NaN || 'success')
// console.log(15, null || 'nullish' || '' || undefined)
// console.log(16, false || 0 || '' || 100 || 'end')

// console.log(17, null ?? 'defined')
// console.log(18, undefined ?? 0 ?? 'backup')
// console.log(19, 'not null' ?? 'fallback')

// // Сложнее
// console.log(20, undefined ?? null ?? NaN ?? 0) // NaN
// console.log(21, 0 ?? false ?? null ?? 'backup') // 0
// console.log(22, '' ?? 'empty' ?? 'filled') // ''

// string1 = 'tyu'
// пример 1
// var string1 = 'строка'
// var stringCopy = string1

// console.log(string1) // 'строка'
// console.log(stringCopy) // 'строка'

// const obj = null
// console.log(typeof obj)

// var newFyn = () => {
//   console.log('newFyn')
// }
// newFyn()

// class Rectangle {
//   constructor(height, width) {
//     this.height = height
//     this.height = width
//   }
// }

// function asdsad(height, width) {
//   this.height = height
//   this.width = width
// }

// const res = new Rectangle()
// console.log(res.width)
// const res2 = new asdsad()
// console.log(res2)

// Определение типов
// https://www.youtube.com/watch?v=atBBDQXDSGk // 1:23:15
// https://tc39.es/ecma262/#sec-typeof-operator
// typeof Оператор typeof позволяет определить тип параметра (число, строка, объект).
// Оператор возвращает строку
// 4. If val is undefined, return "undefined".
// 5. If val is null, return "object".
// 6. If val is a String, return "string".
// 7. If val is a Symbol, return "symbol".
// 8. If val is a Boolean, return "boolean".
// 9. If val is a Number, return "number".
// 10. If val is a BigInt, return "bigint".
// 11. Утверждать: val — это объект.
// 12. NOTE: This step is replaced in section B.3.6.3.
// 13. Если у val есть [[Call]] внутренний слот, return "function".
// 14. Return "object".
// Для null оператор возвращает 'object'
// console.log(typeof Date()) // string
// console.log(typeof new Date()) // object
// Мурыч null не был ошибкой языка, это тип который определяет объект с нулевой структоруй
// ecma: примитивное значение, которое представляет собой намеренное отсутствие какого-либо значения объекта
// console.log(typeof null) //  object

// Оператор instanceof
// https://www.youtube.com/watch?v=atBBDQXDSGk // 1:31:21

// console.log([] instanceof Array) // true
// console.log([] instanceof Object) // true

// Сравнения в JavaScript
// https://www.youtube.com/watch?v=atBBDQXDSGk // 1:34:15
// === / !== ---- сравнения без преобразования
// Объекты сравниваются по ссылке

// const number = NaN
// Стандарт IEEE 754 определяет представление чисел с плавающей запятой,
// и в рамках этого стандарта есть специальное значение NaN (Not-a-Number),
// которое используется для представления результатов некорректных
// или неопределённых математических операций. Важной особенностью NaN является то,
// что любое сравнение NaN с самим собой возвращает false.

// console.log(number === number) // false

// Это действительно верно, потому что в JavaScript
// (и в других языках, поддерживающих стандарт IEEE 754) NaN не равен самому себе.
// Это сделано для того, чтобы показать, что NaN представляет нечисловое
// или некорректное значение, и сравнения с ним должны всегда возвращать false.

// console.log(isNaN(number)) // true
// console.log(isNaN('string')) // true

// console.log(Object.is(NaN, NaN)) // true
// console.log(Object.is(+0, -0)) // false // Стандарт IEEE 754

// Где истина в js

// Любой объект true
// все остальное true
// console.log(Boolean({}))
// Но есть 7 легендарных ложных значений
// Смотри ToBoolean "абстрактная операция"

// function createClosure(value = 'кабздец') {
//   return () => {
//     console.log(value)
//   }
// }

// const res = createClosure()
// res()
