// src="https://hamsterkombatgame.io/clicker/#tgWebAppData=query_id%3DAAHMWgYrAAAAAMxaBis9Shya%26user%3D%257B%2522id%2522%253A721836748%252C%2522first_name%2522%253A%2522%25D0%2590%25D0%25BB%25D0%25B5%25D0%25BA%25D1%2581%25D0%25B0%25D0%25BD%25D0%25B4%25D1%2580%2522%252C%2522last_name%2522%253A%2522%25D0%2590%2522%252C%2522username%2522%253A%2522gruzz70tomsk%2522%252C%2522language_code%2522%253A%2522ru%2522%252C%2522allows_write_to_pm%2522%253Atrue%257D%26auth_date%3D1721380364%26hash%3D840e29abc0617def351ea805e3f012386a10a6fe5b0134d109a9f9be07a57565&tgWebAppVersion=7.6&tgWebAppPlatform=web&tgWebAppThemeParams=%7B%22bg_color%22%3A%22%23ffffff%22%2C%22button_color%22%3A%22%233390ec%22%2C%22button_text_color%22%3A%22%23ffffff%22%2C%22hint_color%22%3A%22%23707579%22%2C%22link_color%22%3A%22%2300488f%22%2C%22secondary_bg_color%22%3A%22%23f4f4f5%22%2C%22text_color%22%3A%22%23000000%22%2C%22header_bg_color%22%3A%22%23ffffff%22%2C%22accent_text_color%22%3A%22%233390ec%22%2C%22section_bg_color%22%3A%22%23ffffff%22%2C%22section_header_text_color%22%3A%22%233390ec%22%2C%22subtitle_text_color%22%3A%22%23707579%22%2C%22destructive_text_color%22%3A%22%23df3f40%22%7D"

// query_id: Идентификатор запроса, который, вероятно,
// используется сервером для отслеживания конкретных событий или действий пользователя.

// user: Объект JSON, содержащий информацию о пользователе:

// id: Уникальный идентификатор пользователя.

// first_name: Имя пользователя.

// last_name: Фамилия пользователя.

// username: Имя пользователя в системе.

// language_code: Код языка, используемый пользователем.

// allows_write_to_pm: Параметр, указывающий,
// разрешено ли пользователю отправлять личные сообщения.

// auth_date: Дата и время аутентификации пользователя.

// hash: Хэш, возможно,
// используемый для проверки подлинности данных пользователя.

// tgWebAppVersion, tgWebAppPlatform, tgWebAppThemeParams:
// Параметры, связанные с версией, платформой и темой веб-приложения Telegram,
// которое, судя по всему, интегрировано с сайтом.

// Таким образом, эта ссылка не только направляет пользователя к игре,
// но и передает значительную информацию о нем самому сайту,
// что может быть использовано для персонализации пользовательского опыта,
// аутентификации или других целей.
// Александр

// THIS - это индификатор (переменная (или, точнее, ссылка на объект))
// значение которого устанавливается в зависимости от обстоятельств вызова функции или метода.

// 1. This and Global Environment
// This внутри функции
// 'use strict'
// console.log('this is :', this) // нет

// 2. script или module
// Я нутри модуля ?
// Да, если внутри модуля то this = undefined

// 'use strict'
// console.log('this is :', this)
//  нет не внутри модуля, в script
// хост среда содержит в нутри себя runtime и внутри этого runtime выполняет наш код, например браузер это хост, нода это хост
// хост среда по умолчанию имеет возможность установить свое значение THIS

// Module
// 1. v8 --module = undefined // не в script, module ( специальный флаг --module как буто бы загружался модуль)

// Script
// 1. v8 = [object global]
// 2. браузере = Window {...}
// 3. node = {}
// Значение для This определено спецификацией хост среда

// 3. function Environment
// Это нормальная функция ? // Нет, она стрелочная
// function doLogThis() {
//   var doArrowThing = () => console.log('this is: ', this)
//   doArrowThing()
// }
// doLogThis()

// 4.Arror Function Envaronmet
// function doLogThis() {
//   var doArrowThing = () => console.log('this is: ', this)
//   doArrowThing()
// }
// doLogThis()
// Нет doArrowThing не нормальная, значит перейти к родительскому окружению

// 5. Пример 2.2 function Environment
// Это нормальная функция ? // doLogThis да,
// function doLogThis() {
//   var doArrowThing = () => console.log('this is: ', this)
//   doArrowThing()
// }
// doLogThis()
// =========================================
// 1. Вызов функции это именно то что приводит к тому
// что THIS начинает быть связанным с каким то значением
// 2. Если эта функция стрелочная то она этого не делает
// 3. Пример: Представте что любая обычная(нормальная не =>) функция имеет всегда один аргумент, это THIS
// Это this связывается с каким то значением в момент когда вызывается функция
// ===========================================

// 6. this и вызов функции
// function doLogThis() {
//   console.log(1, 'this is: ', this) // undefined
// }
// doLogThis()
// 1. Если this не как не задан, то он undefined

// 7. this и call, apply, bind
// function doLogThis() {
//   console.log(1, 'this is: ', this) // call =  { name: 'это АРГ' },  apply =  { name: 'это АРГ' }, bind = { name: 'это АРГ' }
//   // console.log(2, 'this is: ', this) // call =  1,  apply =  1, bind = 1
// }

// var thisArg = { name: 'это АРГ' }
// // var thisArg = 1
// doLogThis.call(thisArg)
// doLogThis.apply(thisArg)
// doLogThis.bind(thisArg)()

// 8. this и new
// Видим NEW ? Да, значит this связан {}
// function doLogThis() {
//   console.log(1, 'this is: ', this) // oLogThis {}
// }
// new doLogThis()
// new doLogThis // = обычный вызов функции
// new - это выражение вызывает функцию, и this связывается с пустым объектом
// new - это выражение вызывает функцию, можем вызвать любую кроме стрелочной (=>)

// 9. this и дот нотация
// function doLogThis() {
//   console.log(1, 'this is: ', this)
// }

// doLogThis()

// 10. ЧТО ЗА в РОТ НОТАЦИИ
// что такое дот нотация?
// Дот нотацией (dot notation) в JavaScript, называют синтаксис,
// когда два идентификатора разделены между собой точкой (dot).
// Например:
// theObj.theProperty;
// Его полным аналогом является синтаксис:  theObj["theProperty"]

// Вызов функции в дот нотации
// Вызов функции в dot нотации выглядит
// следующим образом:
// theObj.doThing();
// theObj["doThing"]();

// 11. this и дот нотация
// функция фызвана в дот нотации ? нет, this = undefined
// function doLogThis() {
//   console.log(1, 'this is: ', this)
// }

// doLogThis()

// 12. this и дот нотация
// функция фызвана в дот нотации ? да
// this будет равен индефикатору что стоит перед точкой(дот)

// function doLogThis() {
//   console.log('this is: ', this)
// }

// const theObj = {
//   name: 'Murych'
// }
// theObj.doLogThis = doLogThis

// theObj.doLogThis()

// 13. Пример наоборот
// 1. Видим call, apply, bind ? нет
// 2. Видим new ? нет
// 3. dot notation ? нет
// вывод; this = undefined
// const theObj = {
//   name: 'Murych',
//   doLogThis: function () {
//     console.log('this is: ', this)
//   }
// }
// var doLogThisGlobal = theObj.doLogThis
// doLogThisGlobal()

//   ----- 14-15 важно помнить как функция вызвана
// 1. с помощью call, apply, bind ? нет
// 2. с помощью new ? нет
// 3. с помощью dot notation ? нет
// this = undefined

// 14. Пример наоборот - 2
// const theObj = {
//   name: 'Murych',
//   doLogThis: function () {
//     console.log('this is: ', this)
//   }
// }

// setTimeout(theObj.doLogThis, 1)

// 1. v8 = undefined
// 2. браузере = Window {...}
// 3. node = Timeout {.....} // причудливый объект это хоз среда его туда запихала

// 15. Пример наоборот - 3
// const theObj = {
//   name: 'Murych',
//   doLogThis: function () {
//     console.log('this is: ', this)
//   }
// }
// var doLogThis = theObj.doLogThis
// setTimeout(doLogThis, 1)

// 16. APi call
// function doHandleClick() {
//   console.log('this is: ', this)
// }

// document.body.addEventListener('click', doHandleClick) // <body>...</body>
// document.body.addEventListener('click', doHandleClick.bind({ yo: 'yo' })) // yo: 'yo'

// Путаница с this часто возникает, когда мы начинаем работать с API,
// потому что согласно стандарту языка JavaScript любое API может назначить
// значение this по своему усмотрению, что иногда приводит
// к неожиданным результатам и нарушению интуитивных ожиданий.

// чтобы понять чему равен this нужно посмотреть где вызывается эта функция в нутри которой находится This
// если мы находимся не внутри функции, то мы находимся либо в скрипте или модуле. Если в модуле это undefined,
// если в скрипте то соглано спецификации host среды, которая может установить this какой ей хочется.
// Далее если мы оказались в функции, и она стрелочная то мы смотрим на родительское окружение.
// Находясь в обычной функции смотрим как она вызывалась
// Если с помощью call, apply, bind то this = тому что в скобках одногоиз метадов
// Если с помощью new то this = связан с пустым {}
// Если с помощью dot notation то this будет равен тому что пере точкой

// Если предыдушие пункты не подошли то  this = undefined

// This это особый аргумент нормальной функции, нормальная функция вызывается минимум с одним аргументом и это this

// Если 'use strict' то  при вычесление выражения THIS это всегда будет именно то что было и связано THIS
// Если  'non strict' то это будет нечто что пройдет сначала через виртуальную функцию Object, если там будет не объект,
// а какоето примитивное значение, то это значение будет пропущено через конструктор

// String.prototype.doThingStrict = function () {
//   'use strict'
//   console.log(1, 'this is:', this instanceof Object, this)
// }

// String.prototype.doThing = function () {
//   console.log(2, 'this is:', this instanceof Object, this)
// }

// Number.prototype.doThing = function () {
//   // 'use strict'
//   console.log('this is:', this)
// }

// 'Yo'.doThingStrict() // this будет связан со значением "Yo"
// 'Yo'.doThing() // this будет связан со значением new String("Yo")
// const num = 12
// num.doThing() // this is: [Number: 12]
// doThing();

// Пример со стрелочной
// 'use strict'
// 1
// function doLogThis() {
//   var doArrowThing = () => console.log('this is: ', this)
//   doArrowThing()
// }
// doLogThis()

// doArrowThing определина в глобальном окружение
// 1. Вопрос в нормальной ли мы функции ?  Нет, мы встрелочной
// 2. куды мы идем дальше ? к родительскому окружению, то есть к глобальному окружение (не туда где вызвана функция)
// 3. в глобальном окружение встает вопрос мы в модуле или скрипте ? мы не в модуле, а в скрипте
// 4. Если в скрипте значит this будет равен тому как определит его хост среда, смотри спецификацию

// 2
// var doArrowThing = () => console.log(2, 'this is: ', this)
// // var doArrowThing = (
// // () =>
// // console.log('this is: ', this)
// // )

// function doLogThis() {
//   doArrowThing()
// }
// doLogThis()

// 3
// 'use strict'
// var doArrowThing = () => console.log('this is: ', this)

// const theObj = {
//   name: 'Murych',
//   doSayYourName: function () {
//     doArrowThing()
//   }
// }
// theObj.doSayYourName()

// 4
'use strict'
const theObj = {
  name: 'theObject Murych',
  returnFunction: function () {
    var doArrowThing = () => console.log('this is: ', this)
    return doArrowThing
  }
}
const theSuperObj = {
  name: 'Murych',
  doSayYourName: function (duFinhg) {
    duFinhg()
  }
}
theSuperObj.doSayYourName(theObj.returnFunction())

// чему равен this ?
// 1. Где находится this?
// * Внутри функции.

// 2. Функция нормальная?
// * Нет, это стрелочная функция.

// 3. Где расположена стрелочная функция?
// * Внутри обычной функции returnFunction объекта theObj.

// 4. Как вызывается функция doArrowThing?
// с помощью дот нотации

// 5. Значит, чему равно this?
// Значит this равен тому что слева от точки
