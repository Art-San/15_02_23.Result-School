

// if (confirm('JavaScript появился в 1995 году?') == true) {
//     alert('Верно!');
//   } else {
//     alert('Неверно! JavaScript появился в 1995 году');
//   }
  
//   if (confirm('Спецификация JavaScript называется ECMAScript?') == true) {
//     alert('Верно!');
//   } else {
//     alert('Неверно! Спецификация JavaScript называется ECMAScript');
//   }
  
//   if (confirm('JavaScript был создан за 1 месяц?') == true) {
//     alert('Неверно! JavaScript был создан за 10 дней');
//   } else {
//     alert('Верно! JavaScript был создан за 10 дней');
//   }




// ----------  ниже моя писаннина 



// Метод Window.confirm() 
// отображает диалоговое окно, которое содержит две кнопки (OK и Cancel), 
// а так же опциональное (необязательное) текстовое сообщение.
// возвращает булевое значение  (true означает OK).

let question1 = confirm('JavaScript появился в 1995 году?');
console.log(question1)
if (question1) {
    alert('Верно');
} else {
    alert('Опубликован: сентябрь 1995');
}
console.log(question1)

let question2 = confirm('Спецификация JavaScript называется ECMAScript?');
if (question2) {
    alert('Верно');
} else {
    alert('JavaScript спецификация - ECMAScript')
}

let question3 = confirm('JavaScript был создан за 1 месяц?');
if (question3) {
    alert('JavaScript был создан за 10 дней');
} else {
    alert('верно');
}

// const question4 = confirm('JavaScript появился в 1995 году?');
// if (question4) {
//     alert('Верно');
// } else {
//     alert('Опубликован: сентябрь 1995')
// }

// console.log(question4)
// console.log(question3)







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
















// confirm('Спецификация JavaScript называется ECMAScript?');
// alert('да')
// confirm('JavaScript был создан за 1 месяц?');
// alert('нет')