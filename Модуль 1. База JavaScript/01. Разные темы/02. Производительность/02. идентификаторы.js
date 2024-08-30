// https://www.youtube.com/watch?v=biy50-ssgVQ
// Идентификаторы
// не гуд
// Вар 1
// 'use strict'
// function doThing() {
//   var theThing = 3

//   function doInnerThing() {
//     var theSumator = 0

//     while (theThing--) {
//       theSumator++
//     }
//     return theSumator
//   }
//   doInnerThing()
// }

// doThing()

// гуд
// Вар 2
// 'use strict'
// function doThing() {
//   var theThing = 3

//   function doInnerThing(theThing) {
//     var theSumator = 0

//     while (theThing--) {
//       theSumator++
//     }
//     return theSumator
//   }
//   doInnerThing(theThing)
// }

// doThing()

// тоже гуд
// Вар 3
// 'use strict'
// function doThing() {
//   var theThing = 3

//   function doInnerThing() {
//     var theSumator = 0

//     var theCounter = theThing

//     while (theCounter--) {
//       theSumator++
//     }

//     theThing = theCounter
//     return theSumator
//   }
//   doInnerThing()
// }

// doThing()

// Вариант 1:
// *** Использует замыкание, поскольку функция doInnerThing захватывает переменную
// theThing из внешнего контекста. Это делает код простым, но может привести
// к побочным эффектам, так как значение theThing изменяется глобально в
//  пределах функции doThing.
// *** Производительность этого варианта в большинстве случаев будет на хорошем уровне,
// но возможны побочные эффекты при изменении переменной, которая может использоваться
// в других частях кода.

// Вариант 2:
// *** Использует передачу переменной theThing как аргумент функции,
// что позволяет избежать замыканий и предотвращает изменения глобальной переменной.
// Это улучшает читаемость кода и снижает вероятность возникновения побочных эффектов.
// *** Этот вариант будет немного быстрее, чем вариант 1, поскольку избегает создания
// замыкания и работает с локальной переменной.

// Вариант 3:
// *** Аналогичен варианту 2, но с дополнительной локальной переменной theCounter,
// которая используется для управления циклом. Это немного увеличивает количество переменных,
// но не оказывает значительного влияния на производительность.
// *** Этот вариант так же безопасен, как вариант 2, и отличается лучшей структурой,
// поскольку использование дополнительной переменной делает логику более явной.

// Заключение:
// *** Вариант 2 и Вариант 3 наиболее предпочтительны с точки зрения производительности
// и безопасности кода. Оба варианта избегают создания замыканий и работают
// с локальными переменными, что делает их эффективными и безопасными.
// *** Вариант 3 имеет более структурированный подход благодаря использованию дополнительной
// локальной переменной для управления циклом, что может улучшить понимание логики кода.
// *** Вариант 1 является простым, но менее безопасным, так как использует замыкание
// и может изменять глобальную переменную, что может привести к непредсказуемым
// побочным эффектам.

// В общем, выбор между вариантом 2 и вариантом 3 зависит от предпочтений
// в структуре кода, но с точки зрения производительности они будут почти идентичными.
