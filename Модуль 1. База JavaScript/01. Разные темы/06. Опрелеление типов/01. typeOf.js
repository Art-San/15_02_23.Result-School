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
