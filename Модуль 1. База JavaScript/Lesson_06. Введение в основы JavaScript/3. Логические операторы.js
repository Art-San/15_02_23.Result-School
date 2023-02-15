// && (и)
// || (или)
// !  (не)
// ?? объединения с null


// && (и)
// const userAge = 20;
// if(userAge > 5 && userAge <= 18) {
//     console.log('Пользовател ходит в школу');
// } else {
//     console.log('скорее всего уже не ходит в школу');
// }

// const programmingLanguage = 'JavaScript';
// const experienceInYear = 5;

// if (programmingLanguage === 'JavaScript' && experienceInYear >= 5) {
//     console.log('Добро пожаловать')
// }

// // || (или)

// const currentHours = 10;
// if (currentHours < 8 || currentHours > 20) {
//     console.log('Наш офис закры');
// } else {
//     console.log('Добро пожаловать в офис');
// }

// const userNickname = null; 
// const defaltNickname = 'vasya';
// const nickname = userNickname || defaltNickname || 'noname'; // если false то выполнение идет дальше

// const finaNickname = userNickname && 'Пользователь существует'; // если "true" то выполнение идет дальшь

// console.log('nickname', nickname);
// console.log('finaNickname', finaNickname);

// ! (не)

// const hasAccess = false; // Доступ закрыт
// console.log('!hasAccess', !hasAccess)
// if (!hasAccess) {
//     console.log('Доступ закрыт');
// } else {
//     console.log('Доступ открыт');
// }

// const answer = prompt('Сколько вам Лет?');
// !''
// if (!answer) {
//     alert('Введите ваше полное количество летю');
// } else {
//     alert(`Вам ${answer} лет`);
// }

// Оператор объединения с null

// false, 0, '', NaN, undefined, null
console.log(NaN || 'hello world');

// null, undefined
console.log(NaN ?? 'hello world');