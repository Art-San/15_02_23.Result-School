const name1= 'maksim';
const name2 = "igor";
const name3 = `len`;

console.log(name1, name2, name3);


//----------------- Конкатенация --------

const name = 'Maksim';
const profesion = 'JavaScript-razrabotchik';

// const allInfo = name + ' ' + profesion; 
// const allInfo = `${name} ${profesion}`;

let allInfo = name + ' ';
// allInfo = allInfo + profesion; // фналог следующие строки
allInfo += profesion;


console.log(allInfo);


// length - Длинна строки

const programingLanguage ='JavaScript 123';
console.log('length', programingLanguage.length);

// получение символов из сстроки

console.log('1st', programingLanguage[0])

//             charAt()
// Метод charAt() возвращает указанный символ из строки.
// Синтаксис
const str = 'grep'
console.log(str.charAt(0)) // g

//             charCodeAt()
// Метод charCodeAt()возвращает целое число между 0и 65535, 
// представляющее кодовую единицу UTF-16 по заданному индексу.
str.charCodeAt(0)  // 103

//             String.fromCharCode()
// Статический String.fromCharCode()метод возвращает строку, 
// созданную из указанной последовательности кодовых единиц UTF-16.
String.fromCharCode(65, 66, 67);   // returns "ABC"
String.fromCharCode(0x2014);       // returns "—"
String.fromCharCode(0x12014);      // also returns "—"; the digit 1 is



programingLanguage[5] = 'k' // Таким споссобом не получится заменить симввол в строке