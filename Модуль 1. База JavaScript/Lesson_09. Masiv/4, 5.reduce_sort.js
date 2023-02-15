
//   --------------reduce---------------
//  Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо),
//  возвращая одно результирующее значение.
//                                        
//  salariesOfDeveloper.filter((salary, index, array) => {}

const numbers = [1, 2, 3, 4, 5]
const suma = numbers.reduce((a, i) => a + i, 0)


const salariesOfDeveloper = [400, 2000, 500, 600,350];

const sum = salariesOfDeveloper.reduce((acc, salary, index, array) => {
    console.log('acc/salary', acc, salary);
    return acc + salary;
}, 0)
console.log('sum', sum)                                 // сумма элементов массива


// --------------sort---------
//  Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.
//   Сортировка не обязательно устойчива (англ.). 
//  Порядок сортировки по умолчанию соответствует порядку кодовых точек Unicode.

// const salariesOfDeveloper = [400, 2000, 500, 600,350];  

// salariesOfDeveloper.sort();                              // выведет вот так [2000, 350, 400, 500, 600] потому что 
// console.log('salariesOfDeveloper', salariesOfDeveloper)  // как строки, не как циыры

// salariesOfDeveloper.sort((a, b) => {
//     // return a - b;                                       // сортировка по возрастанию [350, 400, 500, 600, 2000]
//     return b - a;                                          // сортировка по убыванию [2000, 600, 500, 400, 350]
// });
// console.log('salariesOfDeveloper', salariesOfDeveloper)


function findShort(s){
  return s.split(' ').sort((a,b) => a.length - b.length)[0].length; 
}                                                                   // выведет 2 так как самое короткое состоит йз двух букв

console.log(findShort("Let's travel abroad shall we"), 2);



const names  = ['maks', 'lena', 'ira', 'igor'];

// names.sort();
// console.log('names', names);                         // ['igor', 'ira', 'lena', 'maks'] у I цифра меньше чем M


names.sort((a, b) => {
   if (a < b) {                                       // если знаки '1->' '2-<' то  ['igor', 'ira', 'lena', 'maks']
       return 1;
   } 
   if (a > b) {                                       // если знаки '1-<' '2->' то  ['maks', 'lena', 'ira', 'igor']
       return -1;
   } 
   return 0;   
});
console.log('names', names)


// const goals = [8, 1, 1, 3, 2, -1, 5];
const ascendingOrderGoals2 = goals.sort((a, b) => a - b)      //  [-1, 1, 1, 2, 3, 5, 8]
// const ascendingOrderGoals = [...goals].sort((a, b) => b - a);  // [8, 5, 3, 2, 1, 1, -1]














