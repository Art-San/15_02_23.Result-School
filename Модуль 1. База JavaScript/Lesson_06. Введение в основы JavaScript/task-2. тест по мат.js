const question1 = 'Сколько будет 2 + 2?';
const question2 = 'Сколько будет 2 * 2?';
const question3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?';
const question4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?';
const question5 = 'Сколько будет 2 + 2 * 2?';

const answer1 = 4;
const answer2 = 4;
const answer3 = 1;
const answer4 = 12;
const answer5 = 6;

let correctAnswers = 0;
let incorrectAnswers = 0;

const userAnswer1 = prompt(question1);
if (Number(userAnswer1) === answer1) {
    alert('Ответ Верный');
    correctAnswers += 1;
} else {
    alert('Ответ Неверный');
    incorrectAnswers += 1;
}

const userAnswer2 = prompt(question2);
if (Number(userAnswer2) === answer2) {
    alert('Ответ Верный');
    correctAnswers += 1;
} else {
    alert('Ответ Неверный');
    incorrectAnswers += 1;
}

const userAnswer3 = prompt(question3);
if (Number(userAnswer3) === answer3) {
    alert('Ответ Верный');
    correctAnswers += 1;
} else {
    alert('Ответ Неверный');
    incorrectAnswers += 1;
}

const userAnswer4 = prompt(question4);
if (Number(userAnswer4) === answer4) {
    alert('Ответ Верный');
    correctAnswers += 1;
} else {
    alert('Ответ Неверный');
    incorrectAnswers += 1;
}

const userAnswer5 = prompt(question5);
if (Number(userAnswer5) === answer5) {
    alert('Ответ Верный');
    correctAnswers += 1;
} else {
    alert('Ответ Неверный');
    incorrectAnswers += 1;
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);







// ------------- мою решение --------------------



// let correctAnswers = 0;
// let incorrectAnswers = 0;

// const answerToQuestion1 = 4;
// let question1 = prompt('Сколько будет 2 + 2?');
// question1 = Number(question1);

// if (answerToQuestion1 === question1) {
//     alert('Ответ Верный');
//     correctAnswers += 1;
// } else {
//     alert('Ответ Не верный');
//     incorrectAnswers += 1;
// }
 
// const answerToQuestion2 = 4;
// let question2 = prompt('Сколько будет 2 * 2?');
// question2 = Number(question2);

// if (answerToQuestion2 === question2) {
//     alert('Ответ Верный');
//     correctAnswers += 1;
// } else {
//     alert('Ответ Не верный')
//     incorrectAnswers += 1;
// }

// const answerToQuestion3 = 1;
// let question3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?');
// question3 = Number(question3);

// if (answerToQuestion3 === question3) {
//     alert('Ответ Верный');
//     correctAnswers += 1;
// } else {
//     alert('Ответ Не верный')
//     incorrectAnswers += 1;
// }

// const answerToQuestion4 = 12;
// let question4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?');
// question4 = Number(question4);

// if (answerToQuestion4 === question4) {
//     alert('Ответ Верный');
//     correctAnswers += 1;
// } else {
//     alert('Ответ Не верный')
//     incorrectAnswers += 1;
// }

// const answerToQuestion5 = 6;
// let question5 = prompt('Сколько будет 2 + 2 * 2?');
// question5 = Number(question5);

// if (answerToQuestion5 === question5) {
//     alert('Ответ Верный');
//     correctAnswers += 1;
// } else {
//     alert('Ответ Не верный')
//     incorrectAnswers += 1;
// }
// alert(`Конец теста! Правильные ответы - ${correctAnswers}, Неправильные ответы - ${incorrectAnswers}`)


// console.log('правильно', correctAnswers)
// console.log('неправильно', incorrectAnswers)



// correctAnswers += 1;

// incorrectAnswers += 1;

// console.log(question1, typeof question1)
// console.log(question2, typeof question2)

// const answerYes = alert('Ответ Верный')
// const answerNo = alert('Ответ Не верный')