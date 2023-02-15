const existingUserLogin = 'the_best_user';
const existingUserPassword = '12345678';

let userLogin = prompt('Введите логин');
let userPassword = prompt('Введите пароль');
userLogin = userLogin.trim();
userPassword = userPassword.trim();

if (existingUserLogin === userLogin && existingUserPassword === userPassword) {
    alert(`Добро пожаловать, ${userLogin}!`);
} else {
    alert('Логин и (или) Пароль введены неверно!');
}

// -------------- мое решение

// const existingUserLogin = 'Aleksander';
// let userLogin = prompt('введите логин');
// userLogin = userLogin.trim();
// const existingUserPassword = 123;
// let userPassword = prompt('Введите пвроль');
// userPassword = Number(userPassword);
// // userPassword = userPassword.trim(); ставлю пробелы всеравно работает без trim (а)

// if (existingUserLogin === userLogin && existingUserPassword === userPassword) {
//     alert(`Добро пожаловать, ${userLogin}`);
// } else {
//     alert('Логин и (или) Пароль введены неверно!')
// }
              




// console.log(typeof userPassword, userPassword)


// const developerJobType = 'Front-en';

// if (developerJobType === 'Front-end') {
//     console.log('2000');
// } else if (developerJobType === 'Back-End') {
//     console.log('1500');
// } else if (developerJobType === 'Full-Stack') {
//     console.log('3500'); 
// } else {
//     console.log('Зарплата не оределена')
// }