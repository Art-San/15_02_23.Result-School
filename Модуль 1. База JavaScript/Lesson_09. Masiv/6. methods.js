//   ----------splice----------
//  ВЫРЕЗАЕТ с начала и ДОБАВЛЯЕТ
// изменяет текущий массив

const cars = ['bmw', 'mers', 'lada'];

// cars.splice(0, 2);               // ['lada']

const removedElement = cars.splice(0, 2, 'audi', 'opel'); // удаляет с 0 два элемента и добавляет новые ['audi', 'opel', 'lada']

console.log('removedElement', removedElement)  // выводит удаленные элементы removedElement (2) ['bmw', 'mers']
console.log(cars)

// ------------slice-------------
// обрезает после
// не изменяет текущий массив

const agesOfDevelopers = [25, 18, 45, 30];
// console.log(agesOfDevelopers.slice(0,2));     // [25, 18]
const sliceAgesOfDevelopers = agesOfDevelopers.slice(0,2);
console.log(agesOfDevelopers.slice(0,-1)) //  [25, 18, 45]
console.log('sliceAgesOfDevelopers', sliceAgesOfDevelopers);    //  sliceAgesOfDevelopers (2) [25, 18]
console.log('agesOfDevelopers', agesOfDevelopers)  // не изменяет массив agesOfDevelopers (4) [25, 18, 45, 30]


//   --------------indexOf-----------
// ПРОВЕРЯЕТ НА НАЛИЧИЕ и выводит (1- это index) или -1

// const favoriteFood = ['мороженное', 'торт', 'кофе'];
// // const indexOfFood = favoriteFood.indexOf('торт');        // indexOfFood 1 --- Это индекс
// const indexOfFood = favoriteFood.indexOf('1234');         //  indexOfFood -1

// console.log('indexOfFood', indexOfFood)

// // ---------------includes----------
// // ПРОВЕРЯЕТ НА НАЛИЧИЕ и выводит true или false

const technolgies = ['javascript', 'HTML', 'CSS'];
// console.log('technolgies CSS', technolgies.includes('CSS'));    // technolgies CSS true
// console.log('technolgies c++', technolgies.includes('c++'));    // technolgies c++ false

// const isTechnolgies = technolgies.includes('HTML');
// console.log('istechnolgies', isTechnolgies);                   // istechnolgies true

//  ------------ split + join--------------
const listOfOrders = 'майка, трусы, носки';
const listOfOrdersArray = listOfOrders.split(', ');
console.log('listOfOrdersArray', listOfOrdersArray);        // получим такой масив ['майка', 'трусы', 'носки']

const ordersString = listOfOrdersArray.join('; ');
console.log('ordersString', ordersString);                  // ordersString майка; трусы; носки

// -----------  reverse()
technolgies.reverse();
console.log('technolgies', technolgies);                 //    technolgies (3) ['CSS', 'HTML', 'javascript']


//                     match()
// Метод match()извлекает результат сопоставления строки с регулярным выражением .
const text1 = "The sunset sets at twelve o' clock."
console.log(text1.match(/[a-z]/gi))  // ['T', 'h', 'e', 's', 'u', 'n', 's', 'e', 't', 's', 'e', 't', 's', 'a', 't', 't', 'w', 'e', 'l', 'v', 'e', 'o', 'c', 'l', 'o', 'c', 'k']


