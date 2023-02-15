//                     match()
// Метод match()извлекает результат сопоставления строки с регулярным выражением .
const text1 = "The sunset sets at twelve o' clock."
console.log(text1.match(/[a-z]/gi))  // ['T', 'h', 'e', 's', 'u', 'n', 's', 'e', 't', 's', 'e', 't', 's', 'a', 't', 't', 'w', 'e', 'l', 'v', 'e', 'o', 'c', 'l', 'o', 'c', 'k']



//----------   split()
// Метод split() разбивает объект String на массив строк 
// путём разделения строки указанной подстрокой.

//  ------------ split + join--------------
const listOfOrders = 'майка, трусы, носки';
const listOfOrdersArray = listOfOrders.split(', ');
console.log('listOfOrdersArray', listOfOrdersArray);        // получим такой масив ['майка', 'трусы', 'носки']

const ordersString = listOfOrdersArray.join('; ');
console.log('ordersString', ordersString);                  // ordersString майка; трусы; носки


// ----------   join()
// Метод join() объединяет все элементы массива 
// (или массивоподобного объекта) в строку

// Интерактивный пример
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

match(/[a-z]/gi)