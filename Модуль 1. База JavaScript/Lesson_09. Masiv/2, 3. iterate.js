const names  = ['maks', 'lena', 'ira', 'igor'];

//            ---------for----------

// for(начальное значение, условие, шаг) {

// }
// console.log(names[2]); // выведет ira так как индекс 2

// for (let i = 1; i < names.length; i += 1) {
//     // console.log('i', i);               // 0 1 2 3
//     console.log('item', names[i])      // item -'maks', item -'lena', item -'ira', item -'igor'
// }

//          -----------for of--------

for (const name of names) {
    console.log('name', name)
}

// 
// Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
//
//         ---------forEach------ Метод forEach() выполняет функцию по одному разу
//                               для каждого элемента из Set в порядке их расположения.

// names.forEach(function() {}); // тоже работае но лучше использовать стрелочную.


// names.forEach((name, index, array) => {
//     console.log('name', name)
//     console.log('name', index)
//     console.log('name', array)
// });

//       ---------- MAP--------- создаёт новый массив с результатом вызова 
// ------------------------     указанной функции для каждого элемента массива.

const salariesOfDeveloper = [400, 2000, 500, 600,350];

const updatedSalaries = salariesOfDeveloper.map((salary, index, array) => {
    return salary * 2;                                                         //[800, 1000, 1200, 4000, 700]
});
// console.log('updatedSalaries', updatedSalaries)

        //   ------------filter---------- возвращает новый
const filterSalaries = salariesOfDeveloper.filter((salary, index, array) => {
    return salary > 500;                                                       // [600, 2000]   
    // return index % 2 === 0;                                                     // [400, 500, 350]
    return salary % 2;                                                         // [9]
    
})
console.log('filterSalaries', filterSalaries);


// //    -----------------find----------------
// Метод find() возвращает значение первого найденного 
// в массиве элемента, которое удовлетворяет условию 
// переданному в callback функции. 
// В противном случае возвращается undefined

// const searchedSalary = salariesOfDeveloper.find((salary) => {
//     // return salary === 600;                                            // покажет  600
//     return salary > 600;                                                 // покажет первое значение что больше 600
// });
// console.log('searchedSalary', searchedSalary);

// //    --------------findIndex-----------
// Метод findIndex() возвращает индекс в массиве, если элемент
//  удовлетворяет условию проверяющей функции. В противном случае возвращается -1.

// const searchedIndex = salariesOfDeveloper.findIndex((salary) => {
//     return salary === 400;                                              // вернет 0 так как у 400 индекс 0
// })
// console.log('searchedIndex', searchedIndex);



// //   ------------SOME, EVERY--------------- 

//---------------  SOME ----------
// Метод some() проверяет, удовлетворяет ли 
// какой-либо элемент массива условию, заданному в передаваемой функции

// const elementExists = salariesOfDeveloper.some((salary) => {
//     // return salary === 400;                                           // вернет true так как есть в массив 400 
//     return salary < 50;                                                  // вернет false так как нет меньше 50                                     
// })
// console.log('elementExists', elementExists);

// ---------------  EVERY
// Метод every() проверяет, удовлетворяют ли все элементы массива условию,
//  заданному в передаваемой функции.

// const allElementExists = salariesOfDeveloper.every((salary) => {
//     return salary > 370;                                           // вернет false так как все элемент должны быть больше 370 
//     // return salary > 0;                                                  // вернет true так как каждый элемент больше 0                                     
// })
// console.log('allElementExists', allElementExists);


