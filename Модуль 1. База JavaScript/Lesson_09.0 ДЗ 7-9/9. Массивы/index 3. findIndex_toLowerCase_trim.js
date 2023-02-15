//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'кофейне у Алексея'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================

//                ПРАВИЛЬНОЕ РЕШЕНИЕ
//=======================================================================
const coffees = ["Latte", "Cappuccino", "Americano"];

let favoriteCoffeeName = prompt("Поиск кофе по названию:");
favoriteCoffeeName = favoriteCoffeeName?.trim().toLowerCase();

const favoriteCoffeeIndex = coffees.findIndex(
  (coffee) => coffee.toLowerCase() === favoriteCoffeeName
);
const favoriteCoffee = coffees[favoriteCoffeeIndex];
if (favoriteCoffee) {
  alert(
    `Держите ваш любимый кофе ${favoriteCoffee}. Он ${
      favoriteCoffeeIndex + 1
    }-й по популярности в нашей кофейне.`
  );
} else {
  alert("К сожалению, такого вида кофе нет в наличии");
}


// //              Моё решение
// // =======================================================================
// const coffees = ["Latte", "Cappuccino", "Americano"];
// let coffeeName = prompt('Поиск кофе по названию:')
// coffeeName = coffeeName.trim().toLowerCase()


// const Index = coffees.findIndex((salary) => {
//     return salary.toLowerCase() === coffeeName;                                             
// })

// const message1 = `Держите ваш любимый кофе ${coffees[Index]}. Он ${Index + 1}-й по популярности в нашей кофейне.`
// const message2 = `К сожалению, такого вида кофе нет в наличии`
// if (Index === -1) {
//     alert(message2)
// } else {alert(message1)}

// // if (Index === -1) {
// //     alert(message2)
// // } else {alert(message1)}




console.log('coffeeName', coffeeName)
console.log('searchedIndex', Index);





