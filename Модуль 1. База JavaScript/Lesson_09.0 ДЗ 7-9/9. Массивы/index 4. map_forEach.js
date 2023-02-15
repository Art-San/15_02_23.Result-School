//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'кофейне у Алексея'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================
const coffees = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map((price) => price + 0.5);

coffees.forEach((coffeeName, index) => {
  alert(`Кофе ${coffeeName} сейчас стоит ${updatedPrices[index]} евро.`);
});






//   моё решение
//===================================================================
// const coffees = ["Latte", "Cappuccino", "Americano"];
// const prices = [1.5, 1, 2];

// const updatedPrices = prices.map((pric) => {
//     return pric + 0.5
// })

// coffees.forEach(function(cofe, index, array) {
//     alert(`Кофе ${cofe} сейчас стоит ${updatedPrices[index]} евро`)
    
// })
// console.log("updatedPrices", updatedPrices)






// const updatedSalaries = salariesOfDeveloper.map((salary, index, array) => {
//     return salary * 2;                                                         //[800, 1000, 1200, 4000, 700]
// });
