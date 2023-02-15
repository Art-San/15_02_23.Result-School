// Логические конструкции (-- if -- if else -- switch case -- ? : --)



// if - если 'true' то выполняется первый код,
// если 'false' то переходит к "else"- иначе.


// ----- if (если)=true, else (иначе)=false ----- else if (иначе-если) 

const isFrontendDeveloper = false;
if (isFrontendDeveloper) {
    console.log('Вы Front-End разработчик. Добро пожаловать');
} else {
    console.log('Вы не разработчик')
}

// const closingTime = 8;
// const currentTime = 7;

// if (currentTime > closingTime) {
//     console.log ('Магазин закрыт');
// } else {
//     console.log('Ма открыты приходите за покупками');
// }


// const developerJobType = 'Front-end';

// if (developerJobType === 'Front-end') {
//     console.log('2000');
// } else if (developerJobType === 'Back-End') {
//     console.log('1500');
// } else if (developerJobType === 'Full-Stack') {
//     console.log('3500'); 
// } else {
//     console.log('Зарплата не оределена')
// }




// --------------   switch case 
//      ЗАМЕНА ДЛЯ (else if)

//  break прерывает выполнение текущего цикла

// const developerJobType = 'Full-Stack';
// switch (developerJobType) {
//     case 'Front-end':
//         console.log('2000');
//         break;
//     case 'Back-End':
//         console.log('1500');
//         break;
//     case 'Full-Stack':
//         console.log('3500');
//         break;
//     default:
//         console.log('Зарплата не оределена'); 
// }

// //-----ОПЕРАТО "? :" ЗАМЕНА ДЛЯ "if else"

// const favoriteDrink = 'Коф'
// let message = '';
// if (favoriteDrink === 'Кофе') {
//     message = 'Ваш любимый напиток - это кофе';
// } else {
//     message = 'Вы скорее всего любите чай';
// }
// console.log('message', message)

//-------------------------------------------

const favoriteDrink = 'cOffee';
const favoriteDrink1 = favoriteDrink.toLowerCase();
const message = favoriteDrink1 === 'кофе' || favoriteDrink1 === 'coffee'
    ? 'Ваш любимый напиток - это кофе' 
    : 'Вы скорее всего любите чай';

console.log('message', message)  


// favoriteDrink1 === 'кофе' (? -значит выводим 'Ваш любимый напиток - это кофе' ) ( : иначе выводим 'Вы скорее всего любите чай')