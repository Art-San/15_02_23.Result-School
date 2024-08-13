// https://www.youtube.com/watch?v=zDlg64fsQow

// Event Loop (событийный цикл)

function sum(a, b) {
  return a + b
}
const first = sum(1, 1) //------|
const second = sum(2, 2) //-----|
const third = sum(3, 3) //------|
//                              |
//                              |
//    Call Stack                V
//         ^                  t-sum(1, 3)
// *       |       *            |
// *       |       *            |
// *               *            |
// *  f-sum(1, 3)  *            |
// *       |       *   Порядок выполнения попадают в стек и сразу из нег выходят
// *       |       *            |
// *        - - - -*- - - - <- s-sum(2, 2)
// ****************

// ===================================================================

function first() {
  // ...
}
function second() {
  first()
}
function third() {
  second()
}

third()

//    Call Stack      Вход
//         ^            1. Первая в стек попала third()
// *       |      *     2. Вторая в стек попала second()
// *       |      *     3. Третья в стек попала first()
// *    first()   *   Выход
// *              *     4. Первой вышла first()
// *    second()  *     5. Второй вышла second()
// *              *     6. Последней вышла first()
// *    third()   *
// ****************

// Покидание Call Stack:
// first() покидает Call Stack, так как была последней вызванной функцией.
// Затем second() покидает Call Stack, так как её работа была завершена после first().
// И наконец, third() покидает Call Stack, так как она была первой функцией, вызвавшей остальные.

// Этот процесс демонстрирует работу стека вызовов (Call Stack)
// в соответствии с принципом LIFO (Last In, First Out) — последний вошел, первый вышел.

// =====================================================

function factorial(n) {
  if (n < 2) {
    return 1
  }

  return n * factorial(n - 1)
}

factorial(5)

// factorial(100000000000)  <----- так можно переполнить Call Stack

//    Call Stack
//         ^
// *       |       *
// *       |       *
// *  factorial(1) *
// *  factorial(2) *
// *  factorial(3) *
// *  factorial(4) *
// *  factorial(5) *
// *****************

// На основе предоставленной вами схемы и описания процесса,
// factorial(1) действительно будет первым,
// кто покидает стек вызовов (Call Stack),
// когда вы вызываете factorial(5).

// 1 Вызов factorial(5): Запускает цепочку рекурсивных вызовов, начиная с factorial(5),
// затем factorial(4), factorial(3), factorial(2), и наконец, factorial(1).

// 2 Рекурсия: Каждый вызов factorial(n) внутри себя вызывает factorial(n - 1), создавая стек вызовов.

// 3 Базовый случай: Когда n становится меньше 2, функция возвращает 1 и завершает свое выполнение.
// Это базовый случай рекурсии.

// 4 Покидание Call Stack: После того как factorial(1) завершает свое выполнение и возвращает 1,
// управление возвращается к вызывающей функции factorial(2). Поскольку factorial(2)
// уже завершила свое выполнение и возвращение, она также покидает Call Stack.

// 5 Продолжение процесса: Этот процесс повторяется для каждого вызова функции, начиная с factorial(3)
// и заканчивая factorial(5), которые покидают Call Stack в обратном порядке их поступления.

// Таким образом, factorial(1) действительно покидает Call Stack первым,
// поскольку это базовый случай рекурсии, который немедленно возвращает значение и завершает выполнение,
// не требуя дальнейших рекурсивных вызовов.

//ERROR приведет к переполнению стека вызовов
// Стандартная глубина стека в
// большинстве современных браузеров составляет около 10000 вызовов.
// function factorial(n) {
//   if (n < 2) {
//     return 1
//   }

//   return n * factorial(n - 1)
// }

// factorial(100000000000)

// Использование цикла for позволяет избежать переполнения стека вызовов,
// поскольку нет необходимости в рекурсивных вызовах функции.
// Result = Infinity получили бы бесконечность, но приложение не крякнет
// function factorial(n) {
//   let result = 1
//   for (let i = n; i > 1; i--) {
//     result *= i
//   }

//   return result
// }

// factorial(100000000)

// =====================================================

function log(value) {
  console.log(value)
}

log('start') // -------------------|
//                                 |
setTimeout(() => {
  //-------------->                |
  log('timeout') //--------------->|
}, 3000) //                        |
//                                 |
log('end') // -------------------> |
//                                 |
//        Call Stack               |         1. log('start') зашла и вышла
//            ^                    |         2. setTimeout зашел и вышел, но его колбэк попадает в очередь задач
// *          |           *        |         3. log('end') зашел и вышел,
// *          |           *        |         4. последней выполняется стрелочная функция () => {}  в которой log('timeout')
// *                      *        |
// *    log('start')      *        |          Task очередь задач              ВАЖНО! Задачи из очереди могут попасть в стек
// *          |           *        |         **********************************      после того как все функции покинут его
// *          |           *        |------>  *  () => {log('timeout')}        *---|
// *          |           *        |         *    в последнюю очередь         *   |
// *          |           *        |         * ********************************   |
// *   setTimeout(пусто)  *        |                                              |
// *          ------------* <-- log('end') <-----------------------------------   |
// ************************
// Порядок
// 1. Start
// 2. End
// 3. TimeOut

// 1. Вызов log('start'): Первый вызов функции log с аргументом 'start'.
// Эта функция немедленно выводит значение в консоль и завершает свое выполнение.

// 2. Вызов setTimeout: Затем вызывается функция setTimeout, которая устанавливает
// таймер на 3000 миллисекунд. Внутри колбэка setTimeout вызывается функция
// log с аргументом 'timeout'. Однако, сама функция setTimeout немедленно завершает
// свое выполнение после установки таймера, поэтому она покидает Call Stack сразу же.

// 3. Вызов log('end'): После завершения setTimeout, вызывается функция log
// с аргументом 'end'. Эта функция немедленно выводит значение в консоль
// и завершает свое выполнение.

// Схема показывает, что функция log('start') покидает Call Stack первая,
// за ней следует setTimeout (который немедленно завершает выполнение),
// а затем log('end'). Колбэк setTimeout, который вызывает log('timeout'),
// будет выполнен асинхронно после 3000 миллисекунд, но на момент
// основного потока выполнения кода, он уже покинул Call Stack
