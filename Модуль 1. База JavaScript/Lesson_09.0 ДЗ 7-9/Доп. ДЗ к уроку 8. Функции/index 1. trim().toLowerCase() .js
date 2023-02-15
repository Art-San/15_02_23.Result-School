//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'Часто функции нужны для того'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================

const checkQuestionAnswer = (question, correctAnswer) => {
  let userAnswer = prompt(question);
  userAnswer = userAnswer.trim().toLowerCase();
  if (correctAnswer.toLowerCase() === userAnswer) {
    alert("Ответ Верный");
  } else {
    alert("Ответ Неверный");
  }
};

checkQuestionAnswer("Арбуз это фрукт или ягода?", "Ягода");
checkQuestionAnswer("Сколько в среднем зубов у взрослого человека?", "32");
checkQuestionAnswer("Как называется самая маленькая птица в мире?", "Колибри");




//        моё решение
// ====================================================================
// function checkQuestionAnswer(question, correctAnswer) {
//   let answer = prompt(question)
//   answer = answer.trim().toLowerCase();
//   if (answer === correctAnswer.toLowerCase()) {
//     alert("Ответ верный")
//   } else {alert("Ответ неверный")}
// }


// // checkQuestionAnswer("Арбуз это фрукт или ягода?", "Ягода");
// // checkQuestionAnswer("Сколько в среднем зубов у взрослого человека?", "32");
// checkQuestionAnswer("Как называется самая маленькая птица в мире?", "Колибри");