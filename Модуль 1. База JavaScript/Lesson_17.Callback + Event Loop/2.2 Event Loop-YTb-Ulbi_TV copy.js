//
//
//
//
// *               *   *****************************************************************************
// *               *   *                                    ДВИЖОК                                 *
// *               *   *****************************************************************************
// *               *   *    движоки                 *            Решает задачи                     *
// *               *   *  + V8 (chrome)             *  + Куча (heap) и Call Stack                  *
// *               *   *  + JavaScriptCore (safari) *  + Работа с памятью выделение и сбор мусора  *
// *               *   *  + Chakra (microsoft edge) *  + Компиляция JS в маш. код                  *
// *               *   *  + SpiderMonkey (mozilla)  *  + Оптимизация ( кеши, скрыт. классы и проч) *
// *  Call Stack   *   *                            *                                              *
// *               *   *****************************************************************************
// *               * <------------------------------------------------ Call Stack  предоставляет ДВИЖОК ---->|
// *               *   ***********************************                                                   |-- общаются они через
// *               *   *  Task queue (Очередь задач)     *                                                WEB api
// *               *   *                                 *                                                   |
// *               *   *                                 *  <-----  Task queue предоставляет  Event Loop --->|                                                          |
// *****************   ***********************************
//      ВАЖНО! Event Loop (Цикл событий) - не являться часть движков, таких как V8
//         цикл событий предоставляется СРЕДОЙ например: Браузер или node.js
//       1. Chromius v8 - (браузер)
//       2. node.js V8
//       Но устройство цикла событий в них - РАЗНОЕ
//
//  WEB api предоставляет TimeOut, слушателей событий, загрузка файлов и фото отправка, fetch запросы

// Пример с setTimeout
// function log(value) {
//   console.log(value)
// }

// log('start')

// setTimeout(() => {
//   log('timeout')
// }, 3000)

// log('end')

// 1. Первым в стек попадает log('start') и сразу выходит.
// Функция log('start') вызывает console.log('start'),
//  которая синхронно выводит "start" в консоль.

// 2. Затем выполняется setTimeout,
// который регистрирует колбэк в Web API на 3 секунды,
// после чего setTimeout выходит из Call Stack.

// 3. Выполняется log('end'), выводя "end" в консоль, и выходит из Call Stack.

// 4. Когда время таймера истекает, колбэк () => { log('timeout') } перемещается в Task Queue.

// 5. Event Loop проверяет Call Stack. Когда он пуст, колбэк () => {log(timeout)} из Task Queue перемещается
// в Call Stack и выполняется, выводя "timeout" в консоль.

//     Call Stack
// *                       *                                                        WEB api
// *                       *                                           *                                      *
// *                       *                                           *                                      *
// *                       *                                           *                                      *
// *                       *                                           *                                      *
// *                       *                                           *                                      *
// *                       *                                           * setTimeout(() = {log(timeout)}, 3000)*
// *                       *                                           *                                      *
// *                       *                                           *                                      *
// *                       *                                           ****************************************
// *                       *
// *                       *   ***********************************  Когда стек очистится
// *                       *   *  Task queue (Очередь задач)     *
// *                       *   *                                 *
// *                       *   *      () => {log(timeout)}       *
// *************************   ***********************************

// Пример с addEventListener

// const button1 = document.getElementById('button1')
// const button2 = document.getElementById('button2')

// button1.addEventListener('click', () => {
//   log('click1')
// })

// button2.addEventListener('click', () => {
//   log('click1')
// })

// 1. первым попадает первый button1.addEventListener выполняется, а WEB api регистрирует слушатель события на кнопку button1
// 2. вторым попадает второй button1.addEventListener выполняется, а WEB api регистрирует слушатель события на кнопку button2

// После того как на интерфайсе нажмем на кнопку -1 ,
// у нас генерируется таска в очередь задач log('click1'),
// и после того как выполнились все синхронные задачи Call Stack выполняется log('click1')

// Кликнули по другой кнопке процедура повторилась

//     Call Stack
// *                       *                                                        WEB api
// *                       *                                           *                                      *
// *                       *                                           * Слушатели событий  зарегистрированы  *
// *                       *                                           *                                      *
// *                       *                                           *                                      *
// *                       *                                           *           button 2 (click)           *
// *                       *                                           *                                      *
// *                       *                                           *           button 1 (click)           *
// *                       *                                           *                                      *
// *                       *                                           ****************************************
// *                       *
// *                       *   ***********************************     Слушатели событий будут зарегистрированы пока не удалим через
// *                       *   *  Task queue (Очередь задач)     *                    removeEventListener
// *                       *   *                                 *
// *                       *   *          log('click1')          *
// *************************   ***********************************

// Пример Promise
// log(1)

// setTimeout(() => {
//   log(2)
// }, 0)

// Promise.resolve().then(() => {
//   log(3)
// })

// log(4)

// 1. log(1) ---> 2. log(4) ---> log(3) ---> log(2) Такая будет последовательность в консоле НО
//     Call Stack

// 1. log(1) зашел первым и тут же вышел
// 2. вторым зашел setTimeout с колбэк и зарегился WEB api
// 3. третьим Call Stack зашел промис, и перешел в очередь Микро task, ОНИ всегда туда попадают
// 4. четвертым log(4) заходит и выходит
// 5. На этом моменте все синхронные задачи выхолены, Call Stack пустой
// 6. В какой то момент колбэк из setTimeout перемещаеться  Макро task
// 7. Сейчас в очереди задач находится и колбэк из setTimeout и  Promise, но промис выполнится первым так как находится Микро task
//   --- У Event Loop в приоритете всегда выполняются микро задачи, сразу все и только потом одна макро задача

//        Call Stack
// *                       *                                                        WEB api
// *                       *                                           *                                   *
// *                       *                                           *                                   *
// *                       *                                           *                                   *
// *                       *                                           *                                   *
// *                       *                                           *       Зарегистрировался           *
// *                       *                                           *  setTimeout(() => {log(2)}, 0)    *
// *                       *                                           *                                   *
// *                       *                                           *                                   *
// *                       *                                           *************************************
// *                       *                                   Task queue
// *                       *   ***********************************   ******************************************
// *                       *   *   Макро task                    *   *  Микро task
// *                       *   *                                 *   *
// *                       *   *  () => {log(2)}                 *   *  Promise.resolve().then(() => {log(3)})
// *************************   ***********************************   ******************************************

// Конспект от GPT
// В консоли результат будет следующим:

// 1. log(1) → выводит 1.
// 2. log(4) → выводит 4.
// 3. Promise.resolve().then(() => log(3)) → выводит 3.
// 4. setTimeout(() => log(2), 0) → выводит 2.

// Описание процесса:

// 1.
// Первым в Call Stack попадает log(1):
// * Функция log(1) вызывает console.log(1), что выводит 1 в консоль, и затем выходит из Call Stack.

// 2
// Вторым в Call Stack попадает setTimeout:
// * setTimeout регистрирует колбэк в Web API с задержкой 0 мс. После регистрации он выходит из Call Stack.
// Колбэк помещается в очередь макрозадач (Task Queue) после истечения времени задержки.

// 3.
// Третьим в Call Stack попадает Promise:
// * Promise.resolve() выполняется мгновенно, его then колбэк (log(3)) добавляется в очередь микрозадач (Microtask Queue).

// 4.
// Четвертым в Call Stack попадает log(4):
// * Функция log(4) вызывает console.log(4), что выводит 4 в консоль, и затем выходит из Call Stack.

// 5.
// После выполнения всех синхронных задач (Call Stack пуст):
// * Event Loop начинает проверку микрозадач (Microtask Queue).
// Поскольку микрозадачи имеют более высокий приоритет,
// выполняется Promise.resolve().then(() => log(3)), что выводит 3 в консоль.
// * Затем Event Loop переходит к очереди макрозадач (Task Queue) и выполняет колбэк из setTimeout, который выводит 2 в консоль.

// Call Stack
// *                       *                                                        WEB API
// * log(1)                *                                           *                                   *
// *************************                                           *                                   *
// * log(4)                *                                           *        Зарегистрировался          *
// *************************                                           *   setTimeout(() => {log(2)}, 0)   *
// *                       *                                           *************************************
// *                       *                                    Task queue
// *                       *   ***********************************   ********************************************
// *                       *   *   Макро task                    *   *  Микро task                              *
// *                       *   *                                 *   *                                          *
// *                       *   *  () => {log(2)}                 *   *  Promise.resolve().then(() => {log(3)})  *
// *************************   ***********************************   ********************************************

// Что создают мИкротаски?
// 1. промисы -- Когда вы используете Promise.resolve() или создаете промис, который завершается (resolve), и добавляете обработчик с помощью .then() или .catch(), эти обработчики добавляются в очередь микрозадач (Microtask Queue).
// 2. queueMicrotask - Функция queueMicrotask() позволяет явно добавлять функцию в очередь микрозадач.
// 2. mutationObserver - Этот API позволяет отслеживать изменения в DOM и асинхронно реагировать на них. Когда изменения фиксируются, MutationObserver добавляет свои колбэки в очередь микрозадач.

// Что создают мАкротаски?
// 1. setTimeout и setInterval
// 2. Обработчики событий: Любые колбэки, связанные с событиями, такими как клики, прокрутка, ввод с клавиатуры и т.д., добавляются в очередь макротасок.
// 3. Браузерные нюансы (Рендеринг I/O операции)
// * I/O операции: Обработка входных/выходных операций, таких как чтение файлов, сетевые запросы и т.п., тоже добавляется в очередь макротасок.
// 4. MessageChannel: API для передачи сообщений между разными частями приложения. Колбэк, переданный в MessageChannel, также добавляется в очередь макротасок.

function log1(value) {
  console.log(value)
}

log1('1')

setTimeout(() => {
  log1('setTimeout 1')

  Promise.resolve().then(() => {
    log1('Promise setTimeout')
  })

  // Проверял что эти микротаски выполнятся кучей
  // queueMicrotask(() => {
  //   log1('queueMicrotask setTimeout 1')
  // })
  // queueMicrotask(() => {
  //   log1('queueMicrotask setTimeout 2')
  // })
}, 0)

setTimeout(() => {
  log1('setTimeout 2')
}, 0)

queueMicrotask(() => {
  log1('queueMicrotask 1')
})

Promise.resolve().then(() => {
  log1('Promise 1')
})

queueMicrotask(() => {
  log1('queueMicrotask 2')
})

Promise.resolve().then(() => {
  log1('Promise 2')
})

log1('2')

// Call Stack
// *                       *                                                        WEB API
// * log1('1')             *                                           *                                                *
// *************************                                           *   setTimeout(() => {log1('setTimeout 2')}, 0)  *
// * log1('2')             *                                           *                                                *
// *************************                                           *   setTimeout(() => {log1('setTimeout 1')}, 0)  *
// *                       *                                           **************************************************
// *                       *                                    Task queue
// *                       *   ***********************************   ****************************************************************
// *                       *   *   Макро task                    *   *  Микро task                                                  *
// *                       *   *                                 *   *                                                              *                                                           *
// *                       *   *  () => {log1('setTimeout 2')}   *   *  Promise.resolve().then(() => {log1('Promise 2')})           *
// *                       *   *                                 *   *                                                              *
// *                       *   *  () => {log1('setTimeout 1')    *   *  log1('queueMicrotask 2')                                    *
// *                       *   *     log1('Promise setTimeout')  *   *  Promise.resolve().then(() => {log1('Promise 1')})           *
// *                       *   *  }                              *   *  log1('queueMicrotask 1')                                    *
// *************************   ***********************************   ****************************************************************
//  + + +  на втором круге попадет Микро task после раскрытия этого колбэка () => {log1('setTimeout 1')}  Promise.resolve().then(() => {log1('Promise setTimeout')})

// Порядок
// log1('1')
// log1('2')
// log1('queueMicrotask 1')
// log1('Promise 1')
// log1('queueMicrotask 2')
// log1('Promise 2')
// log1('setTimeout 1')
// log1('Promise setTimeout')
// log1('setTimeout 2')
