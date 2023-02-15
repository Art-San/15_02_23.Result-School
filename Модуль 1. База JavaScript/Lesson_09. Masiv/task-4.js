//  ---------------ВАРИАНТ ОТ ВЛАДИЛЕНА------------------
// const coffees = ['Latte', 'Cappuccino', 'Americano', 'Якобс'];
// const prices = [1.5, 1, 2, 3];

// const updatedPrices = prices.map((price) => price + 0.5);

// coffees.forEach((coffeeName, index) => {
//     alert(`Кофе ${coffeeName} сейчас стоит ${updatedPrices[index]} евро.`);
// });


// /* ----МОЙ ВАРИАНТ РЕШЕНИЯ-----
const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];
let coffeeName = prompt('Поиск кофе по названию:');
coffeeName = coffeeName.trim();

coffeeName = coffeeName[0].toUpperCase() + coffeeName.slice(1).toLocaleLowerCase();

const updatedPrices = prices.map((price) => price + 0.5);

if (coffeeName === 'Latte') {
    alert(`Кофе ${coffeeName} сейчас стоит ${updatedPrices[0]} евро`);
} else if (coffeeName === 'Cappuccino') {
    alert(`Кофе ${coffeeName} сейчас стоит ${updatedPrices[1]} евро`);
} else if (coffeeName === 'Americano') {
    alert(`Кофе ${coffeeName} сейчас стоит ${updatedPrices[2]} евро`);
} else {
    alert(`С названием ${coffeeName} кофе нет`)
}







// updatedPrices.forEach((num, index, array) => {
    // console.log('updatedPricesnum', num)
    // console.log('name', index)
    // console.log('name', array)
// });




// // const developerJobType = 'Front-en';

// if (developerJobType === 'Front-end') {
//     console.log('2000');
// } else if (developerJobType === 'Back-End') {
//     console.log('1500');
// } else if (developerJobType === 'Full-Stack') {
//     console.log('3500'); 
// } else {
//     console.log('Зарплата не оределена')
// }








//         ---------forEach--------
// const names  = ['maks', 'lena', 'ira', 'igor'];
// // names.forEach(function() {}); // тоже работае но лучше использовать стрелочную.


// names.forEach((name, index, array) => {
//     console.log('name', name)
//     // console.log('name', index)
//     // console.log('name', array)
// });



//       ---------- MAP---------
// const salariesOfDeveloper = [400, 2000, 500, 600,350];

// const updatedSalaries = salariesOfDeveloper.map((salary, index, array) => {
//     return salary * 2;                                                         //[800, 1000, 1200, 4000, 700]
// });
// console.log('updatedSalaries', updatedSalaries)