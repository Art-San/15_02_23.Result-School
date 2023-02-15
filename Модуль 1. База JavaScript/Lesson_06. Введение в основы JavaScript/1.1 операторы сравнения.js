// Операторы сравнения 
// console.log(5 > 10);  // false
// console.log(5 < 10);  // true
// console.log(5 <= 5);  // true
// console.log(5 >= 10); // folse

// console.log('==', 100 == 100); // true

// Сравнение строк 
// -----  ОБРАТИ ВНИМАНИЕ ЧТО 'S' в слове JavaScript разные
// console.log('JavaScript' == 'Javascript'); // falce

// console.log('S', 'S'.charCodeAt());  // S 83 код сивола 
// console.log('s', 's'.charCodeAt()); // s 115 разные поэтому false выше

// console.log('JavaScript' < 'Javascript');  // true так как 83 меньше 115
// console.log('JavaScript' > 'Javascript');  // false так как 83 не больше 115

// console.log('javaScript' > 'Javascript'); // true - так как у маленькой дже код символа больше
// console.log('J', 'J'.charCodeAt()); // 74
// console.log('j', 'j'.charCodeAt()); // 106


//                  == vs ===

//           == сравнивае значения --- так же включает в себя преобразование типов данных


// console.log('1' == 1); // true - так как единица строчка будет преобразовваны Number
//  под капотм будет 1 == 1

// console.log('1' >= 1); // такаеже петрушка ка и выше

// console.log('20' > '20'); // true - будут сравниватся коды символо
// console.log('200' > '21'); // false - так как код символа "1" больше кода "0". НИЖЕ ДАННЫЕ

// console.log('0'.charCodeAt()); // 48
// console.log('1'.charCodeAt()); // 49

// console.log(true == 1); // true - так как ПРЕОБРАЗОВАНИЕ true к Number выводит "1" единицу.
// console.log(false == 0); // true так как Number(false) выводит "0" ноль.


//               === сравнивает типы

// console.log('1' === 1); // false -- так как "1"-это строка, а 1- это число разные типы данных
// console.log(1 === 1);   // true
// console.log(false === 0); // false
