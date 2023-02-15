// ============  toUpperCase TER
// ------------  toLowerCase ter

const animal = 'Lion';
const animal2 = animal.toUpperCase();
console.log('upper', animal.toUpperCase());
console.log('Lower', animal.toLowerCase());
console.log('animal2 UP', animal2);

console.log('animal', animal);

//---------------  indexOf and   Найти символы. 

// ---------------------------- indexOf
// Метод indexOf() возвращает индекс первого вхождения указанного значения в строковый объект String,
// на котором он был вызван, начиная с индекса fromIndex. Возвращает -1, если значение не найдено.

// -----------------------------  includes
// Метод includes() проверяет, содержит ли строка заданную подстроку, и возвращает,
//  соответственно true или false.

const text = 'Мойs любимый метод програмированния Java Script';
console.log('indexOf', text.indexOf('Java'));                   //  indexOf 36 индекс буквы J
console.log('includes', text.includes('Java'));                 //  includes true  

// ==============  slice. substrring. -----------  Обрезка строки 
// Метод slice() извлекает часть строки и возвращает новую строку 
// без изменения оригинальной строки.

// const programingLanguage = 'JavaScript';
// console.log('slice', programingLanguage.slice(1, 5));             // slice avaS

// Метод substring() возвращает подстроку строки между двумя индексами, 
// или от одного индекса и до конца строки.
// console.log('substring', programingLanguage.substring(1, 5));


// ====================  replace and repleceAll ---------- Замена символов в строке.

const programingLanguage = 'JavaScript';
console.log('replace', programingLanguage.replace('Script', '1234'));  // replace Java1234
console.log('replaceAll', programingLanguage.replaceAll('a', 'A'));    //  replaceAll JAvAScript

const str1 = "This website is for losers LOL!"
console.log(str1.replace(/[aeiou]/gi, ''))     // "Ths wbst s fr lsrs LL!"

//  =============== repeat ------------ повторить строчку несколько раз
const helloText = 'Hello';
console.log(helloText.repeat(3));                                      // HelloHelloHello  

// =============== trim --------------- убирает пробелы
// const nameOfUser = prompt('Как вас зовут?');
// console.log('nameOfUser', nameOfUser.trim())

// --------------   split
// Метод split() разбивает объект String
// на массив строк путём разделения строки указанной подстрокой.


let str = "Let's travel abroad shall we";
console.log(str.split(' '));                //  ["Let's", 'travel', 'abroad', 'shall', 'we']


// Проверка пароля на наличие нужных символов. Полный код в Доп заданиях
// ========================================================================================
const password = "1g5fg56hngg"

for (let i = 0; i < password.length; i += 1) {
  const symbol = password[i]         
  console.log("symbol", symbol)                  // symbol 1, symbol g, symbol 5, symbol f, symbol g и тд
  const isNumberSymbol = isNaN(parseInt(symbol));
  console.log("isNumberSymbol", isNumberSymbol) // isNumberSymbol false, isNumberSymbol true, isNumberSymbol false, isNumberSymbol true и тд
}

// Функция parseInt() принимает строку в качестве аргумента и возвращает 
// целое число в соответствии с указанным основанием системы счисления.


// Функция isNaN() определяет является ли литерал или переменная 
// нечисловым значением (NaN) или нет.

// Нижний регистор
// =============================================================================================

// toLowerCase()
// JavaScript метод toLowerCase() позволяет преобразовать строку 
// в строчные буквы (нижний регистр).
// Синтаксис
// str.toLowerCase()
// ==================================================================================================

// toUpperCase()

// Метод toUpperCase() возвращает значение строки, на которой он был вызван, 
// преобразованное в верхний регистр.
// Синтаксии 
// str.toUpperCase()


//  endsWith()
//====================================================================================================
// Метод endsWith()определяет, заканчивается ли строка символами указанной строки, 
// возвратом trueили falseсоответствующим образом.
const strc = 'To be, or not to be, that is the question.';

console.log(strc.endsWith('question.')); // true
console.log(strc.endsWith('to be')); // false
console.log(strc.endsWith('to be', 19)); // true

//   match()
//=============================================================================================
str.match(regexp)

var str2 = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯабвгдеёжзийклмнопрстуфхцчшщьыъэюя';
var regexp = /[А-Д]/gi;
var matches_array = str2.match(regexp);

console.log(matches_array);
// ['А', 'Б', 'В', 'Г', 'Д', 'а', 'б', 'в', 'г', 'д']