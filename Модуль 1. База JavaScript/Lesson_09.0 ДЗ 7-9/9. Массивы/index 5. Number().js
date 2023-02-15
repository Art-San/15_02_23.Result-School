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

const clientsEstimations = [];

const askClientToGiveEstimation = () => {
  const clientEstimationString = prompt(
    "Как вы оцениваете нашу кофейню от 1 до 10?"
  );
  const clientEstimation = Number(clientEstimationString);
  if (clientEstimation >= 1 && clientEstimation <= 10) {
    clientsEstimations.push(clientEstimation);
  }
};

for (let i = 0; i < 5; i += 1) {
  askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter(
  (estimation) => estimation > 5
);
const notGoodEstimations = clientsEstimations.filter(
  (estimation) => estimation <= 5
);

console.log(goodEstimations, notGoodEstimations);

alert(
  `Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`
);


//  МОЕ РЕШЕНИЕ
// ==================================================================
// let clientsEstimations = []

// function askClientToGiveEstimation() {
//     grade = prompt("Как вы оцениваете нашу кофейню от 1 до 10?")
//     if (grade > 0 && grade <= 10) {
//         clientsEstimations.push(Number(grade))
//     }
// }


// function callAlert(n = 5) {
//     for(let i = 0; i < n; i++) {
//         askClientToGiveEstimation()
//     }
// }
// callAlert()

// // console.log("clientsEstimations", clientsEstimations)

// let goodEstimations = clientsEstimations.filter((grade) => grade <= 5)
// // console.log("goodEstimations", goodEstimations)S
// let notGoodEstimations = clientsEstimations.filter((grade) => grade > 5)
// // console.log("goodEstimations", notGoodEstimations)


// alert(`
// Всего положительных оценок: ${goodEstimations.length};
// Всего отрицательных оценок: ${notGoodEstimations.length}
// `)


// const filterSalaries = salariesOfDeveloper.filter((salary, index, array) => {
//     // return salary > 500;                                                       // [600, 2000]   
//     // return salary % 2 === 0;                                                // [400, 500, 350]
//     return salary % 2;                                                         // [9]
    
// })
