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

// console.log(17, null ?? 'defined') //  'defined'
// console.log(18, undefined ?? 0 ?? 'backup') // 0
// console.log(19, 'not null' ?? 'fallback') // 'not null'

// // Сложнее
// console.log(20, undefined ?? null ?? NaN ?? 0) // NaN
// console.log(21, 0 ?? false ?? null ?? 'backup') // 0
// console.log(22, '' ?? 'empty' ?? 'filled') // ''

// Жаргон: область видимости, мистическое лексическое окружение

// В спецификации: цепочка окружения
// Надо учить прототипную модель js

// var theThing = 1

// function doGlobalThing() {
//   console.log(theThing)
//   var theSomeThing = 10
//   function newDoThing() {
//     var theNewNewDoThing = 777
//   }
// }
// function doThing(doGlobalThing) {
//   var theThing = 2
//   doGlobalThing()
// }

// doThing(doGlobalThing)

//                                                                                                  newDoThing
//                                                                                                 ***************************************
//                                                                                                 *                                     *
//                                                                                          ------ * --[[ outer ]]                       *
//                                                                                          |      *                                     *
//                                                       doGlobalThing                      V      *   theNewNewDoThing                  *
//                                                       * ************************************    *                                     *
//                                                       *                                    *    *   (каробочка 3)                     *
//                                   --------------------* -- [[ outer ]]                     *    *   *******************************   *
//                                   |                   *                                    *    *   *                             *   *
//                                   |                   *    theSomeThing                    *    *   * var theNewNewDoThing = 777  *   *
//        Окружение - среда          V                   *                                    *    *   *                             *   *
//      *********************************************    *    (каробочка 2)                   *    *   *                             *   *
//      *                                           *    *    *****************************   *    *   *                             *   *
//      *        theThing                           *    *    *                           *   *    *   *******************************   *
//      *        doGlobalThing                      *    *    *  console.log(theThing)    *   *    *                                     *
//      *        doThing                            *    *    *  var theSomeThing = 10    *   *    ***************************************
//      *  (каробочка 1)                            *    *    *  function newDoThing() {  *   *
//      *  ***************************************  *    *    *                           *   *
//      *  *                                     *  *    *    *  }                        *   *
//      *  *  var theThing = 1                   *  *    *    *                           *   *
//      *  *  function doGlobalThing() {         *  *    *    *****************************   *
//      *  *                                     *  *    *                                    *
//      *  *  }                                  *  *    **************************************
//      *  *  function doThing(doGlobalThing) {  *  *
//      *  *                                     *  *
//      *  *                                     *  *              doThing
//      *  *  }                                  *  *             *********************************
//      *  *                                     *  *             *                               *
//      *  *  doThing(doGlobalThing)             *  * <-----------*-- [[ outer ]]                 *
//      *  *                                     *  *             *                               *
//      *  ***************************************  *             *    theThing                   *
//      *                                           *             *                               *
//      *********************************************             *    ************************   *
//                                                                *    *                      *   *
//                                                                *    *  var theThing = 2    *   *
//                                                                *    *                      *   *
//                                                                *    *  doGlobalThing()     *   *
//                                                                *    ************************   *
//                                                                *                               *
//                                                                *********************************

// Когда среда JS анализирует этот код, он обнаруживает что есть
// две function decloration (2 деклорации функции) doGlobalThing и doThing она создала
// в окружение для них идентификаторы: theThing, doGlobalThing, doThing .
// Но кроие этого оно создало для doGlobalThing коробочку с кодом console.log(theThing)
// внутри своего собственного окружения.
// Другими словами для Js для runtime согластно спецификации при выполнение этого
// кода существуют только конструкции (смотри в коробочку 1 ),
// кода в функций не существует. Этот код попадает в отдельную коробочку. При этом в
// специальном служебном поле outer, прописывается связь между этим outer этм нашем окружением
// и окружение где была рождена функция 27:30

// doGlobalThing создает отдельно коробочку с кодом вокруг которой отдельно создается окружение и
// у этого окружения именно в момент когда он прочитали function decloration в поле outer создается
// связь с окружением где была рождена эта функция

///===================================================================================================
var theThing = 1
function doGlobalThing() {
  var local = 7
  return () => {
    return local
  }
}

var returnedFun = doGlobalThing()

function enotherFun(doThing) {
  var local = 98
  return doThing()
}

console.log(123, enotherFun(returnedFun))
//                                                                                                  anon
//                                                                                                 ***************************************
//                                                                                                 *                                     *
//                                                                                          ------ * --[[ outer ]]                       *
//                                                                                          |      *                                     *
//                                                       doGlobalThing                      V      *                                     *
//                                                       * ************************************    *                                     *
//                                                       *                                    *    *   (каробочка 3)                     *
//                                   --------------------* -- [[ outer ]]                     *    *   *******************************   *
//                                   |                   *                                    *    *   *                             *   *
//                                   |                   *    local                           *    *   *                             *   *
//        Окружение - среда          V                   *                                    *    *   * return local                *   *
//      *********************************************    *    (каробочка 2)                   *    *   *                             *   *
//      *                                           *    *    *****************************   *    *   *                             *   *
//      *        theThing                           *    *    *                           *   *    *   *******************************   *
//      *        doGlobalThing                      *    *    *  var local = 7            *   *    *                                     *
//      *        enotherFun                         *    *    *  return (                 *   *    ***************************************
//      *  (каробочка 1)                            *    *    *       () => {             *   *
//      *  ***************************************  *    *    *      return local         *   *
//      *  *                                     *  *    *    *      }                    *   *
//      *  *  var theThing = 1                   *  *    *    *   )                       *   *
//      *  *  function doGlobalThing() {         *  *    *    *****************************   *
//      *  *     var local = 7                   *  *    *                                    *
//      *  *    return (                         *  *    **************************************
//      *  *         () => {                     *  *
//      *  *             return local            *  *
//      *  *     })                              *  *
//      *  *   }                                 *  *              enotherFun
//      *  *                                     *  *             ****************************
//      *  *  var returnedFun = doGlobalThing()  *  * < --------- *----
//      *  *                                     *  *             *   local
//      *  *                                     *  *             *   doThing
//      *  *  function enotherFun(doThing) {     *  *             *   **********************
//      *  *  var local = 98                     *  *             *   *   var local = 98   *
//      *  *  doThing()                          *  *             *   *                    *
//      *  *   }                                 *  *             *   *   doThing()        *
//      *  *                                     *  *             *   *                    *
//      *  *    enotherFun(returnedFun)          *  *             *   *                    *
//      *  ***************************************  *             *   *                    *
//      *                                           *             *   ***********************
//      *********************************************             *
//                                                                ******************************
//
//
