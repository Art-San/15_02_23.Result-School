// debug c помощью console.log

// let health = prompt('Введите число параметра "здоровье" для персонажа')
// if (health <= 0 || health) {
//    alert('Параметр "здоровье" должен быть больше нуля!')
// } else {
//    alert(`Параметр "здоровье" равен ${health}`);
// } 

// Вставив код в редактор. Обратил внимание что "health!" посдсвечен краснымб. Неработал "prompt", 
// зашел в браузере в раздел "source". в строке с if светился красный крест. Понял что вскобках должно
// быть health < 0, а вот это совсем не кместу "|| health!". Перезагрузил, но красный крести переместился на строку 
// с "else". При сровнение с друго логической конструкцией из предыдущих уроков понял что скобки лишнии.
// Заработал "prompt", после вовода цифры и закрытие окна в разделе "source" крести перескочил к ${Health}. Я исправил
// букву и все заработал. Как применить "console.log" в данном задание я не понял.


// let health = prompt('Введите число параметра "здоровье" для персонажа')
// if (health < 0) { 
//    alert('Параметр "здоровье" должен быть больше нуля!')
// } else {
//    alert(`Параметр "здоровье" равен ${health}`);
// }


// let health = prompt('Введите число параметра "здоровье" для персонажа')
// console.log(typeof health, health)
// if (health < 0) {
//    alert('Параметр "здоровье" должен быть больше нуля!')
// } else {
//    alert(`Параметр "здоровье" равен ${health}`);
// } 






// const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');

// if (temperatureInCelsius === '0') {
//    alert('0 градусов по Цельсию - это температура замерзания воды')
// } else if (temperatureInCelsius > 0) {
//    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
// }

// let temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
// alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по 
// Фаренгейту.`)









// const salaryOfJuniorDeveloper = 500;
// const numberOfJuniorDevelopers = 3;
// let taxPercentage = 13;
// let totalJuniorDevelopersSalary = 0;
// console.log('initial totalJuniorDevelopersSalary', totalJuniorDevelopersSalary)
                
// for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
//    const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
//    totalJuniorDevelopersSalary += salaryWithTax;
// }
// console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);

// let numbers = [10, 4, 100, -5, 54, 2];
// let sum = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//    numbers[i] = numbers[i] ** 3;
//    console.log('numbers', numbers, 'numbers[i]', numbers[i])
//    sum += numbers[i];
// } 

// console.log('первый цикл', sum); // 1158411

// // Через цикл for of
// sum = 0;
// for (let num of numbers){
//    console.log('num', num)
//    console.log('numbers', numbers)
//     num = num ** 3;
//     sum += num;
// } 
// console.log('второй цикл', sum); // 1003904306910622800

let numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

// Через цикл for
// for (let i = 0; i < numbers.length; i += 1) {
    // console.log('numbers[i]', numbers[i]); // 10, 4, 100, -5, 54, 2
    // numbers[i] = numbers[i] ** 3;
    // console.log('numbers[i]', numbers[i]); //  1000, 64, 1000000, -125, 157464, 8.
    // sum += numbers[i] ** 3;
    // sum += numbers[i];                         // сумма чисел 165
// console.log('numbers[i]', numbers[i]);
// } 
// console.log(sum); // 1158411

// Через цикл for of
sum = 0;
for (let num of numbers){
    console.log('num', num);
    num = num ** 3;
    console.log('num ** 3', num);
    sum += num;
} 
console.log(sum); // 1003904306910622800

// let arr = [10, 4, 100, -5, 54, 2];
// let result = 0;

// for (let i = 0; i < arr.length; i += 1) {
// 	result += arr[i];
// }

// console.log(result);