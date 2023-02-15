const coffees = ['Latte', 'Cappuccino', 'Americano'];
// console.log('typof coffees', typeof coffees);
let coffeeName = prompt('Поиск кофе по названию:');
coffeeName = coffeeName.trim();
// console.log('coffeeName', coffeeName);

coffeeName = coffeeName[0].toUpperCase() + coffeeName.slice(1).toLocaleLowerCase();
console.log('coffeeName 2', coffeeName);

const coffees1 = coffees.findIndex((a) => {
    return a === coffeeName;
})
console.log('coffees1', coffees1);


if (coffees1 === -1) {
    alert(`К сожалению, такого вида кофе нет в наличии`);
} else {
console.log("coffeeName", coffeeName);
    alert(`Держите ваш любимый кофе ${coffeeName}. Он ${coffees1 + 1}-й по популярности в нашей кофейне`);
}



// const searchName = coffeeName[0].toUpperCase()+coffeeName.slice(1).toLowerCase(); -  С КАКИМ БЫ
// РЕГИСТРОМ НЕ ПИСАЛИ КОФЕ ПРИВОДИТ К НУЖНОМУ


// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// // console.log('typof coffees', typeof coffees);
// let coffeeName = prompt('Поиск кофе по названию:');

// coffeeName = coffeeName.trim();
// // console.log('coffeeName', coffeeName);

// let searchName = coffeeName[0].toUpperCase()+coffeeName.slice(1).toLowerCase();
// console.log('searchName', searchName);




// const coffees1 = coffees.findIndex((a) => {
//     return a === searchName;
// })
// console.log('coffees1', coffees1);


// if (coffees1 === -1) {
//     alert(`К сожалению, такого вида кофе нет в наличии`);
// } else {
// console.log("coffeeName", coffeeName);
//     alert(`Держите ваш любимый кофе ${searchName}. Он ${coffees1 + 1}-й по популярности в нашей кофейне`);
// }