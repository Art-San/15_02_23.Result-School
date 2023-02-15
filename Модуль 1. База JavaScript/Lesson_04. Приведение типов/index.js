// JavaScript имеет динамическу типизацию

// ---------------     1. к строке  -------------
// Явное преобразование (РЕКОМЕНДУЕТСЯ ИСПоЛЬЗОВАТЬ)
const age = 42;
const ageString = String(age);
console.log('number ageString:', typeof ageString);
// console.log('string age', typeof String(age));

const ageString1 = age.toString()

// Не явное преобразование
const updatedAge = '2' + 40;
console.log('updatedAge', typeof updatedAge);

// -------------  2. к Числу  -------------
// Яввное прееобразованиее
const experienceInJavaScript = '5';
console.log('string experienceInJavaScript', typeof experienceInJavaScript);
console.log('number experienceInJavaScript', typeof Number(experienceInJavaScript));
// Не явное
console.log('experienceInJavaScript',  typeof +experienceInJavaScript)

//   не все значения можно преобразовать к типу данных число
const text = 'привет мир';
const textNumber = Number(text);
console.log('textNumber', textNumber) // Вывелось в кконсоль Nan- not a number


// 2. Boolian

console.log('Hello', Boolean('Hello')) // Передает true
console.log('5', Boolean(5))  // Передает true

// Передают falce - null, undefined, NaN, 0,'' пустая строка
console.log('null', Boolean(null));
console.log('undefined', Boolean(undefined));
console.log('NaN', Boolean(NaN));
console.log('0', Boolean(0));         // falce так как длинна строчки равна 0
console.log('0', Boolean('0'));       // true так как длинна строчки равна 1
console.log('Пустая строка', Boolean(''));

