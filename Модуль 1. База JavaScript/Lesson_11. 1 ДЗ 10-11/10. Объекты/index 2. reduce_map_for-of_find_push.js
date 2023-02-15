//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'сортирует очередь из пациентов.".'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================
const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" }
];

function giveTalonsInOrder(patients, orders) {
  return orders.map((order) => patients[order - 1])
}

// const giveTalonsInOrder = (patients, orders) => {
//   // console.log("orders", orders);
//   const objectWithIndexes = patients.reduce((acc, curPerson) => {
//     acc[curPerson.id] = curPerson;
//     // console.log("acc", acc);
//     return acc;
//   }, {});
//   console.log("people", people);
//    console.log("objectWithIndexes", objectWithIndexes);
//   return orders.map((order) => objectWithIndexes[order]);
// };

const result = giveTalonsInOrder(people, ordersArr);
console.log("result", result);
/* Возвращает массив
[
    { id: 4, name: 'Виталий' },
    { id: 2, name: 'Николай' },
    { id: 1, name: 'Максим' },
    { id: 3, name: 'Ангелина' }
]
*/




// const ordersArr1 = [4, 2, 1, 3];
// const people1 = [
//   { id: 1, name: "Максим" },
//   { id: 2, name: "Николай" },
//   { id: 3, name: "Ангелина" },
//   { id: 4, name: "Виталий" }
// ];


// function giveTalonsInOrder1(patients, orders) {
//   let newArr = []
//   for (let id of orders) {
//     let newArr1 = patients.find((pat) => pat.id === id)
//     newArr.push(newArr1)
//   }
// // ----------  второй вариант 
//   // for (let i = 0; i < orders.length; i++) {
//   //   console.log(orders[i])
//   //   let newArr1 = patients.find((pat) => pat.id === orders[i])
//   //   newArr.push(newArr1)
//   //   console.log('newArr1', newArr1)
//   // }
//   return newArr
  
// }


// const result1 = giveTalonsInOrder1(people1, ordersArr1);
// console.log("result", result1);
/* Возвращает массив
[
   { id: 4, name: 'Виталий' },
   { id: 2, name: 'Николай' },
   { id: 1, name: 'Максим' },
   { id: 3, name: 'Ангелина' }
]
*/