

// ---------    Function Dectaration   --------

// function name(...param) {}


// sayHello(); 

// function sayHello() {
//     console.log(`hello world`);
// }
// sayHello(); 



// function sum(a, b) {
//     console.log(a + b); // не указанны параметры получим NaN. так как undefined + undefined - это NaN
// }
// sum();

// function sum(a, b) {
//     console.log(a + b);
// }
// sum(6, 5);

// // function sum(a = 5, b = 6) {
// //     console.log(a + b);
// // }
// // sum();

// function sum(a, b = 6) {
//     console.log(a + b);
// }
// sum(6);

//        передаем функцию как параметр

// function sum(a, b, callback) {
//     const result = a + b;
//     callback(result);
// }

// function displayer(res) {
//     console.log('Результат', res);
// }
// sum(4, 10, displayer);

//       ПЕРЕДАЕМ ФУНКЦИЮ в функцию как параметр

// function sum(a, b, callback) {           // Колбэк-функция (или обратный вызов) - это функция, 
//     const result = a + b;               // переданная в другую функцию в качестве аргумента, 
//     callback(result);                   //которая затем вызывается по завершению какого-либо действия.
// }

// function displayer(res) {
//     console.log('Результат', res)
// }

// sum(3, 10, displayer);



//  -------------   АНОНИМНАЯ -------------
//  Тоже самое что и выше только без названия, а работает также.

// function sum(a, b, callback) {     
//     const result = a + b;             
//     callback(result);     
// }

// sum(10, 10, function(res) {
//     console.log('Результат', res)
// });




// -Так же в качестве колбека може
//  передовать любу функцию, втом числе существующию
// ------------ например: ALERT ------------

// function sum(a, b, callback) {     
//     const result = a + b;             
//     callback(result);     
// }

// sum(3, 10, alert);



// ------------    return   ------------

function sum(a,b) {
    // console.log('hello world 1');

    return a + b;

    console.log('hello world 1'); // не выведится в консол так как стоит после ретурна
}

const result = sum(10, 20);
console.log ('result', result);

//        чтоб вынести результат функции sum
//        можем и не создовать переменную result


// console.log(sum(2, 3));

