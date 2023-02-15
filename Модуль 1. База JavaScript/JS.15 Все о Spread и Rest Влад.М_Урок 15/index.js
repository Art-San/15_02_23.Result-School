// // // Ссылка на урок
// https://www.youtube.com/watch?v=SGeQ-U0G7dE

const citiesRussia = ['Москв', 'Санкт-Перербург', 'Казань', 'Новосибирск']
const citiesEuropa = ['Берлин', 'Прага', 'Париж']

// const allCities = [...citiesEuropa]
// console.log('allCities', allCities) // allCities теперь это клон масива citiesEuropa

// const allCities = [...citiesEuropa, 'Washington', ...citiesRussia]
// const allCities2 = citiesEuropa.concat(citiesRussia)                // concat устаревший вариант объединения массивов
// console.log('allCities', allCities)
// console.log('allCities', allCities2)

// ==========================  SPRED
// ==============   Spred оператор очень мощный позваляет работать с оъектами
const citiesRussiaWithPopulation = {
    Moscow: 13.01,
    SaintPeterburg: 5.38,
    Kazan: 1.257,
    Novosibirsk: 1.62
}
const citiesEuropaWithPopulation = {
    Moscow: 15,   // эта запись перетрет значение в объекте citiesRussiaWithPopulation
    Berlin: 3.61,
    Praha: 1.27,
    Paris: 2.66
}

// console.log({...citiesRussiaWithPopulation}) // без {} раб. не будет, по итогу создали новай объект
// console.log({...citiesRussiaWithPopulation, ...citiesEuropaWithPopulation}) 

// Практическое применение

// console.log(Math.max(5, 37, 42, 17))

// const numbers = [5, 37, 42, 17]
// console.log(Math.max.apply(null, numbers))
// console.log(Math.max(...numbers))

const divs = document.querySelectorAll('div')
// console.log(divs.map()) // map работатать не будет так как его нет в Prototype (entries. forEac, и тд)

const nodes = [...divs]  // так мы получим полноценный массив
// console.log('nodes', nodes)

// С помощью Array.isArray спрашивае является ли массивом
// console.log(divs, Array.isArray(divs))    //false
// console.log(nodes, Array.isArray(nodes))  // true

// =============================== REST  =======
// rest очень похож на spred но всеравно другой
// отличие  в области применения

// function sum(a, b, ...rest) {  // rest собирает в новый масив оставшиеся значения
//     console.log(rest)          // [3, 4, 5]
//     return a + b + rest.reduce((a, e) => a + e, 0)
// }

// const numbers = [1, 2, 3, 4, 5]
// // SPRED!!
// console.log(sum(...numbers)) // "3" так складываются первые два значения массива numbers


// ====== ========================================
const numbers1 = [1, 2, 3, 4, 5, 6, 7]

// const a = numbers1[0]  // есть короче запись
// const b = numbers1[1]

// const [a, b, ...c] = numbers1

// console.log(a, b, c)

// по аналогие такаеже ситуация пристствует и для OBJECT

const person = {
    name: 'Max',
    age: 20,
    city: 'Moscow',
    country: 'Rossia'
}
// деструктуризация для объектов через {} скобки

const { name, age, ...adres} = person

console.log('name', name)
console.log('age', age)
console.log('other', adres)


